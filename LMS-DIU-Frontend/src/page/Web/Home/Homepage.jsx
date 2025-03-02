import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../../component/Web/Common/Header';
import Footer from './Footer';


const Homepage = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />

            <div>
                
            </div>
        </div>
    );
}

export default Homepage;
