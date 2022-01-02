import React from 'react';
import Logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='mainHeader'>
            <div className="logo"><img src={Logo} alt="logo" /></div>
        </div>
    );
};

export default Header;