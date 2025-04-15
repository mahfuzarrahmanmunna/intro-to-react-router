import React from 'react';
import { Link } from 'react-router';

const User = ({ user }) => {
    const { id, name, email, phone } = user
    return (
        <div className='p-3 bg-amber-300 mt-2 rounded-xl text-center'>
            <h2>{name}</h2>
            <h2>Email : {email}</h2>
            <h2>Phone : {phone}</h2>
            <Link to={`/users/${id}`}>show details</Link>
        </div>
    );
};

export default User;