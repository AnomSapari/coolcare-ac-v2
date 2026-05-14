
import { prisma } from "@/lib/prisma";

export async function GET() {

  const technicians = await prisma.user.findMany({
    where: {
      role: "TECHNICIAN",
      approved: true,
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  return Response.json(technicians);
}
