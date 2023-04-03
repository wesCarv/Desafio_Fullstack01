import { Request, Response, NextFunction } from 'express'
import { AppError } from './appError'


const handleError = (error: any, req: Request, resp: Response, next: NextFunction) => {

    if(error instanceof AppError){
        return resp.status(error.statusCode).json({
            message: error.message
        })
    }
         
    return resp.status(500).json({
        message: 'Internal server error'
    })

}

export default handleError