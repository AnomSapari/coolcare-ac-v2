
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {

  try {

    const formData = await req.formData();

    const orderId = formData.get("orderId");
    const technicianId = formData.get("technicianId");

    await prisma.order.update({
      where: {
        id: Number(orderId),
      },

      data: {
        technicianId: Number(technicianId),
        status: "PROCESS",
      },
    });

    return Response.redirect(
      new URL("/admin", req.url)
    );

  } catch (error) {

    console.error(error);

    return Response.json({
      success: false,
    });
  }
}
