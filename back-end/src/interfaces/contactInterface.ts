export interface IContactRequest {
    name: string
    email: string
    telephone: string
}

export interface IContact{
    id: string
    name: string
    email:string
    telephone: string
    registeredAt: Date
}

export interface IContactUpdate {
    name?: string
    email?: string
    telephone?: string
}