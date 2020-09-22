import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="NavBar">
            <ul>
                <li>
                    <Link to="/Home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/About">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/Topics">
                        Topics
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
