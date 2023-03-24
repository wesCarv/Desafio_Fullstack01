import { Request, Response } from "express";
import { deleteCLient } from "../../services/clients/deleteClientService";

export const deleteClientController =async (req:Request , resp: Response) => {
    const {id} = req.params

    await deleteCLient(id)

    return resp.status(204)
}