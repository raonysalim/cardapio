import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/AuthContext";

export default function IsAuth() {
  const { auth } = useContext(Context);
  if (auth) return true;
  return false;
}
