import React from "react";
import Nav from "../Elements/Nav";
import '../Header/Header.css';

function Header() {
    const headerNavRef = React.createRef();
    const burgerRef = React.createRef();
    const closeRef = React.createRef();

    function openMenu() {
        headerNavRef.current.style.display = "flex";
        headerNavRef.current.classList.toggle('nav__mobile')
        // burgerRef.current.style.display = "none";
        closeRef.current.style.display = "block";
    }

    function closeMenu() {
        headerNavRef.current.classList.toggle('nav__mobile')
        headerNavRef.current.style.display = "none";
        // burgerRef.current.style.display = "block";
        closeRef.current.style.display = "none";
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
                <div className='burger' ref={burgerRef} onClick={openMenu}>
                    <div className='burger__line'></div>
                </div>
                <div className="close-menu" ref={closeRef} onClick={closeMenu}>
                    <div className='close-menu__line'></div>
                </div>
                
            </div>
        </header>
    )
}

export default Header