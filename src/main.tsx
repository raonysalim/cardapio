import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage'
import './styles.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Categorias from './pages/Categorias';
import Login from './pages/Login';
import AdminMenu from './pages/AdminMenu';
import AdminCategory from './pages/AdminCategory';
import AdminItens from './pages/AdminItens';
import AdminUser from './pages/AdminUser';

const router = createBrowserRouter([
  {
  path:'/',
  element:<HomePage/>
  },{
    path:'/categorias',
    element:<Categorias/>
  },{
    path:'/admin/login',
    element:<Login/>
  },{
    path:'/admin',
    element:<AdminMenu/>
  },{
    path:'/admin/category',
    element:<AdminCategory/>
  },{
    path:'/admin/itens',
    element:<AdminItens/>
  },{
    path:'/admin/user',
    element:<AdminUser/>
  }

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
)
