import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id, body, title} = post;
    return (
        <div>
            <h2>Post Id: {id}</h2>
            <h2>Post title: {title}</h2>
            <p>{body}</p>
            <Link to = "/posts">Back</Link>
        </div>
    );
};

export default PostDetails;