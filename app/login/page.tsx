"use client";

import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    // ❌ LOGIN GAGAL
    if (result?.error) {
      alert("Email atau password salah");
      return;
    }

    // 🔐 AMBIL SESSION
    const session = await getSession();

    // ✅ REDIRECT BERDASARKAN ROLE
    if (session?.user?.role === "ADMIN") {
      router.push("/admin");
    } else if (session?.user?.role === "TECHNICIAN") {
      router.push("/technician");
    } 
    else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg px-4 py-3 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-4 py-3 mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}