import { Router } from "express";
import { EpisodesController } from "./controllers/EpisodesController";

const episodesController = new EpisodesController();

export const routes = Router();

routes.post("/episodes", episodesController.create);
routes.get("/episodes", episodesController.getEpisodes);
routes.get("/episodes/:id", episodesController.showEpisode)
routes.delete("/episodes/:id", episodesController.deleteEpisode)