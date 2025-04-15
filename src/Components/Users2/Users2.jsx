import React, { use } from 'react';

const Users2 = ({ usersPromise }) => {
    const usersData = use(usersPromise)
    console.log(usersData)
    return (
        <div>
            <h2>Hellos</h2>
        </div>
    );
};

export default Users2;