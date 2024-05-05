import { auth } from "@/auth";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

export default async function Feed() {
  const session = await auth();

  return (
    <div
      className={`lg:w-[820px] grid lg:grid-cols-[470px_1fr] mx-auto 
      ${!session && "!grid-cols-1 !max-w-3xl"}`}
    >
      <section className="w-[470px] max-w-[98vw] mx-auto">
        {session && (
          <>
            <Stories session={session} />
            <Posts session={session} />
          </>
        )}
      </section>
      {session && (
        <section className="hidden lg:inline-grid justify-items-end">
          <div className="fixed">
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      )}
    </div>
  );
}
