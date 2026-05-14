import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      whatsapp,
      address,
      service,
    } = body;

    // VALIDASI
    if (
      !name ||
      !whatsapp ||
      !address ||
      !service
    ) {
      return Response.json(
        {
          error: "Data belum lengkap",
        },
        {
          status: 400,
        }
      );
    }

    // SIMPAN ORDER
    const order = await prisma.order.create({
      data: {
        service,

        customerName: name,
        customerWhatsapp: whatsapp,
        customerAddress: address,
      },
    });

    return Response.json(order);

  } catch (error) {
    console.error("BOOKING ERROR:", error);

    return Response.json(
      {
        error: "Server error",
      },
      {
        status: 500,
      }
    );
  }
}