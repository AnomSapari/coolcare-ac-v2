"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[60] bg-slate-950/80 backdrop-blur border-b border-white/10">

      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* LOGO */}
        <div className="text-cyan-400 font-bold">
          CoolCare AC
        </div>

  {/* DESKTOP MENU */}
<div className="hidden md:flex items-center gap-2 text-sm">

  <Link
    href="#layanan"
    className="relative px-4 py-2 rounded-lg text-slate-300 hover:text-white transition group"
  >
    Layanan

    {/* underline animation */}
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full"></span>
  </Link>

  <Link
    href="#booking"
    className="relative px-4 py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition shadow-lg shadow-cyan-500/20"
  >
    Booking
  </Link>

  <Link
  href="/login"
  className="
    px-4
    py-2
    rounded-lg
    border
    border-cyan-500/30
    text-cyan-400
    hover:bg-cyan-500
    hover:text-white
    transition
  "
>
  Login
</Link>

</div>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-white text-2xl z-[70]"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-slate-950 border-t border-white/10 px-4 py-2 flex flex-col gap-2 z-[70] text-sm">

<Link
  href="/login"
  onClick={() => setOpen(false)}
  className="
    bg-cyan-500
    hover:bg-cyan-600
    px-5
    py-3
    rounded-xl
    font-bold
    text-white
    text-center
    transition
  "
>
  Login Akun
</Link>

  <Link href="#home" onClick={() => setOpen(false)} className="py-2">
    Home
  </Link>

  <Link href="#layanan" onClick={() => setOpen(false)} className="py-2">
    Layanan
  </Link>

  <Link href="#testimoni" onClick={() => setOpen(false)} className="py-2">
    Testimoni
  </Link>

  <Link href="#booking" onClick={() => setOpen(false)} className="py-2 bg-cyan-500 rounded-lg text-center">
    Booking
  </Link>

</div>
      )}

    </nav>
  );
}