
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const hashedPassword = await bcrypt.hash(
      body.password,
      10
    );

    await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword,

        whatsapp: body.whatsapp,
        address: body.address,

        experience: body.experience,
        specialist: body.specialist,

        role: "TECHNICIAN",

        approved: false,
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