import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col'>
            <h2>404 Error not found</h2>
           <Link to='/'>Go Back -  Link</Link>
           <a href="/">Go Back - A</a> 
        </div>
    );
};

export default Error;