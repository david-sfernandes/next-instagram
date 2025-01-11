import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function ProfileItem() {
  const { sessionClaims } = await auth();

  return (
    <>
      <SignedOut>
        <Link href={"/signin"} className="nav-item">
          <LogInIcon className="nav-icon m-3" />
          <p className="nav-text">Sign in</p>
        </Link>
      </SignedOut>
      <SignedIn>
        <div className="nav-item ml-1">
          <Image
            src={sessionClaims?.image || ""}
            alt="Profile Image"
            className="h-7 w-7 rounded-full m-3"
            height={50}
            width={50}
          />
          <p className="nav-text">Perfil</p>
        </div>
      </SignedIn>
    </>
  );
}
