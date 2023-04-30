import Image from "next/image";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  HeartIcon,
  Bars3Icon,
  MapPinIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon, PlayIcon } from "@heroicons/react/24/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <header
      className="flex items-center md:items-start lg:flex-col shadow-sm border-r border-b bg-white 
    sticky lg:fixed top-0 left-0 z-50 xl:w-[245px] h-[60px] lg:h-screen p-3"
    >
      <Link href="/" className="relative lg:w-full h-8 lg:mb-8 lg:mt-4 px-2">
        <Image
          src="https://links.papareact.com/ocw"
          alt="Instagram Logo"
          className="object-contain hidden h-8 w-[103px] xl:inline-block"
          height={30}
          width={100}
        />
        <Image
          src="https://links.papareact.com/jjm"
          alt="Instagram Logo"
          className="object-contain h-7 xl:hidden"
          height={30}
          width={30}
        />
      </Link>

      <div className="max-w-xs lg:hidden mt-[2px] mx-auto">
        <div className="relative rounded-md ">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="outline-none bg-gray-100 block w-full pl-10 sm:text-sm 
             border-0 focus:ring-black rounded-md"
            placeholder="Search..."
          />
        </div>
      </div>
      <HeartIcon className="navBtn my-auto ml-4 w-7 h-7 lg:hidden" />

      <div className="hidden lg:flex flex-col items-start h-full">
        <Link href="/" className="navItem group font-medium">
          <HomeIcon className="navBtn" />
          <p className="hidden xl:block">Página inicial</p>
        </Link>
        <button className="navItem group">
          <MagnifyingGlassIcon className="navBtn" />
          <p className="hidden xl:block">Pesquisar</p>
        </button>
        <button className="navItem group">
          <MapPinIcon className="navBtn" />
          <p className="hidden xl:block">Explorar</p>
        </button>
        <button className="navItem group">
          <PlayIcon className="navBtn" />
          <p className="hidden xl:block">Reels</p>
        </button>
        <button className="navItem group">
          <ChatBubbleOvalLeftEllipsisIcon className="navBtn" />
          <p className="hidden xl:block">Mensagens</p>
        </button>
        <button className="navItem group">
          <HeartIcon className="navBtn" />
          <p className="hidden xl:block">Notificações</p>
        </button>
        <button
          className="navItem group cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <PlusCircleIcon className="navBtn" />
          <p className="hidden xl:block">Criar</p>
        </button>
        {session ? (
          <button className="navItem group">
            <Image
              onClick={() => signOut()}
              src={String(session?.user?.image)}
              className="h-6 w-6 rounded-full"
              height={50}
              width={50}
              alt="User avatar"
            />
            <p className="hidden xl:block">Perfil</p>
          </button>
        ) : (
          <button onClick={() => signIn()} className="navItem" title="Sign in">
            <ArrowLeftOnRectangleIcon className="navBtn" />
            <p className="hidden xl:block">Sign in</p>
          </button>
        )}
        <button className="navItem group mt-auto">
          <Bars3Icon className="navBtn" />
          <p className="hidden xl:block">Mais</p>
        </button>
      </div>
    </header>
  );
}
