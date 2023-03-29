import { Request, Response } from "express";
import { createContactService } from "../../services/contacts/createContactService";

export const createContactController = async (req: Request , resp : Response) => {
    const data = req.body

    const newContact = await createContactService(data)

    return resp.status(201).json(newContact)
}