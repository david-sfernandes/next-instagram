"use client";
import { HeartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed md:hidden top-0 left-0 right-0 h-[60px] border border-b-zinc-300 z-10 bg-white">
      <div className="flex h-full w-full px-4 items-center justify-between">
        <Link href="/" className="relative h-7">
          <Image
            src="https://links.papareact.com/ocw"
            alt="Instagram Logo"
            className="object-contain hidden h-7 w-[103px] sm:inline-block"
            height={28}
            width={90}
          />
          <Image
            src="https://links.papareact.com/jjm"
            alt="Instagram Logo"
            className="object-contain h-7 sm:hidden"
            height={28}
            width={28}
          />
        </Link>
        <div className="flex items-center max-w-[268px] h-9">
          <div className="flex rounded-lg mx-auto px-4 py-1 bg-zinc-100 items-center">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              className="outline-none block w-full pl-2 sm:text-sm 
              border-0 focus:ring-black rounded-md bg-transparent py-0"
              placeholder="Search..."
            />
          </div>
          <HeartIcon className="nav-icon ml-5 w-7 h-7" />
        </div>
      </div>
    </header>
  );
}
