import "./globals.css";
import Link from "next/link";

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>
    <header className="nav"><div className="navin">
      <Link href="/" className="brand"><span className="logo">✓</span>RIGHT</Link>
      <nav><Link href="/jobs">Find Work</Link>{" · "}<Link href="/post-job">Post a Job</Link>{" · "}<Link href="/login">Login</Link></nav>
    </div></header>
    {children}
  </body></html>
}