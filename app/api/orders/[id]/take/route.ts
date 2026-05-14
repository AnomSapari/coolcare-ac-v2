import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { OrderStatus } from "@prisma/client";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const order = await prisma.order.update({
      where: {
        id: Number(id),
      },

      data: {
        status: "PROCESS",
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error("TAKE ORDER ERROR:", error);

    return NextResponse.json(
      {
        error: "Failed to take order",
      },
      {
        status: 500,
      }
    );
  }
}