import React from 'react';
import './Menu.css';


function Menu() {
    return (
        <div className="Menu">
            <nav className="App-nav">
            <ul id="menu">
                <li><a href="#">Home</a></li>
                <li>
                    <a href="#">About</a>
                </li>
                   
                <li>
                    <a href="./form">Add New Non-Profit</a>
                </li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </nav>
        </div>
    )
}

export default Menu;