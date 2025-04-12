import React from "react";
import { NavLink } from "react-router-dom";
import "./css/navbar.css";

const NavBar = () => {
    return(
        <nav className="nav-bar">
            <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
            <NavLink className="nav-link" to="/stt">STT</NavLink>
            <NavLink className="nav-link" to="/tts">TTS</NavLink>
        </nav>
    );
}
export default NavBar;