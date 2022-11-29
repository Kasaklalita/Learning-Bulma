import React from 'react';

const MainNavbar = () => {
    return (
        <nav className="navbar has-shadow is-white">
            <div className="navbar-brand">
                <a href="" className="navbar-item">
                    <img
                        src={require('../../assets/logo.png')}
                        alt="site logo"
                        className="py-2 px-2"
                        style={{maxHeight: '70px'}}
                    />
                </a>
                <a className="navbar-burger" id="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
            <div className="navbar-menu" id="nav-links">
                <div className="navbar-end">
                    <a className="navbar-item">My Account</a>
                    <a className="navbar-item">Shopping Cart (0)</a>
                </div>
            </div>
        </nav>
    );
};

export default MainNavbar;