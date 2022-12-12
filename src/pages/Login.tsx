import { useState } from "react";
import Title from "../components/Title";
import {useForm} from 'react-hook-form'
import Auth from "../components/Auth";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const {register, handleSubmit} = useForm()
    const [display, setDisplay] = useState('erro')
    const navigate = useNavigate()
    const onSubmit = async(data)  => {
        await Auth(data) ? navigate('/') : setDisplay('') 
    }
    return (
        <div>
            <Title/>
            <br />
            <br />
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <input type="text" {...register("user")} size={50} placeholder='Digite seu usuário' />
            <br />
            <input type="password" size={50} placeholder="Digite sua senha" {...register("password")}/>
            <br />
            <br />
            <button type="submit" >Login</button>
            <br />
            <br />
            <br />
            <p className={display}>Usuário ou senha está incorreto</p>
            </form>    
        </div>
    )
}