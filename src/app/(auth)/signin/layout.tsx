import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - Instagram Clone",
  description: "Instagram clone made with Next.js",
};

export default function SignInLayout({ children }: LayoutProps) {
  return children;
}
