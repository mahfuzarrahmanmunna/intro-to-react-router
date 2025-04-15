import React from 'react';
import { Link, NavLink } from 'react-router';
import './header.css'
const Header = () => {
    return (
        <div className=''>
            <h2 className='text-4xl font-bold'>This is header</h2>
            <nav className='flex gap-8 text-2xl'>
                {/* <Link to='/'>Home</Link>
                <Link to='/mobiles'>Mobiles</Link>
                <Link to='/laptops'>Laptops</Link> */}
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/mobiles'>Mobiles</NavLink>
                <NavLink to='/laptops'>Laptops</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/users2'>Users2</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;