import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <SignedOut>
        <h1 className="text-2xl">Welcome to Job Tracker</h1>
        <SignUpButton mode="modal" />
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
        <a href="/dashboard" className="mt-4 text-blue-500 underline">Go to Dashboard</a>
      </SignedIn>
    </main>
  );
}
