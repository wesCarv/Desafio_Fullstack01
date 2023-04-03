import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../contexts/modalContext";
import { schemaContact } from "../../validations/cadastro";
import { Body, Form, Header, Modal, Show } from "./style";


export interface IModal {
  name: string
  telephone: string
  email: string
}

export const ModalTechs = ({ setModal }: any ) => {
  const {cadastraContacts} = useContext(ModalContext)
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IModal>({
    resolver: yupResolver(schemaContact),
  });

return (

      <Modal>
        <Show>
          <Header>
            <h2>Cadastrar contato</h2>
            <button onClick={() => setModal(false)}>X</button>
          </Header>

          <Body>
            <Form onSubmit={handleSubmit(cadastraContacts)}>
              <label>Nome</label>
              <input
                type="text"
                id="title"
                placeholder="Digite aqui o nome"
                {...register("name")}
              />
              <span>{errors.name?.message}</span>

              <label>Telephone</label>
              <input
                type="text"
                id="telephone"
                placeholder="Digite aqui o telefone"
                {...register("telephone")}
              />
              <span>{errors.telephone?.message}</span>

              <label>Email</label>
              <input
                type="text"
                id="email"
                placeholder="Digite aqui o email"
                {...register("email")}
              />
              <span>{errors.email?.message}</span>


              <button type="submit">Adicionar Contato</button>
            </Form>
          </Body>
        </Show>
      </Modal>
  );
};