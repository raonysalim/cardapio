// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// export default async function AuthLogin({user, password}){
//     const [authenticated, setAuthenticated] = useState(false);
//     try{
//         const res = await axios.post("http://localhost:3000/admin/login",{
//             user,
//             password
//          })
//          localStorage.setItem('token', res.data.token)
//          localStorage.setItem('id', res.data.id)
//          console.log(res)
//         return true
//     }catch(err){

//     }
// }