import { Router } from "express";
import { EpisodesController } from "./controllers/EpisodesController";
import { SettingsController } from "./controllers/SettingsController";

const settingsController = new SettingsController();
const episodesController = new EpisodesController();

export const routes = Router();

routes.post("/settings", settingsController.create);
routes.post("/episodes", episodesController.create);