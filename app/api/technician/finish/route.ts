import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const orderId = Number(body.orderId);

    if (!orderId) {
      return NextResponse.json(
        { success: false, message: "orderId tidak valid" },
        { status: 400 }
      );
    }

    await prisma.order.update({
      where: { id: orderId },
      data: {
        status: "DONE",
      },
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("FINISH ERROR:", error);

    return NextResponse.json(
      { success: false, message: "server error finish" },
      { status: 500 }
    );
  }
}