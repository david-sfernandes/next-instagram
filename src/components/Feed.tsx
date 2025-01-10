import { auth } from "@clerk/nextjs/server";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

export default async function Feed() {
  const { sessionId } = await auth();

  return (
    <div
      className={`md:ml-[70px] xl:ml-[244px] flex justify-center w-full md:px-1`}
    >
      <section className="w-full max-w-[630px] mx-auto py-16 md:py-0">
        <Stories />
        <Posts />
      </section>
      {sessionId && (
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
