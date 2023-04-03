import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contactEntity"
import { listContacts } from "../../serializers/contactSerializer"

export const listContactsService =async () => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const contact = await contactRepository.find()

    const contactResponse = listContacts.validate(contact , {
        stripUnknown: true
    })

    return contactResponse
}