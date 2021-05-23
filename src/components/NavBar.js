import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';

// CSS import statements
import '../css/NavBar.css'

function NavBar() {
    const [open, setOpen] = useState(false);
    NavBar.handleClickOutside = () => setOpen(false); 

    return(
        <nav>
            <div className='navbar-container'>
                <a href='/' className='logo'>Daniel Zhang</a>
                <div className='toggle-button' onScroll={() => setOpen(!open)} onClick={() => setOpen(!open)}>
                    <div className='bar' />
                    <div className='bar' />
                    <div className='bar' />
                </div>
            </div>
            <div id='nav-links' className={open ? 'nav-open' : 'nav-collasped'}>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/blog'>Blog</a>
                <a href='/contact'>Contact</a>
            </div>
        </nav>
    );
}

const clickOutsideConfig = {
    handleClickOutside: () => NavBar.handleClickOutside,
};

export default onClickOutside(NavBar, clickOutsideConfig);