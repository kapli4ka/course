import HomePage from "../pages/HomePage";
import Posts from "../pages/Posts";
import PageNotFound from "../pages/PageNotFound";
import OpenedPost from "../pages/OpenedPost";
import Login from "../pages/Login";
import {Navigate} from "react-router-dom";


export const privateRoutes =
    [
        {path: '/', element: <HomePage/>},
        {path: '/main', element: <Posts/>},
        {path: '/*', element:  <Navigate to={"/main"}/>},
        {path: '/main/:id', element: <OpenedPost/>},
    ]
export const publicRoutes =
    [
        {path: '/login', element: <Login/>},
        {path: '/*', element: <Navigate to={"/login"}/>}

    ]