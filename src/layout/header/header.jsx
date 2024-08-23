import React from 'react';
import Header from "../../components/header/header";

const HeaderL = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
        </div>
    );
};

export default HeaderL;