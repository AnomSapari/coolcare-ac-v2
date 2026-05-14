
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function POST(req: Request) {

  const formData = await req.formData();

  const orderId = formData.get("orderId") as string;

  if (!orderId) {
    return Response.json({
      success: false,
    });
  }

  await prisma.order.update({
    where: {
      id: Number(orderId),
    },

    data: {
      status: "DONE",
    },
  });

  return Response.redirect(
    new URL("/technician", req.url)
  );
}