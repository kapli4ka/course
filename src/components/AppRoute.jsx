import React from 'react';
import {Route, Routes, useLinkClickHandler} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Posts from "../pages/Posts";
import PageNotFound from "../pages/PageNotFound";
import OpenedPost from "../pages/OpenedPost";
import {routes} from "../routing/paths"


const AppRoute = () => {
    const myRoute = routes.map(({path, element}, key) => <Route path={path} element={element} key={key}/>);
    return (
        <Routes >
            {myRoute}
        </Routes>
    );
};

export default AppRoute;