
"use client";

import { useEffect, useState } from "react";

type Technician = {
  id: number;
  name: string;
  photo?: string | null;
  specialist?: string | null;
  whatsapp?: string | null;
  technicianStatus?: string | null;
};

type Order = {
  id: number;
  customerName: string;
  customerWhatsapp: string;
  customerAddress: string;
  service: string;
  status: string;
  technician?: Technician | null;
};

const getStatusColor = (status?: string) => { 
  switch (status) { 
    case "STANDBY": 
    return "bg-green-500/20 text-green-400 border-green-500/30"; 
    case "WORKING": 
    return "bg-orange-500/20 text-orange-400 border-orange-500/30"; case "ON_THE_WAY": 
    return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"; case "OFFLINE": return "bg-slate-500/20 text-slate-400 border-slate-500/30"; 
    default:
       return "bg-slate-500/20 text-slate-400 border-slate-500/30"; 
      } 
    };

export default function TrackingPage() {

  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {

    const id = new URLSearchParams(
      window.location.search
    ).get("id");

    if (!id) return;

    const fetchTracking = async () => {

      try {

        const response = await fetch(
          `/api/tracking?id=${id}`
        );

        const data = await response.json();

        if (data.success) {
          setOrder(data.order);
        }

      } catch (error) {

        console.error(error);
      }
    };

    fetchTracking();

    const interval = setInterval(() => {

      fetchTracking();

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  if (!order) {

    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">

        <div className="text-center">

          <div className="text-3xl font-black mb-4">
            Loading Tracking...
          </div>

          <div className="text-slate-400">
            Menghubungkan ke sistem realtime
          </div>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">

      <div className="max-w-3xl mx-auto">

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

          <div className="flex items-center justify-between mb-10">

            <div>

              <h1 className="text-4xl font-black">
                Tracking Order
              </h1>

              <p className="text-slate-400 mt-2">
                Pantau progress layanan secara realtime
              </p>

            </div>

            <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-2xl font-bold">

              #{order.id}

            </div>

          </div>

          {/* CUSTOMER */}
          <div className="space-y-6">

            <div className="bg-slate-800/50 rounded-2xl p-5">

              <div className="text-slate-400 mb-2">
                Customer
              </div>

              <div className="text-2xl font-bold">
                {order.customerName}
              </div>

            </div>

            <div className="bg-slate-800/50 rounded-2xl p-5">

              <div className="text-slate-400 mb-2">
                Layanan
              </div>

              <div className="text-2xl font-bold">
                {order.service}
              </div>

            </div>

            <div className="bg-slate-800/50 rounded-2xl p-5">

              <div className="text-slate-400 mb-2">
                Status Order
              </div>

              <div className="text-cyan-400 text-2xl font-black">
                {order.status}
              </div>

            </div>

          </div>

          {/* TEKNISI */}
          {order.technician ? (

            <div className="mt-12 border-t border-slate-800 pt-10">

              <h2 className="text-3xl font-black mb-8">
                Teknisi Ditugaskan
              </h2>

              <div className="bg-slate-800/50 rounded-3xl p-8">

                <div className="flex flex-col md:flex-row items-center gap-8">

                  <div className="relative">

                    <img
                      src={
                        order.technician.photo ||
                        "/default-avatar.png"
                      }
                      alt={order.technician.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-cyan-500"
                    />

                    {/* LIVE STATUS */}
                    <div className="absolute bottom-2 right-2">

                      <div className="w-6 h-6 rounded-full bg-green-500 border-4 border-slate-900 animate-pulse" />

                    </div>

                  </div>

                  <div className="flex-1">

                    <div className="text-3xl font-black mb-2">
                      {order.technician.name}
                    </div>

                    <div 
                    className={`inline-block px-5 py-2 rounded-2xl border font-black text-lg mb-4 ${getStatusColor( 
                      order.technician.technicianStatus 
                      )}`} 
                      > 
                      {order.technician.technicianStatus || "STANDBY"}
                       </div>

                    <div className="text-slate-400 text-lg mb-6">
                      {order.technician.specialist || "Teknisi Profesional"}
                    </div>

                    {/* STATUS BADGE */}
                    <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-3 rounded-2xl font-bold">

                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

                      Teknisi Online

                    </div>

                    {/* WHATSAPP */}
                    {order.status !== "PENDING" && (

                      <div className="mt-8">

                        <a
                          href={`https://wa.me/${order.technician.whatsapp}`}
                          target="_blank"
                          className="inline-block bg-green-500 hover:bg-green-600 transition-all px-8 py-4 rounded-2xl text-lg font-black"
                        >
                          Hubungi Teknisi
                        </a>

                      </div>

                    )}

                  </div>

                </div>

              </div>

            </div>

          ) : (

            <div className="mt-12 border-t border-slate-800 pt-10">

              <div className="bg-slate-800/50 rounded-3xl p-8 text-center">

                <div className="text-2xl font-black mb-3">
                  Menunggu Teknisi
                </div>

                <div className="text-slate-400">
                  Admin sedang mencarikan teknisi terbaik untuk Anda
                </div>

              </div>

            </div>

          )}

        </div>

      </div>

    </main>
  );
}