import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/AuthContext";

export default function Title() {
  const { handleLogout } = useContext(Context);
  return (
    <div>
      <Link className="title" to={"/"}>
        Oficina Rooftop
      </Link>
    </div>
  );
}
