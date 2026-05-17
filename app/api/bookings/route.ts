import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const {
      customerName,
      customerWhatsapp,
      customerAddress,
      service,
    } = body;

    // VALIDASI
    if (
      !customerName ||
      !customerWhatsapp ||
      !service
    ) {

      return NextResponse.json(
        {
          success: false,
          message: "Field wajib belum lengkap",
        },
        {
          status: 400,
        }
      );
    }

    // CREATE ORDER
    const order = await prisma.order.create({

      data: {
        customerName,
        customerWhatsapp,
        customerAddress:
          customerAddress || "-",
        service,
        status: "PENDING",
      },

    });

    // SEND WHATSAPP NOTIFICATION
    try {

      await fetch(
        "https://api.fonnte.com/send",
        {
          method: "POST",

          headers: {
            Authorization:
              process.env.FONNTE_TOKEN || "",

            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({

            target:
              "6283194549588",

            message:
`📦 Booking Baru

ID Booking: #${order.id}

Customer:
${customerName}

Service:
${service}

Alamat:
${customerAddress}

WhatsApp:
${customerWhatsapp}
            `,
          }),
        }
      );

    } catch (waError) {

      console.error(
        "FONNTE ERROR:",
        waError
      );
    }

    // SUCCESS
    return NextResponse.json({

      success: true,
      message: "Booking berhasil",
      order,

    });

  } catch (error) {

    console.error(
      "BOOKING ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Server error booking",
      },
      {
        status: 500,
      }
    );
  }
}