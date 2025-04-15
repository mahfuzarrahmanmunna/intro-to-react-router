import React from 'react';
import { Link } from 'react-router';

const Post = ({ post }) => {
    const { title, id } = post
    return (
        <div className='p-2 bg-amber-300 mt-2 rounded-xl shadow'>
            <h1 className='text-2xl '>{title}</h1>
            <Link to={`/posts/${id}`}>
                <button>show details</button>
            </Link>
        </div>
    );
};

export default Post;