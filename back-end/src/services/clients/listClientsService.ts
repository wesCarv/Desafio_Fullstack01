import AppDataSource from "../../data-source"
import { Client } from "../../entities/clientEntity"
import { listClients } from "../../serializers/clientSerializer"

export const getAllClientsService = async () => {
    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.find()

    const clientResponse = listClients.validate(client , {
        stripUnknown: true
    })

    return clientResponse
}
