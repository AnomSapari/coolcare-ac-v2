import { prisma } from "@/lib/prisma";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function TechnicianPage() {

  // 🔐 session login
  const session = await getServerSession(authOptions);

  // ❌ belum login
  if (!session?.user) {
    redirect("/login");
  }

  // ❌ bukan teknisi
  if (session.user.role !== "TECHNICIAN") {
    redirect("/");
  }

  // 🔥 ambil order milik teknisi login
  const orders = await prisma.order.findMany({
    where: {
      technicianId: Number(session.user.id),
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-3xl font-bold mb-8">
        Dashboard Teknisi
      </h1>

      <div className="grid gap-6">

        {orders.length === 0 && (
          <div className="text-slate-400">
            Belum ada order.
          </div>
        )}

        {orders.map((order) => (

          <div
            key={order.id}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6"
          >

            <h2 className="text-xl font-bold mb-2">
              {order.service}
            </h2>

            <p className="text-slate-400">
              Customer:
              {" "}
              {order.customerName}
            </p>

            <p className="text-slate-400">
              WhatsApp:
              {" "}
              {order.customerWhatsapp}
            </p>

            <p className="text-slate-400 mb-4">
              Address:
              {" "}
              {order.customerAddress}
            </p>

            <div className="flex gap-3">

              {/* START */}
              {order.status === "ASSIGNED" && (
                <form action="/api/technician/start" method="POST">

                  <input
                    type="hidden"
                    name="orderId"
                    value={order.id}
                  />

                  <button
                    className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg"
                  >
                    Mulai
                  </button>

                </form>
              )}

              {/* DONE */}
              {order.status === "PROCESS" && (
                <form action="/api/technician/finish" method="POST">

                  <input
                    type="hidden"
                    name="orderId"
                    value={order.id}
                  />

                  <button
                    className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg"
                  >
                    Selesai
                  </button>

                </form>
              )}

              <div className="ml-auto">

                <span className="bg-slate-800 px-3 py-2 rounded-lg text-sm">
                  {order.status}
                </span>

              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}