"use client";

import { useRouter } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";

interface TechnicianClientProps {
  orders: any[];
  technicianId: number;
}

export default function TechnicianClient({
  orders,
  technicianId,
}: TechnicianClientProps) {

  const router = useRouter();

  // 🔵 START
  const handleStart = async (orderId: number) => {

    try {

      const res = await fetch(
        "/api/technician/start",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            orderId,
            technicianId,
          }),
        }
      );

      const data = await res.json();

      if (!data.success) {

        alert(
          data.message ||
          "Gagal memulai pekerjaan"
        );

        return;
      }

      router.refresh();

    } catch (error) {

      console.error(
        "START ERROR:",
        error
      );

      alert("Server error");
    }
  };

  // 🟢 FINISH
  const handleFinish = async (
    orderId: number
  ) => {

    try {

      const res = await fetch(
        "/api/technician/finish",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            orderId,
            technicianId,
          }),
        }
      );

      const data = await res.json();

      if (!data.success) {

        alert(
          data.message ||
          "Gagal menyelesaikan pekerjaan"
        );

        return;
      }

      router.refresh();

    } catch (error) {

      console.error(
        "FINISH ERROR:",
        error
      );

      alert("Server error");
    }
  };

  return (

  <main
    className="
      min-h-screen
      bg-slate-950
      text-white
      p-4 md:p-10
    "
  >
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-4xl font-black">
              Dashboard Teknisi
            </h1>

            <p className="text-slate-400 mt-2">
  Kelola order dan update status pekerjaan
</p>

          </div>

          <LogoutButton />

        </div>

        {/* ORDERS */}
        <div className="grid gap-6">

          {orders?.length === 0 && (

            <div
              className="
                text-center
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-10
              "
            >

              <div className="text-2xl font-bold mb-2">
                Belum Ada Order
              </div>

              <div className="text-slate-400">
                Order dari admin akan muncul di sini
              </div>

            </div>
          )}

          {orders?.map((order) => (

            <div
              key={order.id}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-6
              "
            >

              <h2 className="text-3xl font-black mb-4">
                {order.service}
              </h2>

              <div className="space-y-3 text-slate-300">

                <p>
                  Customer:
                  {" "}
                  <span className="text-white font-semibold">
                    {order.customerName || "-"}
                  </span>
                </p>

                <p>
                  WhatsApp:
                  {" "}
                  <span className="text-green-400 font-semibold">
                    {order.customerWhatsapp || "-"}
                  </span>
                </p>

                <p>
                  Status:
                  {" "}
                  <span className="text-cyan-400 font-bold">
                    {order.status}
                  </span>
                </p>

              </div>

              {/* BUTTONS */}
              <div className="flex gap-4 mt-8">

                <button
                  onClick={() =>
                    handleStart(order.id)
                  }
                  className="
                    bg-cyan-500
                    hover:bg-cyan-600
                    transition
                    px-6
                    py-3
                    rounded-2xl
                    font-bold
                  "
                >
                  Proses
                </button>

                <button
                  onClick={() =>
                    handleFinish(order.id)
                  }
                  className="
                    bg-green-500
                    hover:bg-green-600
                    transition
                    px-6
                    py-3
                    rounded-2xl
                    font-bold
                  "
                >
                  Selesai
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}