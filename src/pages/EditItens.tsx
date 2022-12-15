import Title from "../components/Title";
import {useForm} from 'react-hook-form'
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { AiFillCheckCircle, AiFillCloseSquare } from "react-icons/ai";

export default function EditItens(){
    const navigate = useNavigate()
    function useQuery() {
        const { search } = useLocation();
      
        return useMemo(() => new URLSearchParams(search), [search]);
      }

    const query = useQuery()
    const {id} = useParams()
    const namePlaceholder = query.get('name')
    const descriptionPlaceholder = query.get('description')
    const pricePlaceholder = query.get('price')
    const categoryPlaceholder = query.get('category')
    const imagePlaceholder = query.get('image')


    const {register, handleSubmit} = useForm()

    const onSubmit = ({name,description,price,categoryId,image}) => {
        if (id){
        axios(`http://localhost:3000/itens/${id}`,{
            method:'put',
            data:{
                name,
                description,
                price,
                image
            },
            headers:{
                Authorization:'Bearer ' + localStorage.getItem('token')
            }
        }).then(()=>{
            navigate(`/admin/itens/${id}`)
        }).catch(e => {})
        }else{
            axios('http://localhost:3000/itens',{
                method:'post',
                data:{
                    name,
                    description,
                    price,
                    categoryId,
                    image 
                },
                headers:{
                    Authorization:'Bearer ' + localStorage.getItem('token')
                }
            }).then((res)=>{
                navigate(`/admin/itens/${res.data.categoryId}`)
            }).catch(e => console.log(e))
        }  
    }

    const [category, setCategory] = useState([])

    useEffect(()=>{
        axios('http://localhost:3000/category').then(res => setCategory(res.data))
    },[])
    return(
        <div>
            <Title/>
            <br />
            <br />
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <label  className="formLabel">Nome do Item</label>
                <input className="inputForm" type="text" {...register('name')} placeholder={namePlaceholder ? namePlaceholder : ''}/>
                <label  className="formLabel">Descrição</label>
                <input className="inputForm" type="text" {...register('description')} placeholder={descriptionPlaceholder ? descriptionPlaceholder : ''}/>
                <label  className="formLabel">Preço</label>
                <input className="inputForm" type="text" {...register('price')} placeholder={pricePlaceholder ? pricePlaceholder : ''}/>
                <label  className="formLabel" >Categoria</label>
                <select className="formLabel" {...register('categoryId')}  required value={categoryPlaceholder}
                //  onChange={(e)=>{
                //     console.log(e)
                // }}
                >
                    {category.map((v)=>(
                            <option value={v.id}>{v.name}</option>
                    ))}
                </select>
                <br />
                <div className="imageBtn">
                <label className="formLabel">Foto</label>
                <button className="inputForm imageInput" type="submit" {...register('image')} >{imagePlaceholder != null? <AiFillCheckCircle/>: <AiFillCloseSquare/>}</button>
                </div>
                <p className={imagePlaceholder != null ? 'hidden' : null} >Seu item ainda não possui uma imagem</p>
                <br />
                <br />
                <button type="submit" className="inputForm">Enviar</button>
            </form>
        </div>
    )
}