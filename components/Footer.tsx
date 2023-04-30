import {
  ArrowLeftOnRectangleIcon,
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
    <footer className="lg:hidden w-full fixed 
    bottom-0 px-5 py-2 border-t bg-white">
      <nav className="max-w-sm mx-auto flex items-center justify-between ">
        <Link href="/" className="">
          <HomeIcon className="navBtn h-7 w-7" />
        </Link>
        <MapPinIcon className="navBtn h-7 w-7" />
        <PlayIcon className="navBtn h-7 w-7" />
        <PlusCircleIcon className="navBtn h-7 w-7" />
        <ChatBubbleOvalLeftEllipsisIcon className="navBtn h-7 w-7" />
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
          <button onClick={() => signIn()}><ArrowLeftOnRectangleIcon className="navBtn h-7 w-7" /></button>
        )}
      </nav>
    </footer>
  );
}
