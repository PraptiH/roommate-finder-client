import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router'
import Footer from '../../components/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            {/* Theme controller - available on all pages */}
           
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;