import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContexts/auth";
import { schemaLogin } from "../../validations/login";
import { BtnCadastro, BtnLogin, Forms, Global } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";

interface ILogin {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const { registraUsuario }: any = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(schemaLogin),
  });

  function navigateCadastro(evt: { preventDefault: () => void }) {
    evt.preventDefault();

    navigate("/cadastro");
  }

  useEffect(() => {
    const token = localStorage.getItem("@Agenda:token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <Global>
      <h1>Agenda</h1>
      <Forms onSubmit={handleSubmit(registraUsuario)}>
        <h3>Login</h3>

        <input
          type="text"
          placeholder="Insira seu email aqui"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>

        <input type="password" 
        placeholder="Insira sua senha" 
        {...register("password")}/>
        <span>{errors.password?.message}</span>

        <BtnLogin type="submit">LogIn</BtnLogin>
        <span>Ainda não é cadastrado ?</span>
        <BtnCadastro onClick={navigateCadastro}>Cadastre-se</BtnCadastro>
      </Forms>
    </Global>
  );
};
