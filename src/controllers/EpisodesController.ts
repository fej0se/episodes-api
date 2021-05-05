import {Request, Response} from 'express';
import { getCustomRepository } from 'typeorm';
import { EpisodesRepository } from '../repositories/EpisodesRepository';

export class EpisodesController {
    async create(req: Request, res: Response){
        const { 
            id, 
            title, 
            members, 
            published_at,
            thumbnail,
            description,
            fileurl,
            fileduration
        } = req.body;
        const episodesRepository = getCustomRepository(EpisodesRepository);
    
        const episodes = episodesRepository.create({
            id,
            title,
            members,
            published_at,
            thumbnail,
            description,
            fileurl,
            fileduration,
        })
    
        await episodesRepository.save(episodes);
    
        return res.json(episodes);
    }
}
