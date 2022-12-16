import Title from "../components/Title";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { AiFillCheckCircle, AiFillCloseSquare } from "react-icons/ai";
import IsAuth from "../components/IsAuth";
import Erro from "./Erro";

export default function EditItens() {
  if (!IsAuth()) {
    return <Erro />;
  }

  const navigate = useNavigate();
  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const { id } = useParams();
  const namePlaceholder = query.get("name");
  const descriptionPlaceholder = query.get("description");
  const pricePlaceholder = query.get("price");
  const categoryPlaceholder = Number(query.get("category"));
  const imagePlaceholder = query.get("image");

  const { register, handleSubmit } = useForm();

  const priceConvert = (price: string) => {
    return String((price = Number(price.replace(",", ".")).toFixed(2))).replace(
      ".",
      ","
    );
  };
  const onSubmit = ({ name, description, price, categoryId, image }) => {
    if (id) {
      axios(`http://localhost:3000/itens/${id}`, {
        method: "put",
        data: {
          name,
          description,
          price: priceConvert(price),
          categoryId: Number(categoryId),
          image,
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then(() => {
          navigate(`/admin/itens/${id}`);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      axios("http://localhost:3000/itens", {
        method: "post",
        data: {
          name,
          description,
          price,
          categoryId: Number(categoryId),
          image,
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((res) => {
          navigate(`/admin/itens/${res.data.categoryId}`);
        })
        .catch((e) => console.log(e));
    }
  };

  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/category").then((res) =>
      setCategory(res.data)
    );
  }, []);
  return (
    <div>
      <Title />
      <br />
      <br />
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label className="formLabel">Nome do Item</label>
        <input
          className="inputForm"
          type="text"
          {...register("name")}
          defaultValue={namePlaceholder}
        />
        <label className="formLabel">Descrição</label>
        <input
          className="inputForm"
          type="text"
          {...register("description")}
          defaultValue={descriptionPlaceholder}
        />
        <label className="formLabel">Preço</label>
        <input
          className="inputForm"
          type="text"
          {...register("price")}
          defaultValue={pricePlaceholder}
        />
        <label className="formLabel">Categoria</label>
        <select className="formLabel" {...register("categoryId")}>
          <option value={null}>Escolha uma categoria</option>
          {category.map((v) => (
            <option value={v.id}>{v.name}</option>
          ))}
        </select>
        <br />
        <div className="imageBtn">
          <label className="formLabel">Foto</label>
          <button
            className="inputForm imageInput"
            type="submit"
            {...register("image")}
          >
            {imagePlaceholder.length > 0 ? (
              <AiFillCheckCircle />
            ) : (
              <AiFillCloseSquare />
            )}
          </button>
        </div>
        <p className={imagePlaceholder != null ? "hidden" : null}>
          Seu item ainda não possui uma imagem
        </p>
        <br />
        <br />
        <button type="submit" className="inputForm">
          Enviar
        </button>
      </form>
    </div>
  );
}
