import React, {FC, useMemo, useState} from 'react';
import { useQuery } from "@apollo/client";
import {GET_USER} from "../../query/user";
import {useNavigate} from "react-router-dom";

import "./sign-in.css";

const SignIn: FC = () => {



    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [notUser, setNotUser] = useState(false)

    const navigate = useNavigate();
    const [isReadonly, setIsReadonly] = useState(true);

    const {data, loading} = useQuery(GET_USER, {
        variables: {
            login: login
        }
    })

    const checkData = (e:any) => {
        e.preventDefault();
        if (data.getUser != null  && data.getUser.password == password) {
            localStorage.setItem('user', login);
            navigate("/calendar");
        } else {
            setNotUser(true);
            setPassword('');
        }
    }

    const toSignUp = () => {
        navigate("/sign-up");
    }

    return (
        <div className={'sign-back'}>
        <div className={'login'}>
            <h2 className={"active form-header"}>Войти</h2>
            <h2
                className={"nonactive form-header"}
                onClick={() => toSignUp()}
            >
                Регистрация
            </h2>
            <form className={'sign-form'}>
                <input value={login}
                       placeholder={'Email'}
                       className={'text'}
                       type={"text"}
                       onChange={(e) => setLogin(e.target.value)}
                       required
                       readOnly={isReadonly}
                       onFocus={() => setIsReadonly(false)}
                />
                    <span className={'input-header hidden'}>Email</span>

                <input value={password}
                       placeholder={'Пароль'}
                       className={'text'}
                       type={"password"}
                       onChange={(e) => setPassword(e.target.value)}
                       required
                       readOnly={isReadonly}
                       onFocus={() => setIsReadonly(false)}
                />
                    <span className={'input-header hidden'}>Пароль</span>

                <button
                    onClick={(e) => checkData(e)}
                    className={'signin'}
                >
                    Войти
                </button>
            </form>
            {notUser && <div className={'sign-in-error'}>Вы ввели неправильный логин или пароль</div>}
        </div>
        </div>
    );
}

export default SignIn;