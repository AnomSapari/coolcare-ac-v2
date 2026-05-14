"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

// 🔥 DATA TESTIMONI
const testimonials = [
  {
    name: "Rahadian",
    comment:
      "Pelayanan cepat dan AC langsung dingin lagi. Teknisi ramah dan profesional.",
  },
  {
    name: "Sapari Co",
    comment:
      "Booking mudah lewat WhatsApp dan harga sangat terjangkau.",
  },
  {
    name: "Madona",
    comment:
      "Recommended banget untuk service AC rumah dan kantor.",
  },
];

export default function Testimonials() {

  return (
    <section
      id="testimoni"
      className="relative overflow-hidden bg-slate-950 py-28 text-white"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">

          <p className="mb-4 font-semibold text-cyan-400">
            TESTIMONI CUSTOMER
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Apa Kata Mereka?
          </h2>

        </div>

        {/* GRID TESTIMONI */}
        <div className="grid gap-8 md:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
            >

              {/* STARS */}
              <div className="mb-5 flex gap-1">

                {[...Array(5)].map((_, i) => (

                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

              {/* COMMENT */}
              <p className="mb-6 leading-relaxed text-slate-300">
                {`"${item.comment}"`}
              </p>

              {/* NAME */}
              <h3 className="text-lg font-bold text-white">
                {item.name}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}