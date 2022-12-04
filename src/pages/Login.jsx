import React from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const Login = () => {
    return (
        <div>
            <form>
                <h1>Логин</h1>
                <MyInput type={'text'} placeholder={'Логин'} />
                <MyInput type={'password'} placeholder={'Пароль'} />
                <MyButton>Вход</MyButton>
            </form>

        </div>
    );
};

export default Login;