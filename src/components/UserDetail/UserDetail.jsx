import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const UserDetail = () => {
    const user = useLoaderData();
    const {name, username, email} = user;
    return (
        <div>
            <h1> {name} </h1>
            <h2> {username} </h2>
            <h2> {email} </h2>
            <Link to = "/users">Back</Link>
        </div>
    );
};

export default UserDetail;