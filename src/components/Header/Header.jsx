import React from 'react';
import './Header.css'
import { Link, Links, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to = "/">Home</NavLink>
                <NavLink to = "/about">About</NavLink>
                <NavLink to = "/contact">Contact</NavLink>
                <NavLink to = "/shop">Shop</NavLink>
                <NavLink to = "/users">User</NavLink>
                <NavLink to = "/posts">Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;