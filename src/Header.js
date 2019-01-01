import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-left">
                    <a className="nav-brand" href='#brand'>Hotel Name</a>
                </div>
                <div className="nav-right">
                    <a href='#rooms'>Rooms</a>
                    <a href='#restaurant'>Restaurant</a>
                    <a href='#about'>About</a>
                    <a href='#blog'>Blog</a>
                    <a href='#contact'>Contact</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;