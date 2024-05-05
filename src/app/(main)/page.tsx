import { auth } from "@/auth";
import Feed from "@/components/Feed";
import Modal from "@/components/Modal";

export default async function Page() {
  const session = await auth();
  return (
    <main>
      <Feed />
      {/* {session && <Modal session={session}/>} */}
    </main>
  );
}