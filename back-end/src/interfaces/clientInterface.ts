export interface IClientRequest {
    name : string
    email : string
    password : string
    telephone : string
}

export interface IClient {
    id : string
    name : string
    email : string
    password : string
    telephone : string
    createdAt : Date
}

export interface IClientLogin {
    email: string
    password : string
}

export interface IClientUpdate {
    email? : string
    name? : string
    password?: string
    telephone?: string
}