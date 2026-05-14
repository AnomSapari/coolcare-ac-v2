"use client";

import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import JoinTechnician from "@/components/JoinTechnician";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import LiveTechnicians from "@/components/LiveTechnicians";
import MobileCTA from "@/components/MobileCTA";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="pb-28 md:pb-0 bg-slate-950 text-white overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" />
        <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/20 blur-3xl rounded-full" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <div className="text-cyan-300 text-sm mb-4">
              ⚡ Teknisi AC Profesional
            </div>

            <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-4">
              Service AC Cepat & Bergaransi
              <span className="block text-cyan-400 mt-2">
                Teknisi Datang Hari Ini
              </span>
            </h1>

            <p className="text-slate-300 mb-6">
              Teknisi siap datang ke lokasi Anda dengan cepat, profesional, dan bergaransi penuh.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">

              <a
                href="#booking"
                className="bg-cyan-500 hover:bg-cyan-600 transition px-6 py-4 rounded-xl font-bold text-center"
              >
                Booking Sekarang
              </a>

              <a
                href="https://wa.me/6283891515097"
                target="_blank"
                className="bg-green-500 hover:bg-green-600 transition px-6 py-4 rounded-xl font-bold text-center"
              >
                WhatsApp
              </a>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >

            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />

            <img
              src="/ac.jpg"
              alt="Service AC"
              className="relative z-10 w-full max-w-md md:max-w-xl rounded-3xl border border-white/10"
            />

          </motion.div>

        </div>
      </section>

      {/* FEATURES */}
      <Features />

      {/* SERVICES */}
      <section id="layanan" className="scroll-mt-20">
        <Services />
        <LiveTechnicians />
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* JOIN TECHNICIAN */}
      <JoinTechnician />

      {/* BOOKING */}
      <section id="booking" className="py-10 scroll-mt-20">
        <BookingForm />
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">

          <div>
            <h3 className="text-cyan-400 font-bold text-lg">
              CoolCare AC
            </h3>
            <p className="text-slate-500">
              Service AC Profesional & Bergaransi
            </p>
          </div>

          <p className="text-slate-500 text-sm">
            © 2026 CoolCare AC. All rights reserved.
          </p>

        </div>
      </footer>

      {/* FLOATING ELEMENTS */}
      <FloatingWhatsApp />
      <MobileCTA />

    </main>
  );
}