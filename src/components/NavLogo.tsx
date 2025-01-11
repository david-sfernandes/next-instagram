"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function NavLogo() {
  const { theme } = useTheme();

  return (
    <Link
      href="/"
      className="hidden md:flex md:mt-10 md:mb-8 justify-center xl:justify-start ml-[2px]"
    >
      <Image
        src="/lg-instagram-white-icon.png"
        alt="Instagram Logo"
        className={`object-contain h-[29px] w-[104px] hidden xl:inline-block ml-3 
          ${theme === "dark" ? "invert-0" : "invert"}`}
        height={50}
        width={178}
      />
      <Image
        src="/instagram-white-icon.png"
        alt="Instagram Logo"
        className={`object-contain h-8 inline-block xl:hidden 
          ${theme === "dark" ? "invert-0" : "invert"}`}
        height={68}
        width={68}
      />
    </Link>
  );
}
