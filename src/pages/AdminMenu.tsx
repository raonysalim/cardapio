import Title from "../components/Title";
import Modal from 'react-modal'
import { useState } from "react";
import EditMenu from "../components/EditMenu";

Modal.setAppElement('#root');

export default function AdminMenu(){
  
    return (
        <div>
            <Title/>
            <EditMenu/>
        </div>
    )
}   