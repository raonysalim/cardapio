import { useContext, useState } from "react";
import Title from "../components/Title";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [display, setDisplay] = useState("erro");
  const { handleLogin } = useContext(Context);
  const onSubmit = async (data) => {
    (await handleLogin(data)) ? navigate("/admin") : setDisplay("");
  };
  return (
    <div>
      <Title />
      <br />
      <br />
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input
          type="text"
          className="inputForm"
          {...register("user")}
          size={50}
          placeholder="Digite seu usuário"
        />
        <br />
        <input
          type="password"
          className="inputForm"
          size={50}
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <br />
        <br />
        <button type="submit">Login</button>
        <br />
        <br />
        <br />
        <p className={display}>Usuário ou senha está incorreto</p>
      </form>
    </div>
  );
}
