import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const order = await prisma.order.update({
      where: {
        id: Number(body.orderId),
      },

      data: {
        status: body.status,
      },
    });

    return NextResponse.json({
      success: true,
      order,
    });

  } catch (error) {
    console.error("STATUS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update status",
      },
      {
        status: 500,
      }
    );
  }
}