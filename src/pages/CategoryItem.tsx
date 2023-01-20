import axios from "axios";
import { useEffect, useState } from "react";
import EditMenu from "../components/EditMenu";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import IsAuth from "../components/IsAuth";
import Erro from "./Erro";

export default function AdminCategory() {
  if (!IsAuth()) {
    return <Erro />;
  }

  const [categorias, setCategorias] = useState<any>([]);
  useEffect(() => {
    axios("http://localhost:3000/category").then((res) => {
      setCategorias(res.data);
    });
  }, []);
  return (
    <div>
      <Title />
      <EditMenu />
      {categorias.map((v) => {
        return (
          <div key={v.id}>
            <span>
              <Link to={`/admin/itens/${v.id}`} className="categoryItem">
                <p>{v.name}</p>
              </Link>
            </span>
          </div>
        );
      })}
      <br />
      <br />
      <br />
      <div className="newCategory">
        <Link to={"/admin/edit/itens"} className="link">
          Novo Item
        </Link>
      </div>
    </div>
  );
}
