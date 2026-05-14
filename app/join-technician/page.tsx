import TechnicianRegisterForm from "@/components/TechnicianRegisterForm";

export default function JoinTechnicianPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20 px-6">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-white mb-4">
            Gabung Menjadi Mitra Teknisi
          </h1>

          <p className="text-slate-400 text-lg">
            Dapatkan order langsung dari customer tanpa perlu mencari pelanggan sendiri.
          </p>
        </div>

        <TechnicianRegisterForm />

      </div>
    </main>
  );
}