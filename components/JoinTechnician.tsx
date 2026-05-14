"use client";

import { motion } from "framer-motion";

export default function JoinTechnician() {
  return (
    <section className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-5 py-2 rounded-full text-sm mb-6">
            👨‍🔧 Program Mitra Teknisi
          </div>

          <h2 className="text-5xl font-black leading-tight mb-8">
            Punya Skill
            <span className="text-cyan-400 block">
              Service AC?
            </span>
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Gabung menjadi mitra teknisi profesional dan dapatkan order langsung dari customer tanpa harus mencari pelanggan sendiri.
          </p>

          <div className="space-y-4 mb-10">

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                ⚡
              </div>

              <div>
                <h3 className="font-bold">
                  Order Masuk Otomatis
                </h3>

                <p className="text-slate-400 text-sm">
                  Fokus bekerja tanpa repot cari customer.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                💰
              </div>

              <div>
                <h3 className="font-bold">
                  Pembayaran Transparan
                </h3>

                <p className="text-slate-400 text-sm">
                  Sistem fee jelas dan tidak membingungkan.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                📱
              </div>

              <div>
                <h3 className="font-bold">
                  Kerja Fleksibel
                </h3>

                <p className="text-slate-400 text-sm">
                  Ambil order kapan saja sesuai waktu Anda.
                </p>
              </div>
            </div>

          </div>

          <a
            href="/join-technician"
            className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 px-8 py-4 rounded-2xl font-bold text-lg"
          >
            Daftar Menjadi Mitra
          </a>

        </motion.div>


        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >

          <div className="bg-slate-900 border border-slate-800 rounded-[32px] p-8 shadow-2xl">

            <div className="flex items-center gap-4 mb-8">

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-3xl">
                👨‍🔧
              </div>

              <div>
                <h3 className="text-2xl font-black">
                  Teknisi Aktif
                </h3>

                <p className="text-slate-400">
                  Partner profesional terpercaya
                </p>
              </div>

            </div>

            <div className="space-y-5">

              <div className="bg-slate-800 rounded-2xl p-5 border border-slate-700">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold text-lg">
                    Rahadian
                  </h4>

                  <span className="text-green-400 text-sm font-semibold">
                    Online
                  </span>
                </div>

                <p className="text-slate-400 text-sm mb-3">
                  Enginer AC Split & Central
                </p>

                <div className="flex justify-between text-sm">
                  <span className="text-yellow-400">
                    ⭐ 4.9 Rating
                  </span>

                  <span className="text-cyan-400">
                    1127 Order
                  </span>
                </div>
              </div>


              <div className="bg-slate-800 rounded-2xl p-5 border border-slate-700">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold text-lg">
                    AnomSapari
                  </h4>

                  <span className="text-green-400 text-sm font-semibold">
                    Available
                  </span>
                </div>

                <p className="text-slate-400 text-sm mb-3">
                  Spesialis Bongkar 
                </p>

                <div className="flex justify-between text-sm">
                  <span className="text-yellow-400">
                    ⭐ 4.8 Rating
                  </span>

                  <span className="text-cyan-400">
                    89 Order
                  </span>
                </div>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}