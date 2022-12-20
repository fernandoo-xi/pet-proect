import React, {FC, useEffect, useState} from 'react';
import {useMutation, useQuery} from "@apollo/client";
import {GET_ONE_USER} from "../../query/user";


const SignIn: FC = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const {data, loading} = useQuery(GET_ONE_USER, {
        variables: {
            login: login
        }
    })

    console.log(data);


    return (
        <form>
            <input value={login} type={"text"} onChange={(e) => setLogin(e.target.value)} />
            <input value={password} type={"text"} onChange={(e) => setPassword(e.target.value)} />
            <button>Войти</button>
        </form>
    );
}

export default SignIn;