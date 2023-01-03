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
      <CategoryTitle />
      <br /> <br />
      {categorias.map((v) => {
        return (
          <div className="menu" key={v.id}>
            <span>
              <Link className="subtitle" to={`/itens/${v.id}`}>
                {v.name}
              </Link>
            </span>
          </div>
        );
      })}
    </div>
  );
}
