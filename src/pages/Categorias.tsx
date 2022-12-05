import { useState,useEffect } from "react"
import HomePage from "./HomePage";
import Title from "../components/Title";
 
export default function Categorias(){
   
    const [categorias, setCategorias] = useState<any>([])
    useEffect(() => {
    fetch('http://localhost:3000/category').then((res)=>res.json()).then((data)=>{
       setCategorias(data)
       categorias.forEach((v,i)=>{
        console.log(v) 
       })
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


const exemplo = [0,1,2,3]

exemplo.forEach((v)=>{
  console.log(v)
})