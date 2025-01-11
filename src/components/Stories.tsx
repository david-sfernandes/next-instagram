"use client";
import { useUser } from "@clerk/nextjs";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";

export default function Stories() {
  const [suggestions, setSuggestions] = useState<StoryProps[]>([]);
  const { user } = useUser();

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      userId: faker.string.uuid(),
      username: faker.internet.username(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <section className="stories-section">
      {user && (
        <Story
          img={user.imageUrl}
          username={user.username || user.firstName || ""}
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
