import {getCurrentUser} from "@/lib/auth";
import Link from "next/link";
export default async function Dashboard(){
 const u=await getCurrentUser();
 if(!u)return <main className="container"><h1>Please log in</h1><Link className="btn" href="/login">Login</Link></main>;
 return <main className="container"><h1>Welcome, {u.fullName}</h1><p className="muted">Account: {u.role} · Country: {u.countryCode}</p>
 <div className="grid"><div className="card"><h2>Profile</h2><p>Complete your profile with skills, experience, portfolio and verification details.</p></div>
 <div className="card"><h2>Jobs & contracts</h2><p>Manage applications, contracts and work.</p></div>
 <div className="card"><h2>Payments</h2><p>Payment records and provider-linked payouts appear here.</p></div></div></main>
}