import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div className='bg-gray-700 m-3 p-4 border-2 rounded-md border-teal-600' >
            <h2>Post ID: {id}</h2>
            <h2>{title}</h2>
            <Link to = {`/post/${id}`}>View Post</Link>
        </div>
    );
};

export default Post;