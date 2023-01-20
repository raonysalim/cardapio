import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryTitle from "../components/CategoryTitle";
import Title from "../components/Title";

export default function Categorias() {
  const [categorias, setCategorias] = useState<any>([]);
  useEffect(() => {
    axios("http://localhost:3000/category").then((res) => {
      setCategorias(res.data);
    });
  }, []);

  return (
    <div>
      <Title />
      <CategoryTitle
        msg={"Clique na categoria desejada para visualizar nossas opções!"}
      />
      <br /> <br />
      {categorias.map((v) => {
        if (v.name == "Ocultar") return;
        return (
          <div className="categoryMenu" key={v.id}>
            <Link className="content" to={`/itens/${v.id}`}>
              {v.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
