import AppDataSource from "../../data-source";
import { Client } from "../../entities/clientEntity";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { AppError } from "../../errors/appError";
import { IClientLogin } from "../../interfaces/clientInterface";

export const loginClientService = async ({
    email,
    password,
  }: IClientLogin): Promise<string> => {
    const userRepository = AppDataSource.getRepository(Client);
  
    const client = await userRepository.findOneBy({
      email: email,
    });
  
    if (!client) {
      throw new AppError("Email or password invalid", 403);
    }
    const verifyPassword = bcrypt.compareSync(password , client.password)
    if (!verifyPassword) {
      throw new AppError("Email or password invalid", 403);
    }
  
    const token = jwt.sign({
      id : client.id
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h"
    }
    )
  
    return token
  };