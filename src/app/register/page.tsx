 "use client";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Register(){
 const [msg,setMsg]=useState(""); const router=useRouter();
 async function submit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault(); const data=Object.fromEntries(new FormData(e.currentTarget));
  const r=await fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
  const j=await r.json(); if(!r.ok){setMsg(j.error||"Registration failed");return} router.push("/dashboard");
 }
 return <main className="container"><h1>Create your RIGHT account</h1><p className="muted">Choose Worker or Employer.</p>
 <form onSubmit={submit} className="card">
  <label className="label">Full name<input className="input" name="fullName" required/></label>
  <label className="label">Email<input className="input" type="email" name="email" required/></label>
  <label className="label">Phone<input className="input" name="phone"/></label>
  <label className="label">Country code<input className="input" name="countryCode" placeholder="ET" maxLength={2} required/></label>
  <label className="label">Account type<select className="input" name="role"><option value="WORKER">Worker</option><option value="EMPLOYER">Employer</option></select></label>
  <label className="label">Password<input className="input" type="password" name="password" minLength={8} required/></label>
  <button className="btn">Create account</button>{msg&&<p className="error">{msg}</p>}
 </form></main>
}