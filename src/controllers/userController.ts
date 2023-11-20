import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import userService from "../services/userServices"

class UserController{

    constructor(){}

    async createUser(req: Request, res: Response){
        const dados: Prisma.UsuarioCreateInput = req.body;
        
        if(dados.email !== "" && dados.nome !== ""){
            const newuser = await userService.createUser(dados)
            res.status(200).json({
                status: 'ok',
                newuser: newuser
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listUsers(req: Request, res: Response){
        const users = userService.listUsers();

        res.status(200).json({
            status: 'ok',
            users: users
        })
    }

    async updateUser(req: Request, res: Response){
        res.send('Update user');
    }

    async deleteUser(req: Request, res: Response){
        res.send('Delete user');
    }
}

export default new UserController;