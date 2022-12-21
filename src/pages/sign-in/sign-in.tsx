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
        if (data.getUser != null) {
            navigate("/calendar");
        } else {
            setNotUser(true);
            setLogin('');
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
                       className={'text'}
                       type={"text"}
                       onChange={(e) => setLogin(e.target.value)}
                       required
                       readOnly={isReadonly}
                       onFocus={() => setIsReadonly(false)}
                />
                    <span className={'input-header'}>Email</span>

                <input value={password}
                       className={'text'}
                       type={"password"}
                       onChange={(e) => setPassword(e.target.value)}
                       required
                       readOnly={isReadonly}
                       onFocus={() => setIsReadonly(false)}
                />
                    <span className={'input-header'}>Пароль</span>

                <button
                    onClick={(e) => checkData(e)}
                    className={'signin'}
                >
                    Войти
                </button>
            </form>
            {notUser && <p>Вы ввели неправильный логин или пароль</p>}
        </div>
        </div>
    );
}

export default SignIn;