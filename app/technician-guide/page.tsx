export default function TechnicianGuidePage() {

  return (

    <main className="min-h-screen bg-slate-950 text-white p-6">

      <div className="max-w-3xl mx-auto">

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

          <h1 className="text-4xl font-black mb-6 text-cyan-400">
            Akun Teknisi Disetujui
          </h1>

          <p className="text-slate-300 mb-10">
            Selamat bergabung sebagai mitra teknisi CoolCare AC.
          </p>

          <div className="space-y-6">

            <div className="bg-slate-800 rounded-2xl p-5">
              <h2 className="text-2xl font-bold mb-3">
                Cara Menggunakan
              </h2>

              <ul className="space-y-2 text-slate-300">

                <li>
                  1. Login menggunakan akun teknisi
                </li>

                <li>
                  2. Buka dashboard teknisi
                </li>

                <li>
                  3. Cek order dari admin
                </li>

                <li>
                  4. Update status pekerjaan
                </li>

                <li>
                  5. Hubungi customer melalui WhatsApp
                </li>

              </ul>
            </div>

            <div className="bg-slate-800 rounded-2xl p-5">

              <h2 className="text-2xl font-bold mb-3">
                Status Order
              </h2>

              <ul className="space-y-2 text-slate-300">

                <li>PENDING → menunggu teknisi</li>

                <li>ON_THE_WAY → menuju lokasi</li>

                <li>WORKING → pekerjaan berlangsung</li>

                <li>DONE → pekerjaan selesai</li>

              </ul>

            </div>

            <a
              href="/technician"
              className="
                block
                text-center
                bg-cyan-500
                hover:bg-cyan-600
                transition
                py-4
                rounded-2xl
                font-black
              "
            >
              Masuk Dashboard Teknisi
            </a>

          </div>

        </div>

      </div>

    </main>
  );
}