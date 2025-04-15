import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

const Root = () => {
    return (
        <div >
            <Header />
            <div className='flex items-center gap-5'>
                <aside>
                    <SideBar></SideBar>
                </aside>
                <div>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Root;