"use client";

import { useEffect, useState } from "react";
import { orderStatusColor } from "@/lib/status";

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

export default function TrackingPage() {

  const [order, setOrder] =
    useState<Order | null>(null);

  useEffect(() => {

    const id =
      new URLSearchParams(
        window.location.search
      ).get("id");

    if (!id) return;

    const fetchTracking = async () => {

      try {

        const res = await fetch(
          `/api/tracking?id=${id}`
        );

        const data = await res.json();

        if (data.success) {
          setOrder(data.order);
        }

      } catch (error) {

        console.error(error);
      }
    };

    fetchTracking();

    // REALTIME
    const interval = setInterval(
      fetchTracking,
      5000
    );

    return () =>
      clearInterval(interval);

  }, []);

  // LOADING
  if (!order) {

    return (

      <main
        className="
          min-h-screen
          bg-slate-950
          text-white
          flex
          items-center
          justify-center
          p-6
        "
      >

        <div className="text-center">

          <div
            className="
              text-4xl
              font-black
              mb-4
              animate-pulse
            "
          >
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

    <main
      className="
        min-h-screen
        bg-slate-950
        text-white
        p-4
        md:p-8
      "
    >

      <div className="max-w-4xl mx-auto">

        <div
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            p-5
            md:p-8
            shadow-2xl
          "
        >

          {/* HEADER */}
          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-5
              mb-10
            "
          >

            <div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-cyan-500/10
                  border
                  border-cyan-500/20
                  text-cyan-400
                  px-4
                  py-2
                  rounded-2xl
                  font-bold
                  mb-4
                "
              >

                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-cyan-400
                    animate-pulse
                  "
                />

                Booking ID:
                #{order.id}

              </div>

              <h1
                className="
                  text-3xl
                  md:text-4xl
                  font-black
                "
              >
                Tracking Order
              </h1>

              <p className="text-slate-400 mt-2">
                Pantau progress layanan realtime
              </p>

            </div>

            <div className="
              bg-cyan-500/20
              text-cyan-400
              border
              border-cyan-500/30
              px-5
              py-3
              rounded-2xl
              font-black
              text-lg
            ">
              #{order.id}
            </div>

          </div>

          {/* ORDER INFO */}
          <div className="space-y-5">

            <div className="
              bg-slate-800/50
              rounded-2xl
              p-5
            ">
              <div className="text-slate-400 mb-2">
                Customer
              </div>

              <div className="text-2xl font-bold">
                {order.customerName}
              </div>
            </div>

            <div className="
              bg-slate-800/50
              rounded-2xl
              p-5
            ">
              <div className="text-slate-400 mb-2">
                Layanan
              </div>

              <div className="text-2xl font-bold">
                {order.service}
              </div>
            </div>

            <div className="
              bg-slate-800/50
              rounded-2xl
              p-5
            ">

              <div className="text-slate-400 mb-3">
                Status Order
              </div>

              <div
                className={`
                  inline-flex
                  items-center
                  gap-3
                  px-5
                  py-3
                  rounded-2xl
                  border
                  font-black
                  text-lg
                  ${orderStatusColor(order.status)}
                `}
              >

                <span className="
                  w-3
                  h-3
                  rounded-full
                  bg-current
                  animate-pulse
                " />

                {order.status}

              </div>

            </div>

          </div>

          {/* TECHNICIAN */}
          {order.technician ? (

            <div className="
              mt-12
              border-t
              border-slate-800
              pt-10
            ">

              <h2 className="text-3xl font-black mb-8">
                Teknisi Ditugaskan
              </h2>

              <div className="
                bg-slate-800/50
                rounded-3xl
                p-8
              ">

                <div className="
                  flex
                  flex-col
                  md:flex-row
                  items-center
                  gap-8
                ">

                  {/* PHOTO */}
                  <div className="relative">

                    <img
                      src={
                        order.technician.photo ||
                        "/default-avatar.png"
                      }
                      alt={order.technician.name}
                      className="
                        w-32
                        h-32
                        rounded-full
                        object-cover
                        border-4
                        border-cyan-500
                      "
                    />

                    <div className="
                      absolute
                      bottom-2
                      right-2
                      w-5
                      h-5
                      bg-green-500
                      rounded-full
                      border-4
                      border-slate-900
                      animate-pulse
                    " />

                  </div>

                  {/* INFO */}
                  <div className="flex-1">

                    <div className="
                      text-3xl
                      font-black
                      mb-3
                    ">
                      {order.technician.name}
                    </div>

                    <div className="
                      text-slate-400
                      text-lg
                      mb-5
                    ">
                      {order.technician.specialist ||
                        "Teknisi Profesional"}
                    </div>

                    {/* STATUS */}
                    <div
                      className={`
                        inline-flex
                        items-center
                        gap-3
                        px-5
                        py-3
                        rounded-2xl
                        border
                        font-black
                        ${orderStatusColor(
                          order.technician
                            .technicianStatus ||
                            "OFFLINE"
                        )}
                      `}
                    >

                      <span className="
                        w-3
                        h-3
                        rounded-full
                        bg-current
                        animate-pulse
                      " />

                      {order.technician
                        .technicianStatus ||
                        "OFFLINE"}

                    </div>

                    {/* WHATSAPP */}
                    {order.technician.whatsapp && (

                      <div className="mt-8">

                 <a
  href={`https://api.whatsapp.com/send?phone=${order.technician.whatsapp?.replace(/^0/, "62")}`}
  target="_blank"
  className="
    inline-block
    bg-green-500
    hover:bg-green-600
    transition
    px-8
    py-4
    rounded-2xl
    font-black
  "
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

            <div className="
              mt-12
              border-t
              border-slate-800
              pt-10
            ">

              <div className="
                bg-slate-800/50
                rounded-3xl
                p-8
                text-center
              ">

                <div className="
                  text-2xl
                  font-black
                  mb-3
                ">
                  Menunggu Teknisi
                </div>

                <div className="text-slate-400">
                  Admin sedang mencarikan
                  teknisi terbaik untuk Anda
                </div>

              </div>

            </div>
          )}

        </div>

      </div>

    </main>
  );
}