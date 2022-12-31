import {
  ChatBubbleOvalLeftEllipsisIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon, PlayIcon } from "@heroicons/react/24/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const { data: session } = useSession();

  return (
    <footer className="lg:hidden flex items-center w-full sticky bottom-0 justify-between px-14 border-t bg-white">
      <Link href="/" className="navItem">
        <HomeIcon className="navBtn" />
      </Link>
      <MagnifyingGlassIcon className="navBtn" />
      <MapPinIcon className="navBtn" />
      <PlayIcon className="navBtn" />
      <ChatBubbleOvalLeftEllipsisIcon className="navBtn" />
      <PlusCircleIcon className="navBtn" />
      {session ? (
        <Image
          onClick={() => signOut()}
          src={String(session?.user?.image)}
          className="h-6 w-6 rounded-full"
          height={50}
          width={50}
          alt="User avatar"
        />
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </footer>
  );
}
