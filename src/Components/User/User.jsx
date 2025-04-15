import React, { Suspense, useState } from 'react';
import { Link, Navigate } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({ user }) => {
    const { id, name, email, phone } = user
    const [showInfo, setShowInfo] = useState(false)

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())

    const [visitHome, setVisitHome] = useState(false)

    if (visitHome) {
        return <Navigate to='/'></Navigate>
    }

    return (
        <div className='p-3 bg-amber-300 mt-2 rounded-xl text-center'>
            <h2>{name}</h2>
            <h2>Email : {email}</h2>
            <h2>Phone : {phone}</h2>
            <Link className='link' to={`/users/${id}`}>show details</Link>
            <button className='btn' onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'hide' : 'show'} Info</button>
            {
                showInfo && <Suspense fallback={<span>Loading....</span>}>
                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }
            <button onClick={() => setVisitHome(true)} className='btn'>
                visit home
            </button>
        </div>
    );
};

export default User;