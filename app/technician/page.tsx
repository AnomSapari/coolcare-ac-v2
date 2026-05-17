import { prisma } from "@/lib/prisma";
import TechnicianClient from "@/components/TechnicianClient";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function TechnicianPage() {

// 🔐 ambil session login
  const session = await getServerSession(authOptions);

// ❌ belum login
if (!session?.user) {
  redirect("/login");
}

// ❌ bukan teknisi
if (session.user.role !== "TECHNICIAN") {
  redirect("/");
}

// ❌ belum login
  if (!session?.user?.email) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        Unauthorized
      </div>
    );
  }

  // 🔥 cari teknisi login
  const technician = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  // ❌ teknisi tidak ditemukan
  if (!technician) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        Teknisi tidak ditemukan
      </div>
    );
  }

  // 🔥 ambil order khusus teknisi ini
  const orders = await prisma.order.findMany({
    where: {
      technicianId: technician.id,
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  return (
  <TechnicianClient
    orders={orders}
    technicianId={technician.id}
  />
);
}