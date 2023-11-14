import '../Header/Header.css'

import Nav from "../Elements/Nav"

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <a href="/">
                    <img src="../resources/images/logo-img.svg" alt="Logo" />
                </a>
                <Nav/>
            </div>
        </header>
    )
}

export default Header