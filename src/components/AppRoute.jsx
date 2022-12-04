import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routing/paths"
import {AuthContext} from "../context";


const AppRoute = () => {

    const {isAuth} = useContext(AuthContext)

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