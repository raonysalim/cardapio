// import Categorias from './pages/Categorias';
// import Login from './pages/Login';
// import AdminMenu from './pages/AdminMenu';
// import AdminCategory from './pages/AdminCategory';
// import AdminItens from './pages/AdminItens';
// import AdminUser from './pages/AdminUser';
// import EditCategory from './pages/EditCategory';
// import EditItens from './pages/EditItens';
// import CategoryItem from './pages/CategoryItem';
// import Itens from './pages/Itens';
// import HomePage from './pages/HomePage'
// import {
//     createBrowserRouter,
//     RouterProvider,
//     Route,
//     Routes,
//     createRoutesFromElements,
//     useNavigate
//   } from "react-router-dom";
// import { useContext } from 'react';
// import { Context } from './Context/AuthContext';


// function CustomRoute({ isPrivate, ...rest }) {
//     const { loading, authenticated } = useContext(Context);
//     const navigate = useNavigate()
  
//     if (isPrivate && !authenticated) {
//         return  navigate("/login")
//       }
  
//     return <Route {...rest} />;
//   }

// export const router = createBrowserRouter(
//     createRoutesFromElements(
//         <>
//         <Route path='/' element={<HomePage/>}/>
//         <Route path='categorias' element={<Categorias/>}/>
//         <Route path='/admin' element={<AdminMenu/>}/>
//         </>
//       )
// )



// const router = createBrowserRouter([
//     {
//     path:'/',
//     element:<HomePage/>
//     },{
//       path:'/categorias',
//       element:<Categorias/>
//     },{
//       path:'/itens/:categoryId',
//       element:<Itens/>
//     },{
//       path:'/admin/login',
//       element:<Login/>
//     },{
//       path:'/admin',
//       element:<AdminMenu/>
//     },{
//       path:'/admin/category',
//       element:<AdminCategory/>
//     },{
//       path:'/admin/itens',
//       element:<CategoryItem/>
//     },{
//       path:'/admin/itens/:categoryId',
//       element:<AdminItens/>
//     },{
//       path:'/admin/edit/itens',
//       element:<EditItens/>
//     },{
//       path:'/admin/edit/itens/:id',
//       element:<EditItens/>
//     },{
//       path:'/admin/user',
//       element:<AdminUser/>
//     },{
//       path:'/admin/user',
//       element:<AdminUser/>
//     },{
//       path:'/admin/edit/category/:id',
//       element:<EditCategory/>
//     },{
//       path:'/admin/edit/category',
//       element:<EditCategory/>
//     }
  
//   ])