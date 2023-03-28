import express from "express"
import { clientRoutes } from "./routes/cliet.routes"

const app = express()
app.use("/clients" , clientRoutes)
app.use("/login" , clientRoutes)

export default app