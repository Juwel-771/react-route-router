import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const UserDetail = () => {
    const user = useLoaderData();
    const {name, email} = user;
    return (
        <div>
           <h1>{name}</h1>
           <h2>{email}</h2>
           <Link to="/users">
            <button className='my-4'>Back</button>
           </Link>
        </div>
    );
};

export default UserDetail;