import * as yup from "yup"


export const clientRequest = yup.object().shape({
    name: yup.string().required(),
    email : yup.string().email().required(),
    password : yup.string().required(),
    telephone: yup.string().required()
})

export const client = yup.object().shape({
    id: yup.string().required(),
    name: yup.string().required(),
    email : yup.string().email().required(),
    password : yup.string().required(),
    telephone: yup.string().required(),
    createdAt : yup.date().required()
})

export const clientUpdate = yup.object().shape({
    name: yup.string(),
    email: yup.string().email(),
    password: yup.string(),
    telephone: yup.string()
})

export const listClients = yup.array(client)