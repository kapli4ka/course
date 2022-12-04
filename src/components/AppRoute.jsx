import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routing/paths"
import {AuthContext} from "../context";
import Loading from "./UI/loading/loading";


const AppRoute = () => {

    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading){
        return <Loading/>
    }


    const privateRoute = privateRoutes.map(({path, element}, key) =>
        <Route
            path={path}
            element={element}
            key={key}
        />);
    const publicRoute = publicRoutes.map(({path, element}, key) =>
        <Route
            path={path}
            element={element}
            key={key}
        />);
    return (
        <Routes >
            {isAuth
                ? privateRoute
                : publicRoute
            }
        </Routes>
    );
};

export default AppRoute;