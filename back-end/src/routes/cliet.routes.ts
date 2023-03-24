import { Router } from "express";
import { createClientController } from "../controllers/clients/createClientController";

export const clientRoutes = Router()

clientRoutes.post("" , createClientController)