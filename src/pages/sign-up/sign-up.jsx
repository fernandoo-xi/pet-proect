import React, { useState } from 'react';

import { useMutation } from "@apollo/client";

import { CREATE_USER } from "../../mutations/user";

const SignUp = () => {

    const [newUser] = useMutation(CREATE_USER)

    const [username, setUsername] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const addUser = (e) => {
        e.preventDefault()
        newUser({
            variables: {
                input: {
                    username, login, password
                }
            }
        }).then(({data}) => {
            console.log(data)
            setUsername('')
            setLogin('')
            setPassword('')
        })
    }

    return (
      <div>
          <form>
              <input value={username} onChange={e => setUsername(e.target.value)} type="text"/>
              <input value={login} onChange={e => setLogin(e.target.value)} type="text"/>
              <input value={password} onChange={e => setPassword(e.target.value)} type="text"/>
              <div className="btns">
                  <button onClick={(e) => addUser(e)}>Создать</button>
              </div>
          </form>

      </div>
    );
};

export default SignUp;