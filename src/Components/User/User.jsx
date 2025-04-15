import React from 'react';

const User = ({ user }) => {
    const { name, email, phone } = user
    return (
        <div className='p-3'>
            <h2>{name}</h2>
            <h2>Email : {email}</h2>
            <h2>Phone : {phone}</h2>
        </div>
    );
};

export default User;