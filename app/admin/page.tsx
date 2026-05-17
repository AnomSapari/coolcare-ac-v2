
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";


export default async function AdminPage() {

  const session = await getServerSession(authOptions);
  
// ❌ belum login
  if (!session?.user) {
  redirect("/login");
}

// ❌ bukan admin
  if (session?.user?.role !== "ADMIN") {
    redirect("/");
  }

// ORDER
  const orders = await prisma.order.findMany({

    include: {
    technician: true,
  },
  
    orderBy: {
      createdAt: "desc",
    },
  });

// TEKNISI PENDING APPROVAL
  const pendingTechnicians = await prisma.user.findMany({
   where: {
  role: "TECHNICIAN",
},

    orderBy: {
      createdAt: "desc",
    },
  });

  // TEKNISI APPROVED
  const technicians = await prisma.user.findMany({
   where: {
  role: "TECHNICIAN",
},

    orderBy: {
      createdAt: "desc",
    },
  });

  return (
  <main
    className="
      min-h-screen
      bg-slate-950
      text-white
      p-4 md:p-10
    "
  >

      <div className="max-w-7xl mx-auto">

<div className="flex items-center justify-between mb-10">

  <div>
    <h1 className="text-5xl font-bold">
      Dashboard Admin
    </h1>

    <p className="text-slate-400 mt-2">
      Kelola booking dan teknisi
    </p>
  </div>

  <LogoutButton />

</div>

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

                <p className="text-red-400 mb-2">
                  {tech.email}
                </p>

                <p className="text-yellow-400 mb-2">
                  WhatsApp: {tech.whatsapp}
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

 <p>
          Customer:
          {" "}
          <span className="text-white font-semibold">
            {order.customerName}
          </span>
        </p>

        <p>
          WhatsApp:
          {" "}
          <span className="text-green-400 font-semibold">
            {order.customerWhatsapp}
          </span>
        </p>

        <p>
          Address:
          {" "}
          <span className="text-slate-200">
            {order.customerAddress}
          </span>
        </p>

{/* STATUS */}
<p className="mb-3">
  Status:
  {" "}
  <span className="text-cyan-400 font-bold">
    {order.status}
  </span>
</p>

<p className="mb-4">
  Teknisi:
  {" "}
  <span className="text-yellow-400 font-bold">
    {order.technician?.name || "Belum dipilih"}
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
                  {order.technician?.whatsapp && (

  <a
    href={`https://wa.me/${order.technician.whatsapp}?text=${encodeURIComponent(
      `Halo ${order.technician.name},

Anda mendapat order baru.

Customer:
${order.customerName}

Alamat:
${order.customerAddress}

Silakan login dashboard teknisi.`
    )}`}

    target="_blank"

    className="
      block
      mt-4
      text-center
      bg-green-500
      hover:bg-green-600
      py-3
      rounded-2xl
      font-bold
    "
  >
    Kirim Notifikasi Teknisi
  </a>

)}

                </form>

              </div>
            ))}

          </div>

        </section>

      </div>

    </main>
  );
}
