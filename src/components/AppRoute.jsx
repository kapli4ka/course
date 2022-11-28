import React from 'react';
import {Route, Routes, useLinkClickHandler} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Posts from "../pages/Posts";
import PageNotFound from "../pages/PageNotFound";
import OpenedPost from "../pages/OpenedPost";


const AppRoute = () => {

    return (

        <Routes >
            <Route path={'/'} element={<HomePage/>}></Route>
            <Route path={'/main'} element={<Posts/>} ></Route>
            <Route path={'/*'} element={<PageNotFound/>}></Route>
            <Route path={`/main/:id`} element={<OpenedPost/>}></Route>
        </Routes>
    );
};

export default AppRoute;