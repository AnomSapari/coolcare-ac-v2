
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {

  const session = await getServerSession(authOptions);

  if (session?.user?.role !== "ADMIN") {
    redirect("/");
  }

  // ORDER
  const orders = await prisma.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  // TEKNISI PENDING APPROVAL
  const pendingTechnicians = await prisma.user.findMany({
    where: {
      role: "TECHNICIAN",
      approved: false,
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  // TEKNISI APPROVED
  const technicians = await prisma.user.findMany({
    where: {
      role: "TECHNICIAN",
      approved: true,
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-black mb-10">
          Dashboard Admin
        </h1>

        {/* TEKNISI PENDING */}
        <section className="mb-16">

          <h2 className="text-2xl font-bold mb-6 text-cyan-400">
            Teknisi Menunggu Persetujuan
          </h2>

          {pendingTechnicians.length === 0 && (
            <div className="text-slate-400">
              Tidak ada teknisi pending.
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">

            {pendingTechnicians.map((tech) => (

              <div
                key={tech.id}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
              >

                <h3 className="text-2xl font-bold mb-2">
                  {tech.name}
                </h3>

                <p className="text-slate-400 mb-2">
                  {tech.email}
                </p>

                <p className="text-slate-400 mb-2">
                  WhatsApp: {tech.whatsapp}
                </p>

                <p className="text-slate-400 mb-2">
                  Pengalaman: {tech.experience}
                </p>

                <p className="text-slate-400 mb-6">
                  Spesialis: {tech.specialist}
                </p>

                <form
                  action={`/api/admin/approve-technician?id=${tech.id}`}
                  method="POST"
                >

                  <button
                    className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-2xl font-bold"
                  >
                    Approve Teknisi
                  </button>

                </form>

              </div>
            ))}

          </div>

        </section>

        {/* ORDER */}
        <section>

          <h2 className="text-2xl font-bold mb-6 text-cyan-400">
            Order Customer
          </h2>

          {orders.length === 0 && (
            <div className="text-slate-400">
              Belum ada order.
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">

            {orders.map((order) => (

              <div
                key={order.id}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
              >

                <h3 className="text-2xl font-bold mb-3">
                  {order.service}
                </h3>

                <p className="text-slate-400 mb-2">
                  Customer: {order.customerName}
                </p>

                <p className="text-slate-400 mb-2">
                  WhatsApp: {order.customerWhatsapp}
                </p>

                <p className="text-slate-400 mb-2">
                  Address: {order.customerAddress}
                </p>

                <p className="mb-4">
                  Status:
                  {" "}
                  <span className="text-cyan-400 font-bold">
                    {order.status}
                  </span>
                </p>

                <form
                  action="/api/admin/assign"
                  method="POST"
                  className="mt-6"
                >

                  <input
                    type="hidden"
                    name="orderId"
                    value={order.id}
                  />

                  <select
                    name="technicianId"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 mb-4"
                  >

                    <option value="">
                      Pilih Teknisi
                    </option>

                    {technicians.map((tech) => (

                      <option
                        key={tech.id}
                        value={tech.id}
                      >
                        {tech.name}
                      </option>

                    ))}

                  </select>

                  <button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-2xl font-bold"
                  >
                    Assign Teknisi
                  </button>

                </form>

              </div>
            ))}

          </div>

        </section>

      </div>

    </main>
  );
}
