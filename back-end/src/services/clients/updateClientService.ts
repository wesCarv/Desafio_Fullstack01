import { create } from "domain"
import AppDataSource from "../../data-source"
import { Client } from "../../entities/clientEntity"
import { AppError } from "../../errors/appError"
import { client, clientUpdate } from "../../serializers/clientSerializer"
import bcrypt, { hash } from "bcryptjs"

export const updateClientService = async (data : any , clientIdParams: string): Promise<object> => {
    const clientRepository = AppDataSource.getRepository(Client)

    const clientExists = await clientRepository.findOneBy({
        id: clientIdParams
    })

    if(!clientExists){
        throw new AppError("Client don't exists" , 404)
    }

    await clientRepository.update({id: clientIdParams} ,{
        ...data,
        password: data.password && bcrypt.hashSync(data.password, 10)
    })

    const updatedClient = await clientRepository.findOneBy({id: clientIdParams})

    const updatedClientWithoutPassword = await clientUpdate.validate(
        updatedClient,
        {
          abortEarly: false,
          stripUnknown: true,
        }
      );

      return updatedClientWithoutPassword;
}