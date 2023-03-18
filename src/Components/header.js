 import React from "react";
import logo from "./react-logo.png";
const Header = () => {
    return (
        <header>
        <nav >
        <img src={logo} width="48px" height="48px" alt="loading..."></img>
            <ul className="list-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        </header>
    );
};
export default Header;