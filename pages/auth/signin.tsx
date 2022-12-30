import { BuiltInProviderType } from "next-auth/providers";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
} from "next-auth/react";
import Image from "next/image";
import Header from "../../components/Header";

type SignInProps = {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
};

export default function SignIn({ providers }: SignInProps) {
  return (
    <div>
      <Header />

      <main className="flex flex-col items-center justify-center 
      min-h-screen py-2 -mt-56 px-14 text-center">
        <Image
          className="w-80"
          width={320}
          height={320}
          alt="Logo"
          src="https://links.papareact.com/ocw"
        />
        <p className="text-xs italic">
          This is not a REAL app. It's built for educational purposes only.
        </p>
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="">
            <button
              className="mt-5 p-3 bg-blue-500 rounded-lg text-white"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
