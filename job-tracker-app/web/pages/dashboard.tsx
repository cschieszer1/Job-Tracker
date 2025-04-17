import { SignedIn, SignedOut } from "@clerk/nextjs";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Dashboard() {
  const { data, error } = useSWR("/api/jobs", fetcher);

  return (
    <main className="p-4">
      <SignedOut>
        <p>You must be signed in to view this page.</p>
      </SignedOut>
      <SignedIn>
        <h1 className="text-2xl mb-4">Your Job Applications</h1>
        {error && <p>Error loading jobs.</p>}
        {!data && <p>Loading...</p>}
        {data && data.jobs.map((job: any) => (
          <div key={job._id} className="p-2 border-b">
            <p className="font-semibold">{job.title}</p>
            <p className="text-sm text-gray-500">{job.company}</p>
          </div>
        ))}
      </SignedIn>
    </main>
  );
}
