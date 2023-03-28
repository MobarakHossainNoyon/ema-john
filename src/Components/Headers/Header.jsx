import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'


const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
            <img src={logo} alt="" />
           <div className='menus'>
           <a href="/order">Order</a>
            <a href="/order-review">Order review</a>
            <a href="/manage-inventory">Manage inventory</a>
            <a href="/login">Login</a>
           </div>
        </div>
        </div>
    );
};

export default Header;