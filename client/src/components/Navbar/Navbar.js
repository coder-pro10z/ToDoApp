import React from 'react';
import './navbar.css'; // Assuming you have a CSS file for styles

function navbar() {
    return (
        <nav className="navbar">
             <div className="nav-brand"><a href="#/home">Task Manager</a></div>  
            <ul className="nav-links">
                <li><a href="#/home">Home</a></li>
                <li><a href="#/about">About</a></li>
                <li><a href="#/services">Services</a></li>
                <li><a href="#/contact">Contact</a></li>
            </ul>       
        </nav>
    );
}

export default navbar;