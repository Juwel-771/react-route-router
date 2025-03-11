import React from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const postId = useParams();

    console.log(postId);

    const {id, body, title} = post;

    const handleGoBack = () => {
        // navigate(-1);
        navigate('/posts')
    }
    return (
        <div>
            <h2>Post Id: {id}</h2>
            <h2>Post title: {title}</h2>
            <p>{body}</p>
            {/* <Link to = "/posts">Back</Link> */}
            <button onClick={handleGoBack}> Go Back </button>
        </div>
    );
};

export default PostDetails;