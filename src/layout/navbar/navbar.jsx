import React, {useEffect} from 'react';
import Navbar from "../../components/navbar/navbar";
import LogoutWithdraw from "../../components/logoutWithdraw/logoutWithdraw";

const NavbarL = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>
                {children}
            </main>
            <LogoutWithdraw/>
        </div>
    );
};

export default NavbarL;