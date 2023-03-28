import { Router } from "express";
import { createClientController } from "../controllers/clients/createClientController";
import { deleteClientController } from "../controllers/clients/deleteClientController";
import { listClientController } from "../controllers/clients/listClientController";
import { updateClientController } from "../controllers/clients/updateClientController";

export const clientRoutes = Router()

clientRoutes.post("" , createClientController)
clientRoutes.get("" , listClientController)
clientRoutes.patch("/:id" , updateClientController)
clientRoutes.delete("/:id" , deleteClientController)