import axios from "axios";
import { useState,useEffect } from "react"
import Title from "../components/Title";
 
export default function Categorias(){
   
    const [categorias, setCategorias] = useState<any>([])
    useEffect(() => {
      axios('http://localhost:3000/category').then((res)=>{
        setCategorias(res.data)
     })
      }, []);
      
     
    return (
       <div>
        <Title/>

        <h1 className="menuTitle">Cardápio</h1>
        <p>Clique na categoria desejada para visualizar nossas opções!</p>
        <br /> <br />
        {categorias.map((v)=>{
          return (<div className="menu" key={v.id}> 
          <span >
            <p className="teste">{v.name}</p></span></div>)
})}
       </div>
    ) 
}
