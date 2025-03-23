"use client";

import { SignInButton } from "@clerk/nextjs";

export default function GoogleBtn() {
  return (
    <SignInButton>
      <button
        type="button"
        className="mt-5 p-3 bg-blue-400 rounded-lg text-white text-sm"
      >
        Sign in with Google
      </button>
    </SignInButton>
  );
}
