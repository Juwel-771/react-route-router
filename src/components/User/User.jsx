import React from 'react';
import { useLoaderData } from 'react-router-dom';
import OneUser from '../OneUser/OneUser';

const User = () => {

    const users = useLoaderData();

    return (
        <div className='grid grid-cols-3'>
            {
                users.map(user => <OneUser key={user.id} user = {user} ></OneUser>)
            }
        </div>
    );
};

export default User;