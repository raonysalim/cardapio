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
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
  
    function closeModal() {
      setIsOpen(false);
    }

    const [id, setId] = useState()
    const [name, setName] = useState()
    
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
          <span  className="selectCategory">
            <p>{v.name}</p>
            <button className="btnEdit" onClick={()=>{
                navigate(`/admin/edit/category/${v.id}?name=${v.name}`)
                }}><AiFillEdit size={25}/></button>
            <button className="btnEdit" onClick={()=>{
                openModal()
                setId(v.id)
                setName(v.name)
                }}><AiFillDelete size={25}/></button>
            </span></div>)
})}
        <br />
        <br />
        <br />
        <Link to={'/admin/edit/category'} className='subtitle'>Nova Categoria</Link>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className='modal'
        overlayClassName='overlay'
        ><h1>Deseja excluir {name}?</h1>
        <br />
        <button onClick={()=>{DeleteCategory(id)}}>Sim</button>
        <button onClick={closeModal}>Não</button>
        </Modal>
        </div>
    )
}