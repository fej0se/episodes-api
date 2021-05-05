import { Entity, EntityRepository, Repository } from "typeorm";
import { Episodes } from "../entities/Episodes"


@EntityRepository(Episodes)
export class EpisodesRepository extends Repository<Episodes> {

}