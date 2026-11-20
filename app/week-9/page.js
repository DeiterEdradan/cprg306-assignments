"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

// Use the useUserAuth hook to get the user object and the login and logout functions
export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    // Sign in to Firebase with GitHub authentication
const handleSignIn = async () => {
    await gitHubSignIn();
};

// Sign out of Firebase
const handleSignOut = async () => {
    await firebaseSignOut();
};

// Display some of the user's information
return (
    <div>
        <h1>Assignment 9 - Welcome to the Shopping List App</h1>
        <p>
            {user ? (
                <button onClick={handleSignOut}>Sign Out</button>
            ) : (
                <button onClick={handleSignIn}>Sign In with GitHub</button>
            )}
        </p>
        {user && (
            <p>Welcome, {user.displayName}, Your email is {user.email}. and here is your image! <img src={user.photoURL}/></p>
        )}
        {user && (
            <Link href="/week-9/shopping-list">Shopping List Here</Link>
        )}
    </div>
    );
}


