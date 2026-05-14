
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {

  const hashedPassword = await bcrypt.hash(
    "admin123",
    10
  );

  // ADMIN
  await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "ADMIN",
      approved: true,
    },
  });

  // TEKNISI DEMO
  await prisma.user.create({
    data: {
      name: "Budi Teknisi",
      email: "teknisi@gmail.com",
      password: hashedPassword,

      role: "TECHNICIAN",

      approved: true,

      whatsapp: "08123456789",

      specialist: "Service AC & Bongkar Pasang",

      technicianStatus: "STANDBY",

      photo: "/default-avatar.png",
    },
  });

  console.log("Seed berhasil");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });