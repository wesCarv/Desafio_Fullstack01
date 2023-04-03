import { Request, Response } from "express";
import { deleteContactService } from "../../services/contacts/deleteContactService";

export const deleteContactController =async (req : Request, resp : Response) => {
    const id = req.params.id
    
    await deleteContactService(id)

    return resp.status(204).json({"message": "Contact deleted"})
}