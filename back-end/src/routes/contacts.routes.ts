import { Router } from "express";
import {createContactController} from "../controllers/contacts/createContactController"

export const contactRoutes = Router()

contactRoutes.post("", createContactController)