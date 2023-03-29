import AppDataSource from "../../data-source"
import { Client } from "../../entities/clientEntity"
import { AppError } from "../../errors/appError"

export const deleteCLient = async (id: string) => {
    const userRepository = AppDataSource.getRepository(Client)

    const findClient = await userRepository.findOneBy({id: id})

    if(findClient){
        throw new AppError("Client not found" , 404)
    }

    userRepository.delete({id})

    return 
}