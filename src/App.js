import React, {useEffect, useState} from "react";
import './styles/App.css'
import {BrowserRouter, HashRouter, Link, Route, Router, Routes} from "react-router-dom";
import Posts from "./pages/Posts";
import HomePage from "./pages/HomePage";


function App() {
    return (
        <BrowserRouter>
            <div className={'navbar'}>
                <Link to={'/home'} className={'navbar__link'}>Дом   </Link>

                <Link to={'/main'} className={'navbar__link'}>Основная</Link>
            </div>

            <Routes>
                <Route path={'/home'} element={<HomePage/>}></Route>
                <Route path={'/main'} element={<Posts/>} ></Route>
            </Routes>


            {/*<Link to={'/home'}><div>Home</div></Link>*/}



        </BrowserRouter>

    )

}

export default App;