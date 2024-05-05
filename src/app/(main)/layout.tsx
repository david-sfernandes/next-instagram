import Header from "@/components/Header";
import Nav from "@/components/Nav";
import "@/app/globals.css";

export default function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Nav />
    </>
  );
}
