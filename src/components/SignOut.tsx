import { SignOutButton } from "@clerk/nextjs";

export default function SignOut() {
  return (
    <SignOutButton>
      <button type="button" className="action-btn">
        Mudar
      </button>
    </SignOutButton>
  );
}
