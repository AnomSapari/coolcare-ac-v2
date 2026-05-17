
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {

  try {

    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");

    if (!id) {
      return Response.json({
        success: false,
      });
    }

    await prisma.user.update({
      where: {
        id: Number(id),
      },

     data: {
  role: "TECHNICIAN",
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
