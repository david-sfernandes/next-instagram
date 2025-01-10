import GoogleBtn from "@/components/GoogleBtn";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const { sessionClaims } = await auth();
  if (sessionClaims?.email) {
    redirect("/");
  }

  return (
    <main
      className=" flex flex-col justify-center items-center h-screen pt-5 bg-light
    text-color-lighter"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full w-full md:w-[55vw] m-auto">
        <section className="relative hidden md:block">
          <Image
            className="object-contain h-[80vh]"
            alt="Sign in"
            fill
            src="https://firebasestorage.googleapis.com/v0/b/next-insta-clone-35bdd.appspot.com/o/instagram-signin.png?alt=media&token=296f2a6e-cad5-4573-a85b-5dd5440c30c5"
          />
        </section>
        <section className="flex flex-col bg-lighter border py-10 px-4 text-center m-auto">
          <Image
            className="w-60 m-auto"
            width={320}
            height={320}
            alt="Logo"
            src="https://links.papareact.com/ocw"
          />
          <p className="text-xs italic">
            This is not a REAL app. It's built for educational purposes only.
          </p>
          <div>
            <GoogleBtn />
          </div>
        </section>
      </div>
      <div className="flex flex-col w-full mb-5 justify-center items-center p-2">
        <ul className="text-xs flex flex-wrap mt-9 max-w-screen-xl justify-center">
          <li>Meta</li>
          <li className="footer-menu-item">Sobre</li>
          <li className="footer-menu-item">Blog</li>
          <li className="footer-menu-item">Carreiras</li>
          <li className="footer-menu-item">Ajuda</li>
          <li className="footer-menu-item">API</li>
          <li className="footer-menu-item">Privacidade</li>
          <li className="footer-menu-item">Termos</li>
          <li className="footer-menu-item">Localizaçõe</li>
          <li className="footer-menu-item">Instagram</li>
          <li className="footer-menu-item">Lite</li>
          <li className="footer-menu-item">Threads</li>
          <li className="footer-menu-item">
            Carregamento de contatos e não usuários
          </li>
          <li className="footer-menu-item">Meta Verified</li>
        </ul>
        <p className="text-xs mt-3">
          © 2024 Instagram Clone by{" "}
          <a href="https://github.com/david-sfernandes" className="underline">
            David S.
          </a>
        </p>
      </div>
    </main>
  );
}
