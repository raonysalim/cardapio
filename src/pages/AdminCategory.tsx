import axios from "axios";
import { useEffect, useState } from "react";
import EditMenu from "../components/EditMenu";
import Title from "../components/Title";
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import Modal from 'react-modal'
import DeleteCategory from "../components/DeleteCategory";
Modal.setAppElement('#root');

export default function AdminCategory(){
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
          <div className="menu" key={v.id}> 
          <span  className="selectCategory">
            <p>{v.name}</p> 
            <button className="btnEdit" onClick={()=>{
                openModal()
                setId(v.id)
                setName(v.name)
                console.log(id, name)
                }}><AiFillDelete size={25}/></button>
            </span></div>)
})}

        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className='modal'
        overlayClassName='overlay'
        ><h1>Deseja excluir {name}?</h1>
        <button onClick={()=>{DeleteCategory(id)}}>Sim</button>
        <button onClick={closeModal}>Não</button>
        </Modal>
        </div>
    )
}