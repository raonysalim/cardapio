import EditMenu from "../components/EditMenu";
import Title from "../components/Title";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../Context/AuthContext";
import IsAuth from "../components/IsAuth";
import Erro from "./Erro";

export default function AdminUser() {
  if (!IsAuth()) {
    return <Erro />;
  }

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = ({ user, password }) => {
    axios(`http://localhost:3000/admin/${localStorage.getItem("id")}`, {
      method: "put",
      data: {
        user,
        password,
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <Title />
      <EditMenu />
      <br />
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label className="formLabel">Usuário</label>
        <input type="text" className="inputForm" {...register("user")} />
        <label className="formLabel">Senha</label>
        <input
          type="password"
          className="inputForm"
          {...register("password")}
        />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}
