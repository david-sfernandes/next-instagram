import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

export default function MiniProfile() {
  const { data: session }: CustomSession = useSession();
  
  return (
    <section
      className="flex items-center justify-between
    mt-14 mb-2"
    >
      <>
        <Image
          src={String(session?.user?.image)}
          alt=""
          className="profileImg w-12 h-12"
          width={50}
          height={50}
        />
        <div className="flex-1 mx-4">
          <h2 className="font-bold">{session?.user?.username}</h2>
          <h3 className="text-sm text-gray-400">Bem-vindo ao Instagram</h3>
        </div>
        <button onClick={() => signOut()} className="actionBtn text-sm">
          Sign Out
        </button>
      </>
    </section>
  );
}
