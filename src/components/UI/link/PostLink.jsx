import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const PostLink = () => {
    const {setIsAuth} = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.setItem('auth', 'false')
    }
    return (
        <div className={'navbar'}>
            <Link to={'/'} className={'navbar__link'}>Дом</Link>
            <Link to={'/main'} className={'navbar__link'}>Основная</Link>
            <MyButton onClick={logout}>Выйти</MyButton>
        </div>
    );
};

export default PostLink;