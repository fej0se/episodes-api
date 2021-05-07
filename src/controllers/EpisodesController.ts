import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { Episodes } from '../entities/Episodes';
import { EpisodesRepository } from '../repositories/EpisodesRepository';
import { EpisodesService } from '../Services/EpisodesServices';

export class EpisodesController {

    async create(req: Request, res: Response) {
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

        const episodesservice = new EpisodesService();

        const episodes = await episodesservice.create({
            id,
            title,
            members,
            published_at,
            thumbnail,
            description,
            fileurl,
            fileduration  
        })

        return res.json(episodes);

    }

    async getEpisodes(req: Request, res: Response){
        const episodesservice = new EpisodesService();
        const episodes = await episodesservice.listEpisodes();
        return res.json(episodes)
    }

    async showEpisode(req: Request, res: Response){
        const {id} = req.params;
        const episodesservice = new EpisodesService();

        const episode = await episodesservice.listByEpisode(id);

        return res.json(episode[0]);
    }
}
