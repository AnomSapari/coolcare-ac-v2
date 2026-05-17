"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  Wind,
  Wrench,
  Snowflake,
  ShieldCheck,
  BadgeCheck,
  Clock3,
} from "lucide-react";

const services = [
  {
    title: "Bongkar Pasang AC",
    desc: "Pindah lokasi atau pasang baru, kami siap membantu.",
    icon: Wrench,
    price: "Mulai 600K",
  },
  {
    title: "Cuci AC",
    desc: "Membersihkan AC agar kembali dingin dan hemat listrik.",
    icon: Wind,
    price: "Mulai 95K",
  },
  {
    title: "Isi Freon R22 R32 atau R410",
    desc: "Isi freon + pengecekan kebocoran profesional.",
    icon: Snowflake,
    price: "Mulai 210K",
  },
];

const benefits = [
  {
    title: "Teknisi Berpengalaman",
    icon: BadgeCheck,
  },
  {
    title: "Garansi Service",
    icon: ShieldCheck,
  },
  {
    title: "Fast Response",
    icon: Clock3,
  },
];

export default function Services() {
  return (
    <section
      id="layanan"
      className="relative py-20 bg-slate-950 text-white overflow-hidden"
    >
      {/* GLOW */}
      <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold">
            LAYANAN KAMI
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Solusi AC Cepat & Profesional
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Teknisi berpengalaman siap datang ke lokasi Anda hari ini juga.
          </p>
        </div>

        {/* SERVICES */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">

          {services.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6
              hover:border-cyan-500 hover:-translate-y-1 transition"
            >

              {/* ICON */}
              <div className="bg-cyan-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                <item.icon className="text-cyan-400 w-7 h-7" />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-bold mb-1">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-slate-400 text-sm mb-3">
                {item.desc}
              </p>

              {/* PRICE */}
              <p className="text-cyan-400 font-semibold mb-4">
                {item.price}
              </p>

              {/* CTA BUTTON */}
              <Link
                href="#booking"
                className="inline-block w-full text-center bg-cyan-500 hover:bg-cyan-600
                text-white font-bold py-2 rounded-lg transition"
              >
                Pesan Sekarang
              </Link>

            </div>
          ))}

        </div>

        {/* BENEFITS */}
        <div className="grid md:grid-cols-3 gap-4">

          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center gap-3"
            >
              <item.icon className="text-cyan-400 w-6 h-6" />
              <h3 className="text-sm font-medium">
                {item.title}
              </h3>
            </motion.div>
          ))}

        </div>

        {/* URGENCY TEXT */}
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            ⚡ Slot teknisi hari ini terbatas — booking sekarang sebelum penuh
          </p>
        </div>

      </div>
    </section>
  );
}