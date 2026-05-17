
"use client";

import { useEffect, useState } from "react";

interface Technician {
  id: number;
  name: string;
  photo?: string;
  specialist?: string;
 
}

export default function LiveTechnicians() {

  const [technicians, setTechnicians] = useState<Technician[]>([]);

  useEffect(() => {

    async function loadTechnicians() {

      const res = await fetch("/api/technicians");

      const data = await res.json();

      setTechnicians(data);
    }

    loadTechnicians();

  }, []);

  return (
    <section className="py-24 bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-cyan-400 font-bold mb-4">
            Teknisi Profesional
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Teknisi Siap Membantu Hari Ini
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Partner teknisi aktif dan siap menerima order service AC.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {technicians.map((tech) => (

            <div
              key={tech.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-center"
            >

              <img
                src={tech.photo || "/default-avatar.png"}
                alt={tech.name}
                className="w-28 h-28 rounded-full object-cover mx-auto mb-5 border-4 border-cyan-500"
              />

              <h3 className="text-2xl font-bold mb-2">
                {tech.name}
              </h3>

              

              <p className="text-slate-400">
                {tech.specialist || "Teknisi AC Profesional"}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}