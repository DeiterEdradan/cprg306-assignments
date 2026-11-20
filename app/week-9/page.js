"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-teal-50 px-4">
      <h1 className="text-3xl font-bold text-teal-900">Shopping List</h1>
      {user ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-slate-800">
            Welcome, {user.displayName} ({user.email})
          </p>
          <Link
            href="/week-9/shopping-list"
            className="rounded-md bg-teal-600 px-4 py-2 font-semibold text-white hover:bg-teal-700"
          >
            Go to Shopping List
          </Link>
          <button
            onClick={handleSignOut}
            className="rounded-md bg-white px-4 py-2 font-semibold text-teal-800 ring-1 ring-teal-200 hover:bg-teal-50"
          >
            Log Out
          </button>
        </div>
      ) : (
        <button
          onClick={handleSignIn}
          className="rounded-md bg-teal-600 px-4 py-2 font-semibold text-white hover:bg-teal-700"
        >
          Log in with GitHub
        </button>
      )}
    </main>
  );
}
