import { SignedOut } from "@clerk/nextjs";

export default function SignOut() {
  return (
    <SignedOut>
      <button className="action-btn text-sm">
        Mudar
      </button>
    </SignedOut>
  );
}
