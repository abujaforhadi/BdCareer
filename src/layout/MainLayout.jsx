import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footers from '../Components/Footers';

const MainLayout = () => {
    return (
        <div className=' font-poppins '>
            <header className='h-10 md:h-18'>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>


            </main>
            <footer className='py-5'>
                <Footers></Footers>
            </footer>
        </div>
    );
};

export default MainLayout;