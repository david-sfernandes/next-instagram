import { auth } from "@/auth";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

export default async function Feed() {
  const session = await auth();

  return (
    <div
      className={`md:ml-[70px] xl:ml-[244px] flex justify-center w-full px-1`}
    >
      <section className="w-full max-w-[630px] mx-auto">
        {session && (
          <>
            <Stories session={session} />
            <Posts session={session} />
          </>
        )}
      </section>
      {session && (
        <section className="hidden xl:inline-grid w-[383px] pl-16 justify-items-end">
          <div className="fixed">
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      )}
    </div>
  );
}
