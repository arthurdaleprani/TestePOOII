import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class userServices {
    constructor(){

    }

    async listUsers(email?: string){
        try{
            if(email){
                const user = await prisma.usuario.findUnique({
                    where: {
                        email
                        
                        
                    },
                });
                return user;
            }else{
                const users = await prisma.usuario.findMany();
                return users;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createUser(usuario: Prisma.UsuarioCreateInput){
        try{
            const newuser = await prisma.usuario.create({
                data: usuario
            });
            return newuser;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateUser(email: string, usuario: Prisma.UsuarioUpdateInput){
        try{
            const updatedUser = await prisma.usuario.update({
                where: {
                    email
                },
                data: usuario
            });

            return updatedUser;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteUser(email: string){
        try{
            const deletedUser = await prisma.usuario.delete({
                where: {
                    email
                }
            });

            return deletedUser;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new userServices();