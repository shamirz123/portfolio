import React, {useState} from 'react'
import "../../Components/main.css";

function Navbar() {
    const [isHamburgerActive, setHamburgerActive] = useState(false);

    const handleHamburgerClick = () => {
        setHamburgerActive(!isHamburgerActive);
    };
    return (
        <header>
            <div className="container">
                <nav>
                    <a className="navbar-brand" href="#">
                        <i className="icon ion-md-planet"></i>
                    </a>
                    <ul className={`nav-list ${isHamburgerActive ? 'active' : ''}`}>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                about
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                videos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                competences
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                contacts
                            </a>
                        </li>
                    </ul>
                    <div className="hamburger" onClick={handleHamburgerClick}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </nav>
            </div>
        </header>

    )
}

export default Navbar