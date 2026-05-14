"use client";

import { useState } from "react";

export default function TechnicianRegisterForm() {

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    whatsapp: "",
    address: "",
    experience: "",
    specialist: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("/api/technicians/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

const data = await res.json(); 
if (data.success) 
  { alert("Pendaftaran berhasil, tunggu persetujuan admin."); 
    window.location.href = "/login";
   } else {

    alert("Pendaftaran gagal."); 
  }

    setForm({
      name: "",
      email: "",
      password: "",
      whatsapp: "",
      address: "",
      experience: "",
      specialist: "",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-5"
    >

      <input
        type="text"
        placeholder="Nama lengkap"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
        className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
        className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
        className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white"
        required
      />

      <input
        type="text"
        placeholder="WhatsApp"
        value={form.whatsapp}
        onChange={(e) =>
          setForm({ ...form, whatsapp: e.target.value })
        }
        className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white"
      />

      <input
        type="text"
        placeholder="Alamat"
        value={form.address}
        onChange={(e) =>
          setForm({ ...form, address: e.target.value })
        }
        className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white"
      />

      <input
        type="text"
        placeholder="Pengalaman kerja"
        value={form.experience}
        onChange={(e) =>
          setForm({ ...form, experience: e.target.value })
        }
        className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white"
      />

      <input
        type="text"
        placeholder="Spesialis"
        value={form.specialist}
        onChange={(e) =>
          setForm({ ...form, specialist: e.target.value })
        }
        className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-cyan-500 hover:bg-cyan-600 transition py-4 rounded-2xl font-bold text-lg text-white"
      >
        {loading ? "Loading..." : "Daftar Sekarang"}
      </button>

    </form>
  );
}