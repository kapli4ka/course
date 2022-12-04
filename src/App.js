import React, {useEffect, useState} from "react";
import './styles/App.css'
import {BrowserRouter } from "react-router-dom";
import PostLink from "./components/UI/link/PostLink";
import AppRoute from "./components/AppRoute";
import {AuthContext} from "./context";


function App() {
    const [isAuth, setIsAuth] = useState(false)//состояние аутентификации
    const [isLoading, setIsLoading] = useState(true)//состояние загрузки

    useEffect(()=> {
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }
        setIsLoading(false)
    },[])
    return (
        <AuthContext.Provider value={
            {
                isAuth,
                setIsAuth,
                isLoading,
                setIsLoading,
            }

        }
        >
            <BrowserRouter>
                <PostLink/>     {/*Линки на страницы*/}
                <AppRoute/>     {/*Роутинг между страницами*/}
            </BrowserRouter>
        </AuthContext.Provider>


    )

}

export default App;