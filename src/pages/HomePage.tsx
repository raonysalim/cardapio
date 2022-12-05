import { Link } from "react-router-dom"
import Title from "../components/Title"

function App() {
  return (
   <div>
      <Title/>
      <Link to={'/categorias'} className='subtitle'>Clique aqui para acessar nosso cardápio</Link>
   </div>
  )
}

export default App
