export interface IClientRequest {
    name: string
    email: string
    telephone: string
}

export interface IClient{
    id: string
    name: string
    email:string
    telephone: string
    registeredAt: Date
}

export interface IClientUpdate {
    name?: string
    email?: string
    telephone?: string
}