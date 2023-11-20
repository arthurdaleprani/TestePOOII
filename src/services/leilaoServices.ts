import { Prisma, PrismaClient } from "@prisma/client";
import { PrismaClientRustPanicError } from "@prisma/client/runtime/library";

const prisma = new PrismaClient();

class leilaoServices{

    constructor(){

    }

    async listLeilao(produto?:string){
            try{
                if(produto){
                    const leilao = await prisma.leilao.findUnique({
                    where: {
                        produto
                    },

                    })
                    return leilao;
                }else{
                    const leilao = await prisma.leilao.findMany();
                    return leilao;
                }
            }catch(error){
                console.log(error);
                return null;
            }



    }

    async updateLeilao(produto:string, leilao: Prisma.LeilaoUpdateInput){
        try{
            const updateLeilao = await prisma.leilao.update({
                where:{
                    produto
                },
                data: leilao


            });
            return updateLeilao

        }catch(error){
            console.log(error);
            return null;
        }
    }


    async createLeilao(leilao: Prisma.LeilaoCreateInput){
        try{
            const newuser = await prisma.leilao.create({
                data: leilao
            });
            return newuser;
        }catch(error){
            console.log(error);
            return null;
        }
    }


    async deleteLeilao(produto: string){
        try{
            const deletedLeilao = await prisma.leilao.delete({
                where: {
                    produto
                }
            });

            return deletedLeilao;
        }catch(error){
            console.log(error);
            return null;
        }
    }

}

export default leilaoServices;