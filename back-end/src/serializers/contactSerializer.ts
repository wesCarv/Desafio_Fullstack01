import * as yup from "yup"

export const contactRequest = yup.object().shape({
    name: yup.string().required(),
    email : yup.string().email().required(),
    telephone: yup.string().required()
})

export const contact = yup.object().shape({
    id: yup.string().required(),
    name: yup.string().required(),
    email : yup.string().email().required(),
    telephone: yup.string().required(),
    registeredAt : yup.date().required()
})

export const contactUpdate = yup.object().shape({
    name: yup.string(),
    email: yup.string().email(),
    telephone: yup.string()
})

export const listContacts = yup.array(contact)