import Image from "next/image";
import SignOut from "./SignOut";
import { auth } from "@clerk/nextjs/server";

export default async function MiniProfile() {
  const { sessionClaims } = await auth();

  return (
    <section className="flex items-center justify-between mt-14 mb-2 px-4">
      <>
        <Image
          src={sessionClaims?.image || ""}
          alt=""
          className="profile-img w-12 h-12"
          width={50}
          height={50}
        />
        <div className="flex-1 mx-4">
          <h2 className="font-bold">{sessionClaims?.firstName}</h2>
          <h3 className="text-sm text-color-dark">Bem-vindo</h3>
        </div>
        <SignOut />
      </>
    </section>
  );
}
