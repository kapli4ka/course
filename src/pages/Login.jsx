import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const { setIsAuth} = useContext(AuthContext)
    return (
        <div>
            <form onSubmit={e => setIsAuth(true)}>
                <h1>Логин</h1>
                <MyInput type={'text'} placeholder={'Логин'} />
                <MyInput type={'password'} placeholder={'Пароль'} />
                <MyButton>Вход</MyButton>
            </form>

        </div>
    );
};

export default Login;