import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryTitle from "../components/CategoryTitle";
import Title from "../components/Title";

export default function Itens() {
  const { categoryId } = useParams();
  const [itens, setItens] = useState([]);
  useEffect(() => {
    axios(`http://localhost:3000/itens/${categoryId}`).then((res) => {
      setItens(res.data);
    });
  }, []);
  return (
    <div>
      <Title />
      <CategoryTitle />
      <br /> <br />
      {itens.map((v) => {
        return (
          <div className="menuItem" key={v.id}>
            <div className="headerItens">
              <p className="textItem">{v.name}</p>
              <p className="priceItem"> R$: {v.price}</p>
            </div>
            {v.image ? <img src={v.image_url} className="image" /> : null}
            <div>
              <p className="description">{v.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
