"use client";
import { SignedOut, SignInButton, useUser } from "@clerk/nextjs";
import { LogInIcon } from "lucide-react";
import Link from "next/link";

export default function ProfileItem() {
  const { user } = useUser();

  if (!user) {
    return (
      <Link href={"/signin"} className="nav-item">
        <LogInIcon className="nav-icon m-3" />
        <p className="nav-text">Sign in</p>
      </Link>
    );
  }
  return (
    <SignedOut>
      <div className="flex items-center">
        <SignInButton />
        <p className="nav-text">Perfil</p>
      </div>
    </SignedOut>
  );
}
