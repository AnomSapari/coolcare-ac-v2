"use client";

import { motion } from "framer-motion";

const items = [
  {
    icon: "⚡",
    title: "Fast Response",
    desc: "Teknisi cepat datang ke lokasi Anda",
  },
  {
    icon: "🛠️",
    title: "Profesional",
    desc: "Dikerjakan teknisi berpengalaman",
  },
  {
    icon: "📍",
    title: "Tracking",
    desc: "Pantau progress pekerjaan realtime",
  },
];

export default function Features() {
  return (
    <section className="py-16 border-t border-slate-900 bg-slate-950">

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">

        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-6
            cursor-pointer transition-all duration-300 overflow-hidden"
          >

            {/* GLOW BACKGROUND */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-cyan-500/10 blur-2xl" />

            {/* ICON */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl mb-4 relative z-10"
            >
              {item.icon}
            </motion.div>

            {/* TITLE */}
            <h3 className="text-white font-bold text-lg mb-1 group-hover:text-cyan-400 transition relative z-10">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-slate-400 text-sm relative z-10">
              {item.desc}
            </p>

            {/* BORDER GLOW LINE */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-500" />

          </motion.div>
        ))}

      </div>

    </section>
  );
}