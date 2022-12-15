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
          return (<div className="menu" key={v.id}> 
          <span >
            <div className="headerItens">
            <p className='textItem'>{v.name}</p>
            <p className='priceItem'>{v.price}</p>
            </div>
           <h3>imagemmmmmmmmmmm </h3>
           <p className="descriptionItem">{v.description}</p>
            </span></div>)
        })}
       </div>)
}