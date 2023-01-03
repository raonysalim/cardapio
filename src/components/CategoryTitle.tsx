import { Link } from "react-router-dom";

export default function CategoryTitle() {
  return (
    <>
      <Link to={"/categorias"} className="menuTitle">
        Cardápio
      </Link>
      <p>Clique na categoria desejada para visualizar nossas opções!</p>
    </>
  );
}
