import { Link } from "react-router-dom";
import Title from "../components/Title";
import Whatsapp from "../components/Whatsapp";

function App() {
  return (
    <div>
      <Title />
      <div className="categoryTitle">
        <Link to={"/categorias"} className="content">
          Clique aqui para acessar nosso cardápio
        </Link>
      </div>
      <Whatsapp />
    </div>
  );
}

export default App;
