import { Router } from "express";
import { updateClientController } from "../controllers/clients/updateClientController";
import {createContactController} from "../controllers/contacts/createContactController"
import { deleteContactController } from "../controllers/contacts/deleteContactController";
import { listContactController } from "../controllers/contacts/listContactController";

export const contactRoutes = Router()

contactRoutes.post("", createContactController)
contactRoutes.get("" , listContactController)
contactRoutes.patch("/:id", updateClientController)
contactRoutes.delete("/:id" , deleteContactController)