"use client";
import { faker } from "@faker-js/faker";
import { Session } from "next-auth";
import { useEffect, useState } from "react";
import Story from "./Story";

export default function Stories({ session }: { session: Session | null }) {
  const [suggestions, setSuggestions] = useState<StoryProps[]>([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      userId: faker.string.uuid(),
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
      className="flex gap-5 p-2 bg-lighter md:mt-7
      rounded-lg overflow-x-scroll scrollbar-thin 
    scrollbar-thumb-black"
    >
      {session && (
        <Story
          img={String(session.user?.image)}
          username={session.user?.name!}
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
