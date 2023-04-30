import { useEffect, useState } from "react";
// import faker from "faker";
import { faker } from "@faker-js/faker";
import Story from "./Story";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";

export default function Stories() {
  const [suggestions, setSuggestions] = useState<StoryProps[]>([]);
  let { data: session }: CustomSession = useSession();

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <section
      className="flex gap-4 p-6 bg-white
    md:mt-7 border-gray-200 border rounded-lg 
    overflow-x-scroll scrollbar-thin 
    scrollbar-thumb-black"
    >
      {session && (
        <Story
          img={String(session.user?.image)}
          username={session.user?.username}
        />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.userId}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </section>
  );
}
