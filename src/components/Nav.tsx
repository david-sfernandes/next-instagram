import { auth } from "@/auth";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
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
import ThemeSwitch from "./ThemeSwitch";
import NavLogo from "./NavLogo";
import NavCreatePostBtn from "./NavCreatePostBtn";

export default async function Header() {
  const session = await auth();

  return (
    <nav className="nav-sm-view md:nav-md-view min-w-0 xl:min-w-[245px] bg-lighter z-10">
      <div className="nav-sm-content md:nav-md-content md:px-2">
        <NavLogo />
        <Link href="/" className="nav-item">
          <HomeIcon className="nav-icon m-[14px]" />
          <p className="nav-text">Página inicial</p>
        </Link>
        <div className="hidden md:nav-item">
          <MagnifyingGlassIcon className="nav-icon m-[14px]" />
          <p className="nav-text">Pesquisa</p>
        </div>
        <div className="nav-item">
          <MapPinIcon className="nav-icon m-[14px]" />
          <p className="nav-text">Explorar</p>
        </div>
        <div className="nav-item">
          <PlayIcon className="nav-icon m-[14px]" />
          <p className="nav-text">Reels</p>
        </div>
        <div className="nav-item">
          <ChatBubbleOvalLeftEllipsisIcon className="nav-icon m-[14px]" />
          <p className="nav-text">Mensagens</p>
        </div>
        <div className="hidden md:nav-item">
          <HeartIcon className="nav-icon m-[14px]" />
          <p className="nav-text">Notificações</p>
        </div>
        <NavCreatePostBtn />
        <ProfileItem session={session} />
      </div>
      <div className="hidden md:nav-md-content md:px-2 justify-end mt-auto">
        <Menu>
          <MenuButton className="nav-item mb-5">
            <Bars3Icon className="nav-icon m-[14px]" />
            <p className="nav-text">Mais</p>
          </MenuButton>
          <Transition
            enter="transition ease-out duration-75"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <MenuItems
              anchor="top end"
              className="w-52 origin-top-right rounded-xl border border-gray-500/15 bg-light p-1 text-sm/6 
              text-zinc-950 dark:text-zinc-100 [--anchor-gap:var(--spacing-1)] focus:outline-none shadow-lg z-10"
            >
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  Alterar exibição
                  <ThemeSwitch />
                </button>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
}
