"use client";
import { signIn } from "next-auth/react";

export default function GoogleBtn() {
  return (
    <button
      className="mt-5 p-3 bg-blue-400 rounded-lg text-white text-sm"
      onClick={() => signIn("google", { callbackUrl: "/" })}
    >
      Sign in with Google
    </button>
  );
}
