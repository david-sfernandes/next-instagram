import GoogleBtn from "@/components/GoogleBtn";
import Image from "next/image";

export default async function SignIn() {
  return (
    <main className="bg-gray-50 flex justify-center items-center">
      <div className="grid grid-cols-2 gap-6 h-screen w-[55vw] m-auto">
        <section className="relative">
          <Image
            className="object-contain h-[80vh]"
            alt="Sign in"
            fill
            src="https://firebasestorage.googleapis.com/v0/b/next-insta-clone-35bdd.appspot.com/o/instagram-signin.png?alt=media&token=296f2a6e-cad5-4573-a85b-5dd5440c30c5"
          />
        </section>
        <section className="flex flex-col bg-white border py-10 px-4 text-center m-auto">
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
    </main>
  );
}
