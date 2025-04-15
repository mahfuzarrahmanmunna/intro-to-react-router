import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData()
    const navigate = useNavigate()
    const handleBackBtn = () => {
        navigate(-1)
    }
    return (
        <div>
            <h1>{post.title}</h1>
            <h1>{post.body}</h1>
            <button onClick={handleBackBtn}>Go back</button>
        </div>
    );
};

export default PostDetails;