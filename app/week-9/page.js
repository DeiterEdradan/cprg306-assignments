"use client";

import Link from "next/link";
import { useState } from "react";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, loading, configured, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function handleAuth() {
    setError("");
    setPending(true);
    try {
      await (user ? firebaseSignOut() : gitHubSignIn());
    } catch (error) {
      const action = user ? "sign out" : "sign in";
      setError(`Could not ${action}. ${error.code ?? "Please try again."}`);
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="min-h-screen bg-pink-50 px-4 py-10 text-pink-950">
      <div className="mx-auto max-w-lg space-y-4">
        <h1 className="text-4xl font-bold text-pink-700">Shopping List</h1>
        {user && (
          <>
            <p>Welcome, {user.displayName || user.email || "GitHub user"}!</p>
            <Link className="block underline" href="/week-9/shopping-list">
              Open shopping list
            </Link>
          </>
        )}
        {loading && <p role="status">Checking sign-in status…</p>}
        {!configured && <p>Firebase setup is required before you can sign in.</p>}
        <button
          type="button"
          className="rounded bg-pink-700 px-4 py-2 text-white disabled:opacity-50"
          disabled={loading || pending || !configured}
          onClick={handleAuth}
        >
          {user ? "Sign out" : "Sign in with GitHub"}
        </button>
        {error && <p role="alert">{error}</p>}
      </div>
    </main>
  );
}
