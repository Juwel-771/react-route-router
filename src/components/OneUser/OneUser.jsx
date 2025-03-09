import React from 'react';

const OneUser = ({user}) => {
    const {name, email, phone} = user;
    return (
        <div className=' p-3 m-4 border-2 border-purple-500 rounded-md'>
            <h2 className='text-3xl'> {name} </h2>
            <p> {email} </p>
            <p> {phone} </p>
            <button>Details</button>
        </div>
    );
};

export default OneUser;