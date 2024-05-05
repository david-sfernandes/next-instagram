"use client";
import {
  ArrowLeftEndOnRectangleIcon,
  Bars3Icon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon, PlayIcon } from "@heroicons/react/24/solid";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  // const { data: session } = useSession();
  const session = { user: { image: "https://links.papareact.com/3ke" } };

  return (
    <>
      <nav className="nav-sm-view md:nav-md-view min-w-0 xl:min-w-[244px]">
        <div className="nav-sm-content md:nav-md-content md:px-2">
          <Link
            href="/"
            className="hidden md:flex md:mt-9 md:mb-7 justify-center xl:justify-start"
          >
            <Image
              src="https://links.papareact.com/ocw"
              alt="Instagram Logo"
              className="object-contain h-8 w-[120px] hidden xl:inline-block"
              height={28}
              width={90}
            />
            <Image
              src="https://links.papareact.com/jjm"
              alt="Instagram Logo"
              className="object-contain h-8 inline-block xl:hidden"
              height={28}
              width={28}
            />
          </Link>
          <Link href="/" className="nav-item">
            <HomeIcon className="nav-icon m-3" />
            <p className="nav-text">Página inicial</p>
          </Link>
          <div className="hidden md:nav-item">
            <MagnifyingGlassIcon className="nav-icon m-3" />
            <p className="nav-text">Pesquisa</p>
          </div>

          <div className="nav-item">
            <MapPinIcon className="nav-icon m-3" />
            <p className="nav-text">Explorar</p>
          </div>

          <div className="nav-item">
            <PlayIcon className="nav-icon m-3" />
            <p className="nav-text">Reels</p>
          </div>

          <div className="nav-item">
            <ChatBubbleOvalLeftEllipsisIcon className="nav-icon m-3" />
            <p className="nav-text">Mensagens</p>
          </div>

          <div className="hidden md:nav-item">
            <HeartIcon className="nav-icon m-3" />
            <p className="nav-text">Notificações</p>
          </div>

          <div className="nav-item">
            <PlusCircleIcon className="nav-icon m-3" />
            <p className="nav-text">Criar</p>
          </div>

          {session ? (
            <div className="nav-item">
              <Image
                onClick={() => signOut()}
                src={String(session?.user?.image)}
                className="h-7 w-7 rounded-full m-3"
                height={50}
                width={50}
                alt="User avatar"
              />
              <p className="nav-text">Perfil</p>
            </div>
          ) : (
            <button onClick={() => signIn()}>
              <ArrowLeftEndOnRectangleIcon className="nav-icon m-3 h-7 w-7" />
            </button>
          )}
        </div>
        <div className="hidden md:nav-md-content md:px-2 justify-end mt-auto">
          <div className="nav-item mb-5">
            <Bars3Icon className="nav-icon m-3" />
            <p className="nav-text">Mais</p>
          </div>
        </div>
      </nav>
    </>
  );
}
