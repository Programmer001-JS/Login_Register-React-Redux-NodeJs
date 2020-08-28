import React from 'react'
import { useState } from "react"
import AuthService from '../../services/auth-servis'
import { useDispatch } from "react-redux"
import { setUser } from "./store/action"
import {useHistory} from "react-router-dom"

function Login() {

    const [state, setState] = useState({ username: "", password: "" })
    const dispatch = useDispatch();
    const history = useHistory();

    const onLogin = () => {
        AuthService.login(state)
            .then(res => {
                AuthService.storeUserData(res.data)
                dispatch(setUser(res.data))
                history.push('/home')
            })
    }


    return (
        <div className="container">
            <h1>Login</h1>
            <div className="col-6 offset-3">
                <input type="text" placeholder="name" className="form-control"
                    onChange={event => setState({ ...state, username: event.target.value })} /><br />

                <input type="password" placeholder="password" className="form-control"
                    onChange={event => setState({ ...state, password: event.target.value })} /><br />

                <button onClick={onLogin} className="btn btn-primary form-control">Login</button>
            </div>
        </div>
    )
}

export default Login
