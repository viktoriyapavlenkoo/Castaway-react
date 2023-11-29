import React from "react";
import Nav from "../Elements/Nav";
import '../Header/Header.css';

function Header() {
    const headerNavRef = React.createRef();
    const burgerRef = React.createRef();

    function burgerMenu() {
        burgerRef.current.classList.toggle('active');
        headerNavRef.current.classList.toggle('active')
    }

  

    return (
        <header className="header">
            <div className="header__container">
                <a href="/" className="header__logo">
                    <img src="../resources/images/logo-img.svg" alt="Logo" />
                </a>
                <div className="header__nav" ref={headerNavRef}>
                    <Nav/>
                </div>
                <div className='burger' ref={burgerRef} onClick={burgerMenu}>
                     <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header