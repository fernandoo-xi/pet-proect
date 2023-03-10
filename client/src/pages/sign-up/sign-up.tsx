import React, {useState, FC, useEffect} from 'react';

import {useMutation, useQuery} from "@apollo/client";

import { CREATE_USER } from "../../mutations/user";
import {Navigate, useNavigate} from "react-router-dom";
import {GET_USER, GET_USER_NAME} from "../../query/user";

const SignUp: FC = () => {

    const navigate = useNavigate();
    const [isReadonly, setIsReadonly] = useState(true);

    const [newUser] = useMutation(CREATE_USER)

    const [username, setUsername] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const [isEmpty, setIsEmpty] = useState(true);
    const [isError, setIsError] = useState(false);
    const [minPasswordLength, setMinPasswordLength] = useState(false);
    const [isName, setIsName] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [onName, setOnName] = useState(false);
    const [onLogin, setOnLogin] = useState(false);
    const [onPassword, setOnPassword] = useState(false);

    const {data, loading} = useQuery(GET_USER_NAME, {
            variables: {
                username: username
            }
    });

    const {data: loginData} = useQuery(GET_USER, {
        variables: {
            login: login
        }
    });

    useEffect( () => {
        if(data) {
            if (data.getUserName) {
                setIsName(true);
            }
        }
        return () => {
            setIsName(false);
        };
    });

    useEffect( () => {
        if(loginData) {
            if (loginData.getUser) {
                setIsLogin(true);
            }
        }
        return () => {
            setIsLogin(false);
        };
    });

    useEffect( () => {
        if (username.length > 1 && login.length > 1 && password.length > 1) {
            setIsEmpty(false);
        }

        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        re.test(String(login).toLowerCase()) ? setEmailError(false) : setEmailError(true);
        if (emailError) {
            setIsError(true);
        }

        if (password.length < 8) {
            setMinPasswordLength(true);
            setIsError(true);
        }

        return () => {
            setIsEmpty(true);
            setMinPasswordLength(false);
            setIsError(false);
        };
    });

    const addUser = (e:any) => {
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
            localStorage.setItem('user', login);
            navigate("/calendar");
        });
    };

    const toSignIn = () => {
        navigate("/sign-in");
    };

    const checkForm = (e:any) => {
        e.preventDefault();
        if (minPasswordLength) {
            setOnPassword(true);
        }
        if (emailError) {
            setOnLogin(true);
        }
        if (isEmpty) {
            setOnName(true);
        }
        if (!isError) {
            addUser(e);
        }
    }

    return (
        <div className={'sign-back'}>
            <div className={'login'}>
                <h2
                    className={"nonactive form-header"}
                    onClick={() => toSignIn()}
                >
                    ??????????
                </h2>
                <h2 className={"active form-header"}>??????????????????????</h2>
              <form className={'sign-form'}>

                  <input value={username}
                         placeholder={'??????'}
                         className={'text'}
                         type={"text"}
                         onChange={(e) => {
                             setUsername(e.target.value)
                         }}
                         required
                         readOnly={isReadonly}
                         onFocus={() => setIsReadonly(false)}
                  />
                  <span className={'input-header hidden'}>??????</span>
                  {isName && <div className={'error-message'}>?????????? ?????? ?????? ????????????????????</div>}
                  {isEmpty && onName && <div className={'error-message'}>???????????? ????????</div>}

                  <input value={login}
                         placeholder={'Email'}
                         className={'text'}
                         type={"text"}
                         onChange={(e) => {
                             setLogin(e.target.value)

                         }}
                         required
                         readOnly={isReadonly}
                         onFocus={() => {
                             setIsReadonly(false)
                         }}
                  />
                  <span className={'input-header hidden'}>Email</span>
                  {isLogin && <div className={'error-message'}>?????????? email ?????? ????????????????????</div>}
                  {emailError && isError && onLogin && <div className={'error-message'}>???? ???????????????? email</div>}

                  <input value={password}
                         placeholder={'????????????'}
                         className={'text'}
                         type={"password"}
                         onChange={(e) => {
                             setPassword(e.target.value);

                         }}
                         required
                         readOnly={isReadonly}
                         onFocus={() => setIsReadonly(false)}
                  />
                  <span className={'input-header hidden'}>????????????</span>
                  {minPasswordLength && isError && onPassword && <div className={'error-message'}>?????????????? 8 ????????????????</div>}
                  <button
                      className={'signin'}
                      onClick={(e) => checkForm(e)}
                  >
                      ????????????????????????????????????
                  </button>

              </form>
            </div>
        </div>
    );
};

export default SignUp;