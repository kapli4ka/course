import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routing/paths"


const AppRoute = () => {
    const auth = false;
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
            {auth
                ? privateRoute
                : publicRoute
            }
        </Routes>
    );
};

export default AppRoute;