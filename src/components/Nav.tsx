"use client";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  HeartIcon,
  Bars3Icon,
  MapPinIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon, PlayIcon } from "@heroicons/react/24/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  // const { data: session } = useSession();
  const session = { user: { image: "https://links.papareact.com/3ke" } };

  return (
    <>
      <nav className="nav-sm-view md:nav-md-view">
        <div className="nav-sm-content md:nav-md-content">
          <Link href="/" className="md:mt-4 md:mb-7 md:flex items-start">
            <HomeIcon className="navBtn m-3" />
          </Link>
          <MapPinIcon className="navBtn m-3" />
          <PlayIcon className="navBtn m-3" />
          <PlusCircleIcon className="navBtn m-3" />
          <ChatBubbleOvalLeftEllipsisIcon className="navBtn m-3" />
          {session ? (
            <Image
              onClick={() => signOut()}
              src={String(session?.user?.image)}
              className="h-7 w-7 rounded-full m-3"
              height={50}
              width={50}
              alt="User avatar"
            />
          ) : (
            <button onClick={() => signIn()}>
              <ArrowLeftEndOnRectangleIcon className="navBtn m-3 h-7 w-7" />
            </button>
          )}
        </div>
      </nav>
    </>
  );
}
