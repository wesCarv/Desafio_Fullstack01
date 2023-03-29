import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contactEntity"
import { AppError } from "../../errors/appError"
import { IContactRequest ,IContact } from "../../interfaces/contactInterface"
import {contact} from "../../serializers/contactSerializer"

export const createContactService =async (data: IContactRequest): Promise<IContact> => {

    const {telephone} = data
    const userRepository = AppDataSource.getRepository(Contact)

    const contactExists = userRepository.findOneBy({telephone:telephone})

    if(!contactExists){
        throw new AppError("contact already exists", 409)
    }

    const newContacts = userRepository.create(data)

    userRepository.save(newContacts)

    const contactSerializer = await contact.validate(newContacts,{
        stripUnknown:true
    })

    return contactSerializer
    
}