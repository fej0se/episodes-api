import { Router } from "express";
import { EpisodesController } from "./controllers/EpisodesController";

const episodesController = new EpisodesController();

export const routes = Router();

routes.post("/episodes", episodesController.create);
routes.get("/episodes", episodesController.getEpisodes);
routes.get("/episodes/:id", episodesController.showEpisode)
routes.delete("/delete/episodes/:id", episodesController.deleteEpisode)
routes.get('/', (req, res) => {
    res.send('<a href="https://github.com/fej0se/episodes-api">Github</a><br/><p>Made with ♥ by: Felipe José</p>')
  })