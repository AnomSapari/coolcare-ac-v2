"use client";

import Link from "next/link";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-[50] md:hidden">

      <div className="bg-slate-950/95 backdrop-blur border-t border-white/10 flex text-sm">

        <Link
          href="#booking"
          className="flex-1 py-3 text-center bg-cyan-500 font-bold"
        >
          Booking
        </Link>

        <Link
          href="https://wa.me/6283891515097"
          target="_blank"
          className="flex-1 py-3 text-center bg-green-500 font-bold"
        >
          WhatsApp
        </Link>

      </div>

    </div>
  );
}