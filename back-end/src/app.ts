import express from "express"
import { clientRoutes } from "./routes/cliet.routes"
import { contactRoutes } from "./routes/contacts.routes"

const app = express()
app.use("/clients" , clientRoutes)
app.use("/login" , clientRoutes)
app.use("/contacts", contactRoutes)

export default app