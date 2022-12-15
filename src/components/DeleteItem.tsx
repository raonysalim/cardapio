import axios from "axios";

export default function DeleteItem(id){
 
    axios(`http://localhost:3000/itens/${id}`,{
        method:'delete',
        headers:{
            Authorization:'Bearer ' + localStorage.getItem('token')
        }
    }).then(()=>{
        window.location.reload()
    }).catch((e) => {})
}