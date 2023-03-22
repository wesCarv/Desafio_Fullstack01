import AppDataSource from "../../data-source";
import { Client } from "../../entities/clientEntity";
import jwt from "jsonwebtoken"
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
  
    if (password != client.password) {
      throw new AppError("Email or password invalid", 403);
    }
  
    const token = jwt.sign(
      process.env.SECRET_KEY as string,
      {
        key: "",
        passphrase: ""
      }
    );
  
    return token;
  };