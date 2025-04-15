import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';

const User = ({ user }) => {
    const { id, name, email, phone } = user
    const [showInfo, setShowInfo] = useState(false)
    return (
        <div className='p-3 bg-amber-300 mt-2 rounded-xl text-center'>
            <h2>{name}</h2>
            <h2>Email : {email}</h2>
            <h2>Phone : {phone}</h2>
            <Link className='link' to={`/users/${id}`}>show details</Link>
            <button className='btn' onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'hide' : 'show'} Info</button>
            {
                showInfo && <Suspense fallback={<span>Loading....</span>}>

                </Suspense>
            }
        </div>
    );
};

export default User;