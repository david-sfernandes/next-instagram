import Feed from "@/components/Feed";
import Modal from "@/components/Modal";

export default async function Page() {

  return (
    <main className="flex bg-lighter">
      <Feed />
      <Modal />
    </main>
  );
}
