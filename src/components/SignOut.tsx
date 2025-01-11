import { SignedOut, SignOutButton } from "@clerk/nextjs";

export default function SignOut() {
  return (
    <SignOutButton>
      <button className="action-btn">
        Mudar
      </button>
    </SignOutButton>
  );
}
