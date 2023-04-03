import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contactEntity"
import { AppError } from "../../errors/appError"
import { contactUpdate } from "../../serializers/contactSerializer"

export const updateContactService =async (data : any , idContact : string): Promise<object> => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const contactExists = await contactRepository.findOneBy({
        id: idContact
    })

    if(!contactExists){
        throw new AppError("Contact don't exists" , 404)
    }

    await contactRepository.update({id: idContact} , {
        ...data
    })


    const updatedContact = await contactRepository.findOneBy({id: idContact})

    const validateContact = await contactUpdate.validate(
        updatedContact,
        {
            abortEarly:false,
            stripUnknown: true
        }
    )

    return validateContact
}