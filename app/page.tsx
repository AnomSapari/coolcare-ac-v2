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
import TrackingForm from "@/components/TrackingForm";

export default function Home() {

  return (

    <main
      className="
        bg-slate-950
        text-white
        overflow-x-hidden
        pb-28
        md:pb-0
      "
    >

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section
        className="
          relative
          min-h-screen
          flex
          items-center
          overflow-hidden
        "
      >

        {/* BACKGROUND */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-slate-950
            via-blue-950
            to-slate-950
          "
        />

        {/* GLOW */}
        <div
          className="
            absolute
            top-0
            left-0
            w-[300px]
            md:w-[500px]
            h-[300px]
            md:h-[500px]
            bg-cyan-500/20
            blur-3xl
            rounded-full
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            w-[300px]
            md:w-[500px]
            h-[300px]
            md:h-[500px]
            bg-blue-500/20
            blur-3xl
            rounded-full
          "
        />

        {/* CONTENT */}
        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            py-20
            grid
            lg:grid-cols-2
            gap-14
            items-center
          "
        >

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >

            <div
              className="
                inline-block
                bg-cyan-500/10
                border
                border-cyan-500/20
                text-cyan-300
                text-sm
                px-4
                py-2
                rounded-full
                mb-6
              "
            >
              ⚡ Teknisi AC Profesional
            </div>

            <h1
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-black
                leading-tight
                mb-6
              "
            >
              Service AC Cepat & Bergaransi

              <span className="block text-cyan-400 mt-3">
                Teknisi Datang Hari Ini
              </span>

            </h1>

            <p
              className="
                text-slate-300
                text-lg
                leading-relaxed
                max-w-xl
                mb-8
              "
            >
              Teknisi siap datang ke lokasi Anda
              dengan cepat, profesional,
              dan bergaransi penuh.
            </p>

            {/* BUTTONS */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-4 mt-8
              "
            >

              <a
                href="#booking"
                className="
                  bg-cyan-500
                  hover:bg-cyan-600
                  transition-all
                  duration-300
                  px-8
                  py-4
                  rounded-2xl
                  font-bold
                  text-center
                  shadow-lg
                  shadow-cyan-500/20
                "
              >
                Booking Sekarang
              </a>

              <a
                href="https://wa.me/6289634081086"
                target="_blank"
                className="
                  bg-green-500
                  hover:bg-green-600
                  transition-all
                  duration-300
                  px-8
                  py-4
                  rounded-2xl
                  font-bold
                  text-center
                  shadow-lg
                  shadow-green-500/20
                "
              >
                WhatsApp
              </a>

            </div>
            {/* TRACKING */}
<div className="mt-8">
  <TrackingForm />
</div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="
              relative
              flex
              justify-center
              w-full
            "
          >

            <div
              className="
                absolute
                inset-0
                bg-cyan-500/20
                blur-3xl
                rounded-full
              "
            />

            <img
              src="/ac.jpg"
              alt="Service AC"
              className="
                relative
                z-10
                w-full
                max-w-md
                lg:max-w-xl
                rounded-3xl
                border
                border-white/10
                shadow-2xl
              "
            />

          </motion.div>

        </div>

      </section>

     

      {/* FEATURES */}
      <Features />

      {/* SERVICES */}
      <section
        id="layanan"
        className="scroll-mt-24"
      >

        <Services />
        <LiveTechnicians />

      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* JOIN TECHNICIAN */}
      <JoinTechnician />

      {/* BOOKING */}
      <section
        id="booking"
        className="scroll-mt-24"
      >
        <BookingForm />
      </section>

      {/* FOOTER */}
      <footer
        className="
          border-t
          border-slate-900
          py-10
          px-6
          mt-20
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-6
          "
        >

          <div className="text-center md:text-left">

            <h3
              className="
                text-cyan-400
                font-bold
                text-xl
                mb-2
              "
            >
              CoolCare AC
            </h3>

            <p className="text-slate-500">
              Service AC Profesional & Bergaransi
            </p>

          </div>

          <p
            className="
              text-slate-500
              text-sm
              text-center
            "
          >
            © 2026 CoolCare AC.
            All rights reserved.
          </p>

        </div>

      </footer>

      {/* FLOATING */}
      <FloatingWhatsApp />
      <MobileCTA />

    </main>
  );
}