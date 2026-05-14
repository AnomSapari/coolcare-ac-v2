"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/6283891515097"
      target="_blank"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 1,
      }}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="fixed bottom-6 right-6 z-50"
    >

      {/* Pulse Effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></div>

      {/* Button */}
      <div className="relative flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl backdrop-blur-xl border border-white/20 transition-all duration-300">

        <MessageCircle className="w-6 h-6" />

        <span className="font-semibold hidden md:block">
          Chat WhatsApp
        </span>

      </div>

    </motion.a>
  );
}