import axios from "axios";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import IsAuth from "../components/IsAuth";
import Title from "../components/Title";
import Erro from "./Erro";

export default function EditCategory() {
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
  const { register, handleSubmit } = useForm();
  const onSubmit = ({ name }) => {
    if (id) {
      axios(`http://localhost:3000/category/${id}`, {
        method: "put",
        data: {
          name,
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then(() => {
          navigate("/admin/category");
        })
        .catch((e) => {});
    } else {
      axios(`http://localhost:3000/category`, {
        method: "post",
        data: {
          name,
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then(() => {
          navigate("/admin/category");
        })
        .catch((e) => {});
    }
  };
  return (
    <div>
      <Title />
      <br />
      <br />
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input
          type="text"
          {...register("name")}
          size={50}
          defaultValue={namePlaceholder}
        />
        <br />
        <br />
        <button type="submit">Salvar</button>
        <br />
      </form>
    </div>
  );
}
