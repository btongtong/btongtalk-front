import React from 'react';
import Navbar from "../../components/navbar/navbar";

const NavbarL = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    );
};

export default NavbarL;