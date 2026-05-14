"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {

  const handleLogout = async () => {

    await signOut({
      callbackUrl: "/login",
    });

  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-400 transition px-5 py-3 rounded-xl font-semibold text-white"
    >
      Logout
    </button>
  );
}