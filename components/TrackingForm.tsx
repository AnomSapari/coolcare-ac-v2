"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TrackingForm() {

  const router = useRouter();

  const [trackingId, setTrackingId] =
    useState("");

  const [open, setOpen] =
    useState(false);

  // SUBMIT TRACKING
  const handleTracking = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    if (!trackingId) {
      alert("Masukkan ID booking");
      return;
    }

    router.push(
      `/tracking?id=${trackingId}`
    );
  };

  return (

    <div className="w-full max-w-2xl mx-auto">

      {/* BUTTON OPEN */}
      {!open && (

        <div className="flex justify-center">

          <button
            onClick={() => setOpen(true)}
            className="
              bg-cyan-500
              hover:bg-cyan-600
              transition-all
              duration-300
              px-8
              py-4
              rounded-2xl
              font-black
              text-white
              shadow-lg
              shadow-cyan-500/20
            "
          >
            Cek Tracking Booking
          </button>

        </div>
      )}

      {/* TRACKING CARD */}
      {open && (

        <div
          className="
            relative
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            p-6
            shadow-2xl
          "
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="
              absolute
              top-4
              right-5
              text-slate-500
              hover:text-white
              transition
              text-3xl
              font-light
            "
          >
            ×
          </button>

          {/* HEADER */}
          <div className="mb-6">

            <h2
              className="
                text-2xl
                md:text-3xl
                font-black
                text-white
              "
            >
              Track Booking
            </h2>

            <p className="text-slate-400 mt-2">
              Pantau status booking service AC Anda
            </p>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleTracking}
            className="
              flex
              flex-col
              md:flex-row
              gap-4
            "
          >

            <input
              type="number"
              placeholder="Masukkan ID Booking"
              value={trackingId}
              onChange={(e) =>
                setTrackingId(e.target.value)
              }
              className="
                flex-1
                bg-slate-800
                border
                border-slate-700
                rounded-2xl
                px-5
                py-4
                text-white
                outline-none
                focus:border-cyan-500
              "
            />

            <button
              type="submit"
              className="
                bg-cyan-500
                hover:bg-cyan-600
                transition
                px-8
                py-4
                rounded-2xl
                font-black
                text-white
                whitespace-nowrap
              "
            >
              Track Order
            </button>

          </form>

        </div>
      )}

    </div>
  );
}