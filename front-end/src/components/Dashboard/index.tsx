import { useState } from "react";
import { useNavigate } from "react-router";
import { Cards } from "../Cards";
import { ModalTechs } from "../modalContact";
import { AddCtt, Dashb, DivInfo, DivMain, Header, Main } from "./style";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState<boolean>(false);
  const [card, setCard] = useState<[]>([]);

  const backToLogin = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <Dashb>
      {modal && <ModalTechs setModal={setModal} />}
      <Header>
        <h1 className="h1__dash">Agenda</h1>
        <button onClick={backToLogin}>Voltar</button>
      </Header>
      <DivMain>
        <DivInfo>
          <h2 className="h2__name">Olá , {localStorage.getItem("name")}</h2>
        </DivInfo>
        <Main>
          <DivInfo>
            <h2>Contatos</h2>
          </DivInfo>
          <AddCtt>
            <button onClick={() => setModal(true)}>Criar contato</button>
          </AddCtt>

          <Cards card={card} setCard={setCard} />
        </Main>
      </DivMain>
    </Dashb>
  );
};
