import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {

  try {

    const { searchParams } =
      new URL(req.url);

    const id = searchParams.get("id");

    if (!id) {

      return NextResponse.json({
        success: false,
        message: "Order ID required",
      });
    }

    const order = await prisma.order.findUnique({

      where: {
        id: Number(id),
      },

      include: {
        technician: true,
      },
    });

    if (!order) {

      return NextResponse.json({
        success: false,
        message: "Order not found",
      });
    }

    return NextResponse.json({
      success: true,
      order,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json({
      success: false,
    });
  }
}