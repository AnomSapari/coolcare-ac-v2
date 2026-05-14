
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    await prisma.user.update({
      where: {
        id: body.technicianId,
      },

      data: {
        technicianStatus: "MENUJU LOKASI",
      },
    });

    return Response.json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    return Response.json({
      success: false,
    });
  }
}