import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {body} = post;
    return (
        <div>
            <p>{body}</p>
            <Link to = "/posts">Back</Link>
        </div>
    );
};

export default PostDetails;