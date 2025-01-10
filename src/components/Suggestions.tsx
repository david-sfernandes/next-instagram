"use client";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState<SugestionProps[]>([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, item) => ({
      userId: item + "suggestion",
      username: faker.internet.username(),
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
    <section className="w-full px-4">
      <div className="flex justify-between text-sm mb-5 max-w-full">
        <h3 className="text-xs font-bold text-color-lighter">
          Sugestões para você
        </h3>
        <button className="text-gray-600 font-semibold">Ver tudo</button>
      </div>
      {suggestions.map((suggestion) => (
        <div
          key={suggestion.userId}
          className="flex items-center justify-between mt-3 gap-2"
        >
          <Image
            className="profile-img w-11 h-11"
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
          <button className="action-btn text-sm">Seguir</button>
        </div>
      ))}
      <ul className="text-xs flex flex-wrap w-[320px] py-2 mt-9 text-color-lighter">
        <li className="text-xs">Sobre</li>
        <li className="footer-menu-item">Ajuda</li>
        <li className="footer-menu-item">Imprensa</li>
        <li className="footer-menu-item">API</li>
        <li className="footer-menu-item">Carreiras</li>
        <li className="footer-menu-item">Privacidade</li>
        <li className="footer-menu-item">Termos</li>
        <li className="footer-menu-item">Localizações</li>
        <li className="footer-menu-item">Idioma</li>
        <li className="footer-menu-item">Meta Verified</li>
      </ul>
      <p className="text-xs text-color-lighter mt-3">
        © 2024 Instagram Clone by{" "}
        <a href="https://github.com/david-sfernandes" className="underline">
          David S.
        </a>
      </p>
    </section>
  );
}
