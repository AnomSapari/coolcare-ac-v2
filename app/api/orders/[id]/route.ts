import { prisma } from "@/lib/prisma";
import { OrderStatus } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {

  const params = await context.params;

  const order = await prisma.order.update({

    where: {
      id: Number(params.id),
    },

    data: {
      status: OrderStatus.PROCESS,
    },
  });

  return NextResponse.json(order);
}