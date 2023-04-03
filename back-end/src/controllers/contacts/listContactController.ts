import { Request, Response } from "express"
import { listContactsService } from "../../services/contacts/listContactsService"

export const listContactController = async (req : Request , resp: Response) => {

    const getAll = await listContactsService()


    return resp.status(200).json(getAll)
}