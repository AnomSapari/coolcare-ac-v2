import { prisma } from "@/lib/prisma";

import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {

  const { id } = await context.params;

  const body = await req.json();

  const order = await prisma.order.update({
    where: {
      id: Number(id),
    },

    data: {
      technicianId: Number(body.technicianId),
      status: "ASSIGNED",
    },
  });

  return NextResponse.json(order);
}