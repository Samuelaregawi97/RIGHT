import { cookies } from "next/headers";
import crypto from "node:crypto";
import { db } from "./db";

const COOKIE = "right_session";

function sign(value: string) {
  return crypto.createHmac("sha256", process.env.AUTH_SECRET!).update(value).digest("hex");
}

export async function createSession(userId: string) {
  const value = `${userId}.${Date.now()}`;
  const token = `${value}.${sign(value)}`;
  const jar = await cookies();
  jar.set(COOKIE, token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 30 });
}

export async function getCurrentUser() {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [userId, issued, signature] = parts;
  const value = `${userId}.${issued}`;
  if (sign(value) !== signature) return null;
  return db.user.findUnique({ where: { id: userId } });
}

export async function clearSession() {
  const jar = await cookies();
  jar.delete(COOKIE);
}
