import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { CadastroContext } from "../../contexts/cadastroContexts";
import { schemaCadastro } from "../../validations/cadastro";
import { BtnTopo, Button, Form, Global, Topo } from "./style"

export interface ICadastro {
    name: string
    password : string
    telephone: string
    email: string
}

export const Cadastro = () => {
    const navigate = useNavigate();
    const {cadastraUser}   = useContext(CadastroContext)
    
      const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm<ICadastro>({
        resolver: yupResolver(schemaCadastro),
      });
  
    const retorna = (evt: { preventDefault: () => void; }) => {
      evt.preventDefault();
  
      navigate("/");
    };
  
    useEffect(()=>{
      const token =localStorage.getItem('@Agenda:token')
      if(token){
        navigate('/dashboard')
      }
    },[])
    return (
        <Global>
          <Topo>
            <h1>Cadastro</h1>
            <BtnTopo onClick={retorna}>Voltar</BtnTopo>
          </Topo>
            <Form onSubmit={handleSubmit(cadastraUser)}>
                <input type="text"
                placeholder="Insira seu email aqui"
                {...register("email")}
                />
                <span>{errors.email?.message}</span>

                <input type="text"
                placeholder="Insira seu telefone" 
                {...register("telephone")}
                />
                <span>{errors.telephone?.message}</span>

                <input type="text"
                placeholder="Insira seu nome aqui"
                {...register("name")}
                 />
                 <span>{errors.name?.message}</span>

                <input type="password"
                placeholder="Insira sua senha aqui"
                {...register("password")}
                />
                <span>{errors.password?.message}</span>

                <Button>Cadastrar</Button>
            </Form>
        </Global>
    )
}