import './base.css';
import React from 'react';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const HeaderL = ({ children }) => {
    return (
        <div>
            <div className='header-layout-container'>
                <Header />
            </div>
            <main>
                {children}
            </main>
            <div className='footer-layout-spacing'></div>
            <div className='footer-layout-container'>
                <Footer />
            </div>
        </div>
    );
};

export default HeaderL;