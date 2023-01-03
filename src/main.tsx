import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categorias from "./pages/Categorias";
import Login from "./pages/Login";
import AdminMenu from "./pages/AdminMenu";
import AdminCategory from "./pages/AdminCategory";
import AdminItens from "./pages/AdminItens";
import AdminUser from "./pages/AdminUser";
import EditCategory from "./pages/EditCategory";
import EditItens from "./pages/EditItens";
import CategoryItem from "./pages/CategoryItem";
import Itens from "./pages/Itens";
import { AuthProvider } from "./Context/AuthContext";
import Erro from "./pages/Erro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/categorias",
    element: <Categorias />,
  },
  {
    path: "/itens/:categoryId",
    element: <Itens />,
  },
  {
    path: "/admin/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminMenu />,
  },
  {
    path: "/admin/category",
    element: <AdminCategory />,
  },
  {
    path: "/admin/itens",
    element: <CategoryItem />,
  },
  {
    path: "/admin/itens/:categoryId",
    element: <AdminItens />,
  },
  {
    path: "/admin/edit/itens",
    element: <EditItens />,
  },
  {
    path: "/admin/edit/itens/:id",
    element: <EditItens />,
  },
  {
    path: "/admin/user",
    element: <AdminUser />,
  },
  {
    path: "/admin/user",
    element: <AdminUser />,
  },
  {
    path: "/admin/edit/category/:id",
    element: <EditCategory />,
  },
  {
    path: "/admin/edit/category",
    element: <EditCategory />,
  },
  {
    path: "/*",
    element: <Erro />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
