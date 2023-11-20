import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import userService from "../services/leilaoServices"

class LeilaoController{

    constructor(){}

    async createLeilao(req: Request, res: Response){
        const dados: Prisma.LeilaoCreateInput = req.body;
        
        if(dados.produto !== "" && dados.dono !== ""){
            const newLeilao = await userService.createLeilao(dados)
            res.status(200).json({
                status: 'ok',
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: '...'
            })
        }

    }

    async listUsers(req: Request, res: Response){
        const leilao = userService.listLeilao();

        res.status(200).json({
            status: 'ok',
        })
    }

    async updateLeilao(req: Request, res: Response){
        res.send('Update');
    }

    async deleteLeilao(req: Request, res: Response){
        res.send('Delete');
    }
}

export default new LeilaoController;