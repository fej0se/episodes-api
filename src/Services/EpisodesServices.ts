import { getCustomRepository, Repository } from "typeorm";
import { Episodes } from "../entities/Episodes";
import { EpisodesRepository } from "../repositories/EpisodesRepository";


interface IEpisodesCreate {
    id: string;
    title?: string;
    members?: string;
    published_at?: string;
    thumbnail?: string;
    description?: string;
    fileurl?: string;
    fileduration?: number;
}

export class EpisodesService {
    private episodesRepository: Repository<Episodes>;

    constructor() {
        this.episodesRepository = getCustomRepository(EpisodesRepository);
    }

    async create({
        id,
        title,
        members,
        published_at,
        thumbnail,
        description,
        fileurl,
        fileduration
    }: IEpisodesCreate) {
        const episodes = this.episodesRepository.create({
            id,
            title,
            members,
            published_at,
            thumbnail,
            description,
            fileurl,
            fileduration,
        })

        const episodeAlreadyExist = await this.episodesRepository.findOne({
            id
        })

        const exist = {
            "message": "Episodes already exist, use update route."
        }

        if (episodeAlreadyExist) {
            return exist;
        }

        await this.episodesRepository.save(episodes);
        return episodes;
    }

    async listEpisodes() {
        const episodes = await this.episodesRepository.find();
        return episodes
    }

    async listByEpisode(id: string) {
        const episode = await this.episodesRepository.find({
            where: { id },
        })
        return episode
    }

    async delete(id: string) {
        const notFound = {
            "message": "not found"
        }

        const episode = await this.episodesRepository.find({id})
        if (episode.length == 1) {
            const episode = await this.episodesRepository.delete(id)
            return {"message": "episode sucessfully deleted"}
        } else {
            return {"message": "episode not found"}
        }





    }

    async update({
        id,
        title,
        members,
        published_at,
        thumbnail,
        description,
        fileurl,
        fileduration
    }: IEpisodesCreate) {
        const episodes = this.episodesRepository.create({
            id,
            title,
            members,
            published_at,
            thumbnail,
            description,
            fileurl,
            fileduration,
        })
        await this.episodesRepository.save(episodes);
        return episodes;
    }

}