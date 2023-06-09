import "express-async-errors"
import express from "express"
import handleError from "./errors/handleError"
import { clientRoutes } from "./routes/cliet.routes"
import { contactRoutes } from "./routes/contacts.routes"
import { loginRoutes } from "./routes/login.routes"


const app = express()
app.use(express.json())

app.use("/clients" , clientRoutes)
app.use("/contacts", contactRoutes)
app.use("/login" , loginRoutes)
app.use(handleError)

export default app