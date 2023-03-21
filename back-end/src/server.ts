import app from "./app"
import AppDataSource from "./data-source"
import 'express-async-errors'

(async () => {

    await AppDataSource.initialize()
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
    
    app.listen(3000, () => {
        console.log("Servidor executando")
    })    
})()