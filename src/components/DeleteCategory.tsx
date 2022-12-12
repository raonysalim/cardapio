import axios from "axios";
import { useState } from "react";
import Modal from 'react-modal'

export default function DeleteCategory(id){
 
    axios(`http://localhost:3000/category/${id}`,{
        method:'delete',
        headers:{
            Authorization:'Bearer ' + localStorage.getItem('token')
        }
    }).then(()=>{
        window.location.reload()
    }).catch((e) => {})
}