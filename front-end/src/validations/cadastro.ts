import * as yup from 'yup'

export const schemaCadastro = yup.object({
    email: yup.string().required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatória'),
    name: yup.string().required("O campo nome é obrigatório"),
    telephone: yup.string().required("O campo telefone é obrigatório")
})

export const schemaContact = yup.object({
    name: yup.string().required('nome é obrigatório'),
    email: yup.string().required('Email é obrigatório'),
    telephone: yup.string().required('Telephone é obrigatório')
  })