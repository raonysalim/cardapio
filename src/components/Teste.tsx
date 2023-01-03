import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import EditMenu from "./EditMenu";
import Title from "./Title";

export default function Teste() {
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
