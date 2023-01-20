import { Link } from "react-router-dom";
import Whatsapp from "./Whatsapp";

export default function CategoryTitle({ msg }) {
  return (
    <div>
      <div className="categoryTitle">
        <Link to={"/categorias"} className="contentSubtitle">
          Cardápio
        </Link>
        <p>{msg}</p>
      </div>
      <Whatsapp />
    </div>
  );
}
