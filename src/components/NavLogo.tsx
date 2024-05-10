"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function NavLogo() {
  const { theme } = useTheme();

  return (
    <Link
      href="/"
      className="hidden md:flex md:mt-9 md:mb-7 justify-center xl:justify-start"
    >
      <Image
        src={
          theme === "dark"
            ? "/lg-instagram-white-icon.png"
            : "https://links.papareact.com/ocw"
        }
        alt="Instagram Logo"
        className="object-contain h-[29px] w-[104px] hidden xl:inline-block ml-3"
        height={28}
        width={90}
      />
      <Image
        src={
          theme === "dark"
            ? "/instagram-white-icon.png"
            : "https://links.papareact.com/jjm"
        }
        alt="Instagram Logo"
        className="object-contain h-8 inline-block xl:hidden"
        height={28}
        width={28}
      />
    </Link>
  );
}
