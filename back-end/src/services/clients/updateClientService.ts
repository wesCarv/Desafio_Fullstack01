import AppDataSource from "../../data-source"
import { Client } from "../../entities/clientEntity"
import { AppError } from "../../errors/appError"
import { client } from "../../serializers/clientSerializer"

export const updateClientService = async (data : any , clientIdParams: string , clients : any): Promise<object> => {

    if(clientIdParams !== clients.id){
        throw new AppError("Client not authorized", 401)
    }

    const clientRepository = AppDataSource.getRepository(Client)

    const clientExists = clientRepository.findOneBy({
        id: clientIdParams
    })

    if(!clientExists){
        throw new AppError("Client don't exists" , 404)
    }

    const updatedClient = clientRepository.create({
        ...clientExists,
        ...data
    })

    const updatedClientWithoutPassword = await client.validate(
        updatedClient,
        {
          abortEarly: false,
          stripUnknown: true,
        }
      );
      return updatedClientWithoutPassword;
}