import React, {useEffect, useState} from "react";
import './styles/App.css'
import {BrowserRouter, HashRouter, Link, Route, Router, Routes, } from "react-router-dom";
import PostLink from "./components/UI/link/PostLink";
import AppRoute from "./components/AppRoute";
import posts from "./pages/Posts";


function App() {
    return (
        <BrowserRouter>
            <PostLink/>     {/*Линки на страницы*/}
            <AppRoute/>     {/*Роутинг между страницами*/}
        </BrowserRouter>

    )

}

export default App;