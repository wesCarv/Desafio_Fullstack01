import {Routes , Route} from "react-router-dom"
import { Dashboard } from "../components/Dashboard"
import { Cadastro } from "../components/FormCadastro"
import { Login } from "../components/FormLogin"
import { ProtectedRoutes } from "../components/ProtectedRoute"

export const Router = () => {
    return (<Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>} />

            <Route path="/dashboard" element={<Dashboard />} />
        <Route element={<ProtectedRoutes/>}>
        </Route>
    </Routes>)
}