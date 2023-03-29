import { Request, Response } from "express";
import { getAllClientsService } from "../../services/clients/listClientsService";

export const listClientController = async (req: Request , resp : Response) => {

        const getAll = await getAllClientsService()

        return resp.status(200).json(getAll)
}