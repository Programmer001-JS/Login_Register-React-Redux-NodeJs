import React from 'react'
import {Link} from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-ligth">
            <Link to="/Login" className="navbar-brand">Login React</Link>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item"><Link to="/" className="nav-link">Login</Link></li>
                <li className="nav-item"><Link to="/Register" className="nav-link">Register</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar
