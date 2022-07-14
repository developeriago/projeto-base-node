import { sequelize } from './../instances/pg';
import { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import { Frase } from '../models/frase';

export const ping = (req: Request, res: Response)=>{
    res.json({ pong: true });
}

export const random = (req: Request, res: Response)=>{
    let nRand: number = Math.floor( Math.random() * 10);
    res.json({ number: nRand });
}

export const nome = (req: Request, res: Response)=>{
    let nome = req.params.nome;
    res.json({nome: `Você enviou o nome ${nome}`});
}

//Criar uma nova frase
export const createFrase = async (req: Request, res: Response)=>{
    let { autor, texto } = req.body;

    let newFrase = await Frase.create({ autor, texto });
    res.status(201);
    res.json({ id: newFrase.id, autor, texto});
}

//Listar as frases
export const listFrases = async (req: Request, res: Response)=>{
    let list = await Frase.findAll();
    res.json({list});
}

//Listar tarefa especifica
export const getFrases = async (req: Request, res: Response)=>{
    let {id} = req.params;

    let frase = await Frase.findByPk(id);
    if(frase){
        res.json({ frase });
    }else{
        res.json({ error: 'Frase não encontrada'});
    }
}

//Atualizar Frase
export const updateFrase = async (req: Request, res: Response)=>{
    let { id } = req.params;
    let { autor, texto } = req.body;

    let frase = await Frase.findByPk(id);
    if(frase){
        frase.autor = autor;
        frase.texto = texto;
        await frase.save();
        
        res.json(frase);
    }else{
        res.json({error: 'Frase não encontrada'});
    }
}

//Deletar uma frase
export const deleteFrase = async (req: Request, res: Response)=>{
    let { id } = req.params;
    await Frase.destroy({ where: { id }});

    res.json({});
}

//Listar uma frase aleatoria
export const randomFrase = async (req: Request, res: Response)=>{
    let frase = await Frase.findOne({
        order:[
            sequelize.fn('RANDOM')
        ]
    });

    if(frase){
        res.json({ frase });
    }else{
        res.json({ error: 'Não há frases cadastradas'});
    }
}