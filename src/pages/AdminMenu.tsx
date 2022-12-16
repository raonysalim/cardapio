import Title from "../components/Title";
import Modal from "react-modal";
import { useContext, useEffect, useState } from "react";
import EditMenu from "../components/EditMenu";
import IsAuth from "../components/IsAuth";
import { useNavigate } from "react-router-dom";
import Erro from "./Erro";
import { Context } from "../Context/AuthContext";

Modal.setAppElement("#root");
export default function AdminMenu() {
  if (!IsAuth()) {
    return <Erro />;
  }
  return (
    <div>
      <Title />
      <EditMenu />
    </div>
  );
}
