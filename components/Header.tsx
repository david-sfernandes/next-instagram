import Image from "next/image";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  UserIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <header className="shadow-sm border-b bg-white sticky top-0 z-50">
      <section className="flex justify-between items-center bg-white max-w-6xl mx-5 lg:mx-auto">
        <Link href="/" className="relative w-10 h-10 lg:w-24 lg:h-24">
          <Image
            src="https://links.papareact.com/ocw"
            fill
            alt="Instagram Logo"
            className="object-contain hidden lg:inline-block"
          />
          <Image
            src="https://links.papareact.com/jjm"
            fill
            alt="Instagram Logo"
            className="object-contain lg:hidden"
          />
        </Link>

        <div className="max-w-xs">
          <div className="relative p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              className="outline-none bg-gray-50 block w-full pl-10 sm:text-sm 
              border-gray-300 focus:ring-black rounded-md"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <Bars3Icon className="w-6 cursor-pointe md:hidden" />

          {session ? (
            <>
              <Link href="/">
                <HomeIcon className="navBtn" />
              </Link>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn -rotate-45" />
                <div
                  className="absolute -top-2 -right-1 text-xs w-4 h-4 rounded-full 
            bg-red-500 flex items-center justify-center animate-pulse text-white"
                >
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <Image
                onClick={() => signOut()}
                src={String(session?.user?.image)}
                className="profileImg h-10 w-10"
                height={50}
                width={50}
                alt="User avatar"
              />
            </>
          ) : (
            <button onClick={() => signIn()}>Sign In</button>
          )}
        </div>
      </section>
    </header>
  );
}
