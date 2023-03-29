import { Router } from "express";
import { loginController } from "../controllers/clients/loginClientController";

export const loginRoutes =  Router()

loginRoutes.use("" , loginController)