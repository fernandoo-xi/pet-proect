import React, { useState, FC } from 'react';

import { useMutation } from "@apollo/client";

import { CREATE_USER } from "../../mutations/user";
import {Navigate, useNavigate} from "react-router-dom";

const SignUp: FC = () => {

    const navigate = useNavigate();
    const [isReadonly, setIsReadonly] = useState(true);

    const [newUser] = useMutation(CREATE_USER)

    const [username, setUsername] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const addUser = (e:any) => {
        e.preventDefault()
        newUser({
            variables: {
                input: {
                    username, login, password
                }
            }
        }).then(({data}) => {
            setUsername('');
            setLogin('');
            setPassword('');
            navigate("/calendar");
        })
    }

    const toSignIn = () => {
        navigate("/sign-in");
    }

    return (
        <div className={'sign-back'}>
            <div className={'login'}>
                <h2
                    className={"nonactive form-header"}
                    onClick={() => toSignIn()}
                >
                    Войти
                </h2>
                <h2 className={"active form-header"}>Регистрация</h2>
              <form className={'sign-form'}>
                  <input value={username}
                         className={'text'}
                         type={"text"}
                         onChange={(e) => setUsername(e.target.value)}
                         required
                         readOnly={isReadonly}
                         onFocus={() => setIsReadonly(false)}
                  />
                  <span className={'input-header'}>Имя</span>
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
                      className={'signin'}
                      onClick={(e) => addUser(e)}
                  >
                      Создать
                  </button>

              </form>
            </div>
        </div>
    );
};

export default SignUp;