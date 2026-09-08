import { db } from "@/lib/db";
import Link from "next/link";

export default async function Jobs() {
  const jobs = await db.job.findMany({
    where: { status: "OPEN" },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return (
    <main className="container">
      <h1>Open jobs</h1>
      {jobs.length === 0 ? (
        <p className="muted">No jobs posted yet.</p>
      ) : (
        <div className="grid">
          {jobs.map((j: typeof jobs[number]) => (
            <div className="card" key={j.id}>
              <h2>{j.title}</h2>
              <p>{j.description.slice(0, 220)}</p>
              <p>
                {j.skills.map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </p>
              <p className="muted">
                {j.budgetMin?.toString()} – {j.budgetMax?.toString()} {j.currency}
              </p>
              <Link className="btn" href={`/jobs/${j.id}`}>
                View job
              </Link>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
