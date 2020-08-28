import React from 'react'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import { BrowserRouter, Route } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import store from './store'
import {Provider} from "react-redux"
import Home from './pages/home/Home'



function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Route exact path="/" component={Login} />
                    <Route path="/Register" component={Register} />
                    <Route path="/Home" component={Home}/>
                </div>
            </BrowserRouter>
        </Provider>
    )
}

export default App
