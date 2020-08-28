import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
import AuthService from '../../services/auth-servis'
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser, removeUser} from "../login/store/action"

function Home() {
   
    const dispatch=useDispatch();
    const userStore = useSelector(store => store.userStore)
    const history = useHistory();
    useEffect(() => {
        if (AuthService.getUserData() === null) {
            history.push('/')

        }
        if (userStore) {
            dispatch(setUser(AuthService.getUserData()))
        }
    }, [])
     const onLogout=()=>{
         AuthService.logout(history);
         dispatch(removeUser());
     }

    return (
        <div className="container">
            <h1>Hello</h1>
            <h3>{userStore.name}</h3>
            <button className="btn btn-warning" onClick={onLogout}>Logout</button>
        </div>
    )
}

export default Home;
