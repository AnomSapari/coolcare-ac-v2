import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

  try {

    const body = await request.json();

    const { orderId, status } = body;

    const order = await prisma.order.update({
      where: {
        id: Number(orderId),
      },
      data: {
        status,
      },
    });

    return NextResponse.json({
      success: true,
      order,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Gagal update status",
      },
      {
        status: 500,
      }
    );
  }
}