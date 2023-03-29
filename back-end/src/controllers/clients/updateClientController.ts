import { Request, Response } from "express";
import { updateClientService } from "../../services/clients/updateClientService";

export const updateClientController =async (req : Request , resp : Response) => {
    const id = req.params.id
    const data = req.body

    const updatedClient = await updateClientService(id , data)

    return resp.status(201).json(updatedClient)

}