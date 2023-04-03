import { Request, Response } from "express";
import { updateContactService } from "../../services/contacts/updateContactService";

export const updateContactController = async (req: Request , resp : Response) => {
    const id = req.params.id
    const data = req.body

    const updatedContact = await updateContactService(data , id)

    return resp.status(201).json(updatedContact)
}