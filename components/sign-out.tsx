"use client";
import { signOut } from "next-auth/react";

export default function SignOut(): JSX.Element {
  return (
    <button
      className="text-stone-400 hover:text-stone-200 transition-all"
      onClick={() => signOut()}
    >
      Goddammit, sign me out!
    </button>
  );
}
