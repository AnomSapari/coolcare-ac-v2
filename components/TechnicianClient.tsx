"use client";

import { useRouter } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";

interface TechnicianClientProps {
  orders: any[];
}

export default function TechnicianClient({
  orders,
}: TechnicianClientProps) {

  const router = useRouter();

  // 🔵 START
  const handleStart = async (orderId: number) => {

    await fetch("/api/technician/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderId }),
    });

    router.refresh();
  };

  // 🟢 FINISH
  const handleFinish = async (orderId: number) => {

    await fetch("/api/technician/finish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderId }),
    });

    router.refresh();
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      <div className="max-w-5xl mx-auto">

        <div className="flex items-center justify-between mb-8">

  <h1 className="text-4xl font-bold">
    Dashboard Teknisi
  </h1>

  <LogoutButton />

</div>

        <div className="grid gap-6">

          {orders.map((order) => (

            <div
              key={order.id}
              className="bg-white/10 border border-white/10 rounded-2xl p-6"
            >

              <h2 className="text-2xl font-bold">
                {order.service}
              </h2>

              <p className="text-slate-300 mt-2">
                Customer: {order.customer.name}
              </p>

              <p className="text-slate-400">
                Status: {order.status}
              </p>

              <div className="flex gap-3 mt-6">

                <button
                  onClick={() => handleStart(order.id)}
                  className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-xl"
                >
                  Proses
                </button>

                <button
                  onClick={() => handleFinish(order.id)}
                  className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-xl"
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