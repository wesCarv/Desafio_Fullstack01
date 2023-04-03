import { createContext } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { ICadastro } from "../../components/FormCadastro";
import { instance } from "../../services/axios/axios";
import { IAuthContext } from "../authContexts/auth";

interface ICadastroContext{
    cadastraUser: SubmitHandler<ICadastro>
  }
  
export const CadastroContext = createContext<ICadastroContext>({} as ICadastroContext);

export const CadastroProvider = ({ children }:IAuthContext) => {
  const navigate = useNavigate();

    async function cadastraUser(data : ICadastro) {
      try {
        await instance.post("/clients", data);
        console.log(data)
        toast.success("Cadastro realizado com sucesso");
        navigate("/");
      } catch (error) {
        console.log(error)
      }
    }

  return(
    <CadastroContext.Provider value={{cadastraUser}}>
        {children}
    </CadastroContext.Provider>
  )
};
