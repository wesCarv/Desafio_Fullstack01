import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contactEntity"
import { AppError } from "../../errors/appError"

export const deleteContactService =async (id:string) => {
    
    const contactRepository = AppDataSource.getRepository(Contact)

    const findContact = await contactRepository.findOneBy({id: id})

    if(!findContact){
        throw new AppError("Contact not found" , 404)
    }

    contactRepository.delete({id: id})

    return {}
}