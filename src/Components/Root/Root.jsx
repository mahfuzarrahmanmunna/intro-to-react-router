import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

const Root = () => {
    const navigation = useNavigation()
    const isNavigation = Boolean(navigation.location)
    return (
        <div >
            <Header />
            <div className='flex items-center gap-5'>
                <aside>
                    <SideBar></SideBar>
                </aside>
                <div>
                    {
                        isNavigation && <h1>Loading .....</h1>
                    }
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Root;