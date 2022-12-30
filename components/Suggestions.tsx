import { faker } from "@faker-js/faker";
import Image from "next/image";
import { useEffect, useState } from "react";

type SugestionProps = {
  userId: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
  birthdate: Date;
  registeredAt: Date;
  company: any;
};

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState<SugestionProps[]>([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, item) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
      company: faker.company,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <section>
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestion for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((suggestion) => (
        <div
          key={suggestion.userId}
          className="flex items-center justify-between mt-3"
        >
          <Image
            className="profileImg w-10 h-10"
            src={suggestion.avatar}
            width={40}
            height={40}
            alt=""
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{suggestion.username}</h2>
            <h3 className="text-gray-400 text-xs">
              Works at {suggestion.company.name()}
            </h3>
          </div>
          <button className="actionBtn text-sm">Follow</button>
        </div>
      ))}
    </section>
  );
}
