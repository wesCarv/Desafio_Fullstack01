import axios from "axios"

export const instance = axios.create({
    baseURL: 'localhost:3000',
    timeout: 5000,
})