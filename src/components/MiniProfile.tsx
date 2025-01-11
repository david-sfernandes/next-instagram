import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import SignOut from "./SignOut";

export default async function MiniProfile() {
  const { sessionClaims } = await auth();

  return (
    <section className="flex items-center justify-between mt-9 mb-2 w-full">
      <Image
        src={sessionClaims?.image || ""}
        alt=""
        className="profile-img size-11"
        width={50}
        height={50}
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">{sessionClaims?.fullName}</h2>
        <h3 className="text-sm text-color-dark">Bem-vindo</h3>
      </div>
      <SignOut />
    </section>
  );
}
