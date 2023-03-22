import { Request, Response } from "express";
import { IClientRequest } from "../../interfaces/clientInterface";
import { createClientService } from "../../services/clients/createClientsService";

export const createClientController =async (req: Request , resp : Response) => {
   
    const data : IClientRequest = req.body

    const newClient = await createClientService(data)

    return resp.status(201).json(newClient)
}