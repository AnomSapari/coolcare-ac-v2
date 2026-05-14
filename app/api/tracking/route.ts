
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {

  try {

    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");

    if (!id) {

      return Response.json({
        success: false,
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

    return Response.json({
      success: true,
      order,
    });

  } catch (error) {

    console.error(error);

    return Response.json({
      success: false,
    });
  }
}