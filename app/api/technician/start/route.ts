import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

      await prisma.order.update({
        where: { id: Number(body.orderId) },
        data: {
          status: "WORKING",
        },
      });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, message: "server error" },
      { status: 500 }
    );
  }
}