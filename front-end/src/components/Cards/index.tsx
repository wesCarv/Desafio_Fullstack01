import { useEffect } from "react";
import { toast } from "react-toastify";
import { instance } from "../../services/axios/axios";
import { BsTrash } from 'react-icons/bs'
import { FiEdit } from "react-icons/fi"
import { Lista, ListaTechs } from "./style";

    interface IMapCards {
        id: string
        name: string
        telephone: string
        email: string
    }

export const Cards = ({card, setCard} : any) => {

    useEffect(() => {
      instance
        .get("/contacts", {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "@Agenda:token"
            )}`,
          },
        })
        .then((resp) => {
          setCard(resp.data.name);
        })
        .catch((error) => localStorage.clear());
    }, [setCard]);
  
    async function DeletaTech(id: string){
     await instance.delete(`/contacts/${id}` , {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem(
            "@Agenda:token"
          )}`,
        },
      })
      .then(resp => toast.success('Contato deetado com sucesso'))
      .catch(err => toast.error('Não foi possível deletar , tente novamente mais tarde'))
     }
    
    return (
      <ListaTechs>
        {card.map((element: IMapCards) => {
          return (
            <Lista key={element.id}>
              <h2>{element.name}</h2>
  
              <div className="info">
                <span>{element.telephone}</span>
                <button onClick={async() => {
                 await DeletaTech(element.id)
                  const filtro = card.filter((filtred: IMapCards) => {
                    return filtred !== element
                  })
                  setCard([...filtro])
                  
                }}>
                  <FiEdit color="#000"/>
                  <BsTrash color="#000" />
                </button>
              </div>
            </Lista>
          );
        })}
      </ListaTechs>
    );
  };