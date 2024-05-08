import { auth } from "@/auth";
import {
  Bars3Icon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon, PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import ProfileItem from "./ProfileItem";

export default async function Header() {
  const session = await auth();

  return (
    <nav className="nav-sm-view md:nav-md-view min-w-0 xl:min-w-[245px] bg-white z-10">
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
        {session && <ProfileItem session={session} />}
      </div>
      <div className="hidden md:nav-md-content md:px-2 justify-end mt-auto">
        <div className="nav-item mb-5">
          <Bars3Icon className="nav-icon m-3" />
          <p className="nav-text">Mais</p>
        </div>
      </div>
    </nav>
  );
}
