import { Link } from "react-router-dom";

export default function EditMenu(){
    return(
        <div className="editMenu">
            <Link to={'/admin/category'} className='subtitle'>Categorias</Link>
            <br />
            <Link to={'/admin/itens'} className='subtitle'>Itens</Link>
            <br />
            <Link to={'/admin/user'} className='subtitle'>Perfil</Link>
        </div>
    )
}