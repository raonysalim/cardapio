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

const router = createBrowserRouter([
  {
  path:'/',
  element:<HomePage/>
  },{
    path:'/categorias',
    element:<Categorias/>
  }

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
)
