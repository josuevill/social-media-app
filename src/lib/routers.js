import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Layout from "../components/layout";
import Dashboard from "../components/dashboard";
import Comments from "../components/comments";
import Profile from "../components/profile";
import Users from "../components/users";   

export const ROOT = "/";
export const LOGIN = "/ingresar";
export const REGISTER = "/registrarse";
export const PROTECTED = "/segura";
export const DASHBOARD = "/segura/panel";
export const USERS = "/segura/usuarios";
export const PROFILE = "/segura/perfil/:id";
export const COMMENTS = "/segura/comentarios/:id";

export const router = createBrowserRouter([
    {path: ROOT, element: "Public Root"},
    {path: LOGIN, element: <Login />},
    {path: REGISTER, element: <Register />},
    {
        path: PROTECTED,
        element: <Layout />,
        children: [
            {
                path: DASHBOARD,
                element: <Dashboard />
            },
            {
                path: USERS,
                element: <Users />
            },
            {
                path: PROFILE,
                element: <Profile />
            },
            {
                path: COMMENTS,
                element: <Comments />
            },
        ],
    },
]);