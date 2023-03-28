import { Request, Response } from "express";
import { IClientLogin } from "../../interfaces/clientInterface";
import { loginClientService } from "../../services/clients/loginClientService";


export const loginController = async (req: Request, resp : Response) => {
    const loginData : IClientLogin = req.body
    const token = await loginClientService(loginData)

    return resp.status(200).json({token})
}