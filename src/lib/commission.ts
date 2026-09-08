import { db } from "./db";

export async function calculateCommission(amount: number) {
  const config = await db.platformConfig.upsert({
    where: { id: "main" },
    create: {},
    update: {}
  });
  const fee = amount * config.commissionBps / 10000;
  return { fee, workerAmount: amount - fee, commissionBps: config.commissionBps };
}
