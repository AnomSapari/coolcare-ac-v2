"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function BookingForm() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
const router = useRouter();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerName: name,
          customerWhatsapp: whatsapp,
          customerAddress: address,
          service,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(data.message || "Booking gagal");
        return;
      }

      alert("Booking berhasil ✅");

router.push(
  `/tracking?id=${data.order.id}`
);

setName("");
setWhatsapp("");
setAddress("");
setService("");
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-8">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Booking Service AC
          </h1>

          <p className="text-slate-400 text-sm">
            Teknisi profesional siap datang ke lokasi Anda
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Lengkap"
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white"
          />

          <input
            type="text"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="Nomor WhatsApp"
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white"
          />

          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Alamat lengkap"
            required
            rows={3}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white"
          />

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            className="
  w-full
  bg-slate-800
  border
  border-slate-700
  rounded-xl
  px-3
  py-2.5
  text-sm
  md:text-base
  text-white
"
          >
            <option value="">Pilih layanan</option>
            <option value="Cuci AC">Cuci AC</option>
            <option value="Isi Freon">Isi Freon</option>
            <option value="Bongkar Pasang">Bongkar Pasang</option>
            <option value="Perbaikan AC">Perbaikan AC</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition-all text-white font-semibold py-3 rounded-xl"
          >
            {loading ? "Mengirim..." : "Booking Sekarang"}
          </button>
        </form>
      </div>
    </section>
  );
}