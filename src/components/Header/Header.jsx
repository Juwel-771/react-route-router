import React from 'react';
import './Header.css'
import { Link, Links } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to = "/">Home</Link>
                <Link to = "/about">About</Link>
                <Link to = "/contact">Contact</Link>
                <Link to = "/shop">Shop</Link>
                <Link to = "/users">User</Link>
                <Link to = "/posts">Posts</Link>
            </nav>
        </div>
    );
};

export default Header;