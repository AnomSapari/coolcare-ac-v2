"use client";

export default function UpdateStatus({
  orderId,
}: any) {

  const updateStatus = async (status: string) => {

    const res = await fetch(`/api/orders/${orderId}/status`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        status,
      }),
    });

    if (res.ok) {
      window.location.reload();
    }
  };

  return (
    <div className="flex gap-3">

      <button
        onClick={() => updateStatus("ON_PROGRESS")}
        className="bg-yellow-600 px-4 py-2 rounded-lg"
      >
        Proses
      </button>

      <button
        onClick={() => updateStatus("COMPLETED")}
        className="bg-green-600 px-4 py-2 rounded-lg"
      >
        Selesai
      </button>
    </div>
  );
}