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
    <section className="w-full">
      <div className="flex justify-between text-sm mb-5 max-w-full">
        <h3 className="text-sm font-bold text-gray-400">Sugestões para vocÊ</h3>
        <button className="text-gray-600 font-semibold">Ver tudo</button>
      </div>
      {suggestions.map((suggestion) => (
        <div
          key={suggestion.userId}
          className="flex items-center justify-between mt-3 gap-2"
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
            <h3 className="text-gray-400 text-xs max-w-[207px] truncate">
              Trabalha em {suggestion.company.name()}
            </h3>
          </div>
          <button className="actionBtn text-sm">Seguir</button>
        </div>
      ))}
      <ul className="text-sm text-gray-400 flex flex-wrap w-[320px] py-2">
        <li>Sobre</li>
        <li className="before:content-['·'] before:p-1">Ajuda</li>
        <li className="before:content-['·'] before:p-1">Imprensa</li>
        <li className="before:content-['·'] before:p-1">API</li>
        <li className="before:content-['·'] before:p-1">Carreiras</li>
        <li className="before:content-['·'] before:p-1">Privacidade</li>
        <li className="before:content-['·'] before:p-1">Termos</li>
        <li className="before:content-['·'] before:p-1">Localizações</li>
        <li className="before:content-['·'] before:p-1">Idioma</li>
      </ul>
      <p className="text-sm text-gray-400">
        2022 INSTAGRAM CLONE by{" "}
        <a href="https://github.com/david-sfernandes" className="underline">
          David S.
        </a>
      </p>
    </section>
  );
}
