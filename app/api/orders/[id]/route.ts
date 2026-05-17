import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // 📍 ambil id
    const { id } = await context.params;

    // 📍 ambil body request
    const body = await req.json();

    // 📍 update order
    const order = await prisma.order.update({
      where: {
        id: Number(id),
      },

      data: {
        status: body.status,
      },
    });

    // ✅ success
    return NextResponse.json({
      success: true,
      order,
    });

  } catch (error) {
    console.error("ORDER UPDATE ERROR:", error);

    // ❌ error
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update order",
      },
      {
        status: 500,
      }
    );
  }
}