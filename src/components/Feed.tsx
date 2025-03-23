import { auth } from "@clerk/nextjs/server";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

export default async function Feed() {
  const { sessionId } = await auth();

  return (
    <div
      className="md:ml-[70px] xl:ml-[244px] flex justify-center w-full md:px-1"
    >
      <section className="w-full max-w-[630px] py-16 md:py-0 md:mr-16">
        <Stories />
        <Posts />
      </section>
      {sessionId && (
        <section className="hidden xl:block justify-items-end w-[319px]">
          <div className="fixed top-0 flex flex-col w-[319px] px-4">
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      )}
    </div>
  );
}
