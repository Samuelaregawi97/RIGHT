import Link from "next/link";
export default function Home(){
 return <main>
  <section className="hero"><div className="container">
   <h1>RIGHT work.<br/>RIGHT people.</h1>
   <p className="muted">A global marketplace connecting employers with skilled workers.</p>
   <p><Link className="btn" href="/register">Create an account</Link>{" "}<Link className="btn secondary" href="/jobs">Explore jobs</Link></p>
  </div></section>
  <section className="container"><div className="grid">
   <div className="card"><h2>For Workers</h2><p>Build your profile, find international opportunities, submit proposals and get paid securely.</p></div>
   <div className="card"><h2>For Employers</h2><p>Post projects, compare proposals, hire workers and manage contracts.</p></div>
   <div className="card"><h2>Secure Payments</h2><p>Card, crypto and regional payout providers can be integrated through a secure payment layer.</p></div>
  </div></section>
 </main>
}