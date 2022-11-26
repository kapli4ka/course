import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Posts from "../pages/Posts";
import PageNotFound from "../pages/PageNotFound";

const AppRoute = () => {
    return (
        <Routes >
            <Route path={'/'} element={<HomePage/>}></Route>
            <Route path={'/main'} element={<Posts/>} ></Route>
            <Route path={'*'} element={<PageNotFound/>}></Route>
        </Routes>
    );
};

export default AppRoute;