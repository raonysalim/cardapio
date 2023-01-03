import axios from "axios";
import { useEffect, useState } from "react";
import EditMenu from "../components/EditMenu";
import Title from "../components/Title";
import Modal from "react-modal";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import DeleteItem from "../components/DeleteItem";
import IsAuth from "../components/IsAuth";
import Erro from "./Erro";

export default function AdminItens() {
  if (!IsAuth()) {
    return (
      <div>
        <Erro />
      </div>
    );
  }

  const { categoryId } = useParams();
  const [itens, setItens] = useState([]);

  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [id, setId] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    axios(`http://localhost:3000/itens/${categoryId}`).then((res) => {
      setItens(res.data);
    });
  }, []);
  return (
    <div>
      <Title />
      <EditMenu />
      {itens.map((i) => {
        return (
          <div key={i.id}>
            <span className="selectCategory">
              <p>{i.name}</p>
              <button
                className="btnEdit"
                onClick={() => {
                  navigate(
                    `/admin/edit/itens/${i.id}?name=${i.name}&description=${
                      i.description
                    }&price=${i.price}&category=${i.categoryId}&image=${
                      i.image ? true : false
                    }`
                  );
                }}
              >
                <AiFillEdit size={25} />
              </button>
              <button
                className="btnEdit"
                onClick={() => {
                  openModal();
                  setId(i.id);
                  setName(i.name);
                }}
              >
                <AiFillDelete size={25} />
              </button>
            </span>
          </div>
        );
      })}
      <br />
      <br />
      <br />
      <Link to={"/admin/edit/itens?image="} className="subtitle">
        Novo Item
      </Link>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h1>Deseja excluir {name}?</h1>
        <br />
        <button
          onClick={() => {
            DeleteItem(id);
          }}
        >
          Sim
        </button>
        <button onClick={closeModal}>Não</button>
      </Modal>
    </div>
  );
}
