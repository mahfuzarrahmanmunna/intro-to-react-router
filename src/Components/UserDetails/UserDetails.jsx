import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData()
    const { name, website } = user
    return (
        <div>
            <h1>this is user Details</h1>
            <h2>{name}</h2>
            <h3>Website : {website}</h3>
        </div>
    );
};

export default UserDetails;