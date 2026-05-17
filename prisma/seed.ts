
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
     
    },
  });

  // TEKNISI DEMO
  await prisma.user.create({
  data: {
    name: "Teknisi Demo",
    email: "teknisi@coolcare.com",
    password: hashedPassword,

    role: "TECHNICIAN",

    whatsapp: "08123456789",

    technicianStatus: "STANDBY",
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