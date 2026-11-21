"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [session, setSession] = useState({ user: null, loading: Boolean(auth) });

  useEffect(() => {
    if (!auth) return;
    return onAuthStateChanged(auth, (user) => setSession({ user, loading: false }));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...session,
        configured: Boolean(auth),
        gitHubSignIn: () => signInWithPopup(auth, new GithubAuthProvider()),
        firebaseSignOut: () => signOut(auth),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(AuthContext);
}
