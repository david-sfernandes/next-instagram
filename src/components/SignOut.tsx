"use client";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button onClick={() => signOut()} className="action-btn text-sm">
      Sign Out
    </button>
  );
}
