import { createContext, Dispatch, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { IModal } from "../../components/modalContact";
import { instance } from "../../services/axios/axios";
import { IAuthContext } from "../authContexts/auth";

interface IData {
  name: string;
  telephone: string;
  email: string;
}

interface IModalContext {
  cadastraContacts: SubmitHandler<IModal>;
  modal: boolean;
  setModal: Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider = ({ children }: IAuthContext) => {
  const [modal, setModal] = useState<boolean>(false);

  async function cadastraContacts(data: IData) {
    try {
      setModal(false);
      await instance
        .post("/contacts", data, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "@Agenda:token"
            )}`,
          },
        })
        .then(() => {
          toast.success("Contato cadastrada com sucesso");
          window.location.reload();
        });
    } catch (error) {
      console.log(error);
      toast.error("Esse Contato já foi usada");
    }
  }

  return (
    <ModalContext.Provider value={{ modal, setModal, cadastraContacts }}>
      {children}
    </ModalContext.Provider>
  );
};
