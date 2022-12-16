import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Title from "../components/Title"

export default function Itens (){
    const {categoryId} = useParams()
    const [itens, setItens] = useState([])
    useEffect(()=>{
        axios(`http://localhost:3000/itens/${categoryId}`).then((res)=>{
          setItens(res.data)
        })
    },[])
    return  (
        <div>
        <Title/>

        <h1 className="menuTitle">Cardápio</h1>
        <p>Clique na categoria desejada para visualizar nossas opções!</p>
        <br /> <br />
        {itens.map((v)=>{
          return (<div className="menuItem" key={v.id}> 
            <div className="headerItens">
            <p className='textItem'>{v.name}</p>
            <p className='priceItem'> R$: {v.price}</p>
            </div>
            <img src='https://picsum.photos/200/300' className="image"/>

           <div className="description">
           <p>{v.description}</p>
           </div>
           </div>)
        })}
       </div>)
}