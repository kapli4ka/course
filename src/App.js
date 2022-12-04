import React, {useEffect, useState} from "react";
import './styles/App.css'
import {BrowserRouter, HashRouter, Link, Route, Router, Routes, } from "react-router-dom";
import PostLink from "./components/UI/link/PostLink";
import AppRoute from "./components/AppRoute";
import posts from "./pages/Posts";
import {AuthContext} from "./context";


function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

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