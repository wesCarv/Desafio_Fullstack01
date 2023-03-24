import AppDataSource from "../../data-source";
import { Client } from "../../entities/clientEntity";
import { AppError } from "../../errors/appError";
import { IClient, IClientRequest } from "../../interfaces/clientInterface";
import { client } from "../../serializers/clientSerializer";

export const createClientService = async (data :IClientRequest) : Promise<IClient> => {
    const { email } = data
    
    const userRepository = AppDataSource.getRepository(Client)   

    const verifyEmail = userRepository.findOneBy({email:email})

    if(!verifyEmail){
        throw new AppError("Email already exists" , 409)
    }

    const clients = userRepository.create(data)

    await userRepository.save(clients)

    const clientResponse = await client.validate(clients , {
        stripUnknown: true
    })
   
    return clientResponse
}