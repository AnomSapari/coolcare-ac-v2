"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {

  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="
        bg-red-500
        hover:bg-red-600
        transition
        px-5
        py-3
        rounded-2xl
        font-bold
        text-white
      "
    >
      Logout
    </button>
  );
}