import { prisma } from "@/lib/prisma";
   
export default async function TechniciansPage() {

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
          Teknisi Aktif
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {technicians.map((tech) => (

            <div
              key={tech.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
            >

              <img
                src={tech.photo || "/default-avatar.png"}
                alt={tech.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />

              <h2 className="text-2xl font-bold text-center mb-2">
                {tech.name}
              </h2>

              <p className="text-center text-cyan-400 font-bold mb-2">
                {tech.technicianStatus}
              </p>

              <p className="text-center text-slate-400">
                {tech.specialist}
              </p>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}