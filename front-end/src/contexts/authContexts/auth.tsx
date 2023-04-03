import { createContext, ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { instance } from "../../services/axios/axios";


export const AuthContext = createContext({});

export interface IAuthContext{
  children: ReactNode
}

export const AuthProvider = ({ children }: IAuthContext) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function carregaUsuario() {
      const token = window.localStorage.getItem("@Agenda:Token");
      
      if (token) {
        try {
          instance.defaults.headers.common.Authorization = `Bearer ${token}`;
          const { data } = await instance.get("/clients");
          setUser(data);
          window.localStorage.clear();
          window.localStorage.setItem("@Agenda:Token", data.token);
          toast.success("Login realizado com sucesso");
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      }
    }
    carregaUsuario();
  }, [navigate]);

  async function registraUsuario(data: object) {
    try {
      const resp = await instance.post("/login", data);
      const { user: userResponse, token } = resp.data;

      setUser(userResponse);

      localStorage.setItem("@Agenda:token", token);
      localStorage.setItem("name", resp.data.name);
      const toNavigate = location.state?.from?.pathname || "dashboard";
      navigate(toNavigate, { replace: true }); 
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <AuthContext.Provider value={{ registraUsuario, user, loading}}>
      {children}
    </AuthContext.Provider>
  );
};
