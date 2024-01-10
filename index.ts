
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.create({data: {
    username: "balayogesh",
    first_name: "Bala Yogesh",
    last_name: "V",
    password: "",
    email_id: "balauserlocal@mailinator.com"
  }});

  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
}

main().catch(async (e) => {
    throw new Error(e)
}).finally(async () => {
    await prisma.$disconnect();
})