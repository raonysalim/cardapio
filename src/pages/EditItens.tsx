import Title from "../components/Title";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
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
  const categoryPlaceholder = query.get("category");
  const { register, handleSubmit } = useForm();

  const priceConvert = (price: string) => {
    return String((price = Number(price.replace(",", ".")).toFixed(2)));
  };

  const onSubmit = async ({ name, description, price, categoryId, image }) => {
    if (id) {
      if (categoryId == 0) categoryId = categoryPlaceholder;
      axios(`http://localhost:3000/itens/${id}`, {
        method: "put",
        data: {
          name,
          description,
          price: priceConvert(price),
          categoryId: Number(categoryId),
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then(() => {
          const formData = new FormData();
          formData.append("image", image[0]);
          if (image.length != 1) return navigate(`/admin/itens`);
          axios
            .post(`http://localhost:3000/itens/image/${id}`, formData, {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            })
            .then((e) => {})
            .catch((e) => {});
          navigate(`/admin/itens`);
        })
        .catch((e) => {});
    } else {
      axios("http://localhost:3000/itens", {
        method: "post",
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
        .then((res) => {
          const formData = new FormData();
          formData.append("image", image[0]);
          if (image.length != 1) return navigate(`/admin/itens`);
          axios
            .post(
              `http://localhost:3000/itens/image/${res.data.id}`,
              formData,
              {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              }
            )
            .then((e) => {})
            .catch((e) => {});
          navigate(`/admin/itens`);
        })
        .catch((e) => {});
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
        <label>Nome do Item</label>
        <input
          className="inputItem"
          type="text"
          {...register("name")}
          defaultValue={namePlaceholder}
        />
        <label>Descrição</label>
        <input
          className="inputItem"
          type="text"
          {...register("description")}
          defaultValue={descriptionPlaceholder}
        />
        <label>Preço</label>
        <input
          className="inputItem"
          type="number"
          {...register("price")}
          defaultValue={pricePlaceholder}
        />
        <label className="formLabel">Categoria</label>
        <select className="selectForm" {...register("categoryId")}>
          <option value={0}>Nenhuma Categoria</option>
          {category.map((v) => (
            <option key={v.id} value={v.id}>
              {v.name}
            </option>
          ))}
        </select>
        <div>
          <div className="imageBtn">
            <label className="formLabel">Foto</label>
            <br />
            <input
              type="file"
              {...register("image")}
              className={"imageInput"}
            />
          </div>
          <br />
          <br />
        </div>
        <br />
        <button type="submit" className="inputForm">
          Salvar!
        </button>
      </form>
    </div>
  );
}
