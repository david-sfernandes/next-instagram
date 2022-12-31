import Image from "next/image";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  HeartIcon,
  Bars3Icon,
  MapPinIcon,
  ChatBubbleOvalLeftEllipsisIcon,
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
    <header className="flex lg:flex-col shadow-sm border-r border-b bg-white 
    sticky lg:fixed top-0 left-0 z-50 w-full lg:w-[245px] h-[60px] lg:h-screen p-3 lg:p-5">
      <Link href="/" className="relative lg:w-full h-8 lg:mb-8 lg:mt-4">
        <Image
          src="https://links.papareact.com/ocw"
          alt="Instagram Logo"
          className="object-contain hidden h-8 w-[103px] lg:inline-block"
          height={30}
          width={100}
        />
        <Image
          src="https://links.papareact.com/jjm"
          alt="Instagram Logo"
          className="object-contain h-8 lg:hidden"
          height={30}
          width={30}
        />
      </Link>

      <div className="max-w-xs lg:hidden mt-[2px] ml-auto">
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
        <Link href="/" className="navItem">
          <HomeIcon className="navBtn" />
          <p>Página inicial</p>
        </Link>
        <div className="navItem">
          <MagnifyingGlassIcon className="navBtn" />
          <p>Pesquisar</p>
        </div>
        <div className="navItem">
          <MapPinIcon className="navBtn" />
          <p>Explorar</p>
        </div>
        <div className="navItem">
          <PlayIcon className="navBtn" />
          <p>Reels</p>
        </div>
        <div className="navItem">
          <ChatBubbleOvalLeftEllipsisIcon className="navBtn" />
          <p>Mensagens</p>
        </div>
        <div className="navItem">
          <HeartIcon className="navBtn" />
          <p>Notificações</p>
        </div>
        <div className="navItem cursor-pointer" onClick={() => setOpen(true)}>
          <PlusCircleIcon className="navBtn" />
          <p>Criar</p>
        </div>
        {session ? (
          <div className="navItem">
            <Image
              onClick={() => signOut()}
              src={String(session?.user?.image)}
              className="h-6 w-6 rounded-full"
              height={50}
              width={50}
              alt="User avatar"
            />
            <p>Perfil</p>
          </div>
        ) : (
          <button onClick={() => signIn()}>Sign In</button>
        )}
        <div className="navItem mt-auto">
          <Bars3Icon className="navBtn" />
          <p>Mais</p>
        </div>
      </div>
    </header>
  );
}
