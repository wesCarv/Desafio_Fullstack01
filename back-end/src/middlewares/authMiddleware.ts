import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors/appError"
import jwt from "jsonwebtoken"


const ensureAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization
 
  if (!token) {
    throw new AppError("Token inválido!" , 401)
  }

  token = token.split(" ")[1]

  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    if (error) {
      throw new AppError("Token inválido!" , 401)
    }

    req.client = { id: decoded.id }

    next()
  })
}

export default ensureAuthMiddleware
