import {Prisma, PrismaClient, Usuario } from "@prisma/client";

const prisma = new PrismaClient();

class lanceServices{

    constructor(){

    }

    async listLances(comprador?:Usuario){
            try{
                if(comprador){
                    const lance = await prisma.lance.findUnique({
                    where: {
                        comprador
                    },

                    })
                    return lance;
                }else{
                    const lance = await prisma.lance.findMany();
                    return lance;
                }
            }catch(error){
                console.log(error);
                return null;
            }



    }

    async updatelance(comprador?:Usuario, lance: Prisma.LanceUpdateInput){
        try{
            const updateLance = await prisma.lance.update({
                where:{
                    comprador
                },
                data: lance


            });
            return updateLance

        }catch(error){
            console.log(error);
            return null;
        }
    }


    async createLance(lance: Prisma.LanceCreateInput){
        try{
            const newuser = await prisma.lance.create({
                data: lance
            });
            return newuser;
        }catch(error){
            console.log(error);
            return null;
        }
    }


    async deleteLeilao(comprador?:Usuario){
        try{
            const deletedLeilao = await prisma.lance.delete({
                where: {
                    comprador
                }
            });

            return deletedLeilao;
        }catch(error){
            console.log(error);
            return null;
        }
    }

}

export default lanceServices;