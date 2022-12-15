import axios from "axios";
import { useEffect, useState } from "react";
import EditMenu from "../components/EditMenu";
import Title from "../components/Title";
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import Modal from 'react-modal'
import DeleteCategory from "../components/DeleteCategory";
import { Link, useNavigate } from "react-router-dom";
Modal.setAppElement('#root');

export default function AdminCategory(){
    const navigate = useNavigate()
    
    const [id, setId] = useState()
    
    const [categorias, setCategorias] = useState<any>([])
    useEffect(() => {
      axios('http://localhost:3000/category').then((res)=>{
        setCategorias(res.data)
     })
      }, []);
    return (
        <div>
          <Title/>
          <EditMenu/>
          {categorias.map((v)=>{
          return (
          <div key={v.id}> 
          <span>
            <Link to={`/admin/itens/${v.id}`}   className="subtitle">{v.name}</Link>
            </span></div>)
})}
        <br />
        <br />
        <br />
        <Link to={'/admin/edit/itens'} className='subtitle'>Novo item</Link>
        </div>
        )

}