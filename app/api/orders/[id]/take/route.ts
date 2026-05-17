import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // 📍 ambil id order
    const { id } = await context.params;

    // 📍 ambil request body
    const body = await req.json();

    // 📍 update order
    const order = await prisma.order.update({
      where: {
        id: Number(id),
      },

      data: {
        technicianId: Number(body.technicianId),
        status: "ON_THE_WAY",
      },
    });

    // ✅ success
    return NextResponse.json({
      success: true,
      order,
    });

  } catch (error) {
    console.error("TAKE ORDER ERROR:", error);

    // ❌ error
    return NextResponse.json(
      {
        success: false,
        message: "Failed to take order",
      },
      {
        status: 500,
      }
    );
  }
}