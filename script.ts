import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const Usuario = await prisma.usuario.create({
        data:{
         email:"ArthurDaleprani@hotmail.com",
         nome:"Arthur"
         


        },




    })
    console.log(Usuario);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })