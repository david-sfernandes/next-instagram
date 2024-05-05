"use client";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/solid";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function ProfileItem({ session }: { session: Session }) {
  if (!session) {
    return (
      <Link href={"/signin"} className="nav-item">
        <ArrowLeftEndOnRectangleIcon className="nav-icon m-3" />
        <p className="nav-text">Sign in</p>
      </Link>
    );
  }
  return (
    <button className="nav-item" onClick={() => signOut()}>
      <Image
        src={String(session.user?.image)}
        className="h-7 w-7 rounded-full m-3"
        height={50}
        width={50}
        alt="User avatar"
      />
      <p className="nav-text">Perfil</p>
    </button>
  );
}
