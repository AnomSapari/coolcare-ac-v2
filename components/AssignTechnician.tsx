"use client";

import { useState } from "react";

interface Props {
  orderId: number;
  technicians: {
    id: number;
    name: string;
  }[];
}

export default function AssignTechnician({
  orderId,
  technicians,
}: Props) {
  const [selected, setSelected] = useState<string>("");

  const handleAssign = async () => {
    if (!selected) {
      alert("Pilih teknisi");
      return;
    }

    try {
      const response = await fetch("/api/admin/assign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId: Number(orderId),
          technicianId: Number(selected),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Gagal assign teknisi");
        return;
      }

      alert("Teknisi berhasil diassign");
      window.location.reload();

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 mt-5">
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="bg-slate-800 border border-slate-700 px-4 py-3 rounded-xl text-white"
      >
        <option value="">Pilih Teknisi</option>

        {technicians.map((tech) => (
          <option key={tech.id} value={tech.id}>
            {tech.name}
          </option>
        ))}
      </select>

      <button
        onClick={handleAssign}
        className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold px-5 py-3 rounded-xl transition"
      >
        Assign
      </button>
    </div>
  );
}