import axios from "axios";
import { useNavigate } from "react-router-dom";
export default async function Auth({user, password}){
    try{
        const res = await axios.post("http://localhost:3000/admin/login",{
            user,
            password
         })
         localStorage.setItem('token', res.data.token)
        return 'token gerado com sucesso!'
    }catch(err){

    }
}