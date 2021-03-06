import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    // eslint-disable-next-line
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const ShowButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => { ShowButton(); }, []);

    window.addEventListener('resize', ShowButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Elias' portfolio &nbsp; <i className="fas fa-cocktail" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <a href='https://www.linkedin.com/in/elias-b-73a478120/' rel="noreferrer" target="_blank" className='nav-links' onClick={closeMobileMenu}>
                                <i className="fab fa-linkedin"/>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='https://github.com/EliasGit2017' rel="noreferrer" target="_blank" className='nav-links' onClick={closeMobileMenu}>
                                <i className="fab fa-github"/>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='https://gitlab.com/Elias2049' rel="noreferrer" target="_blank" className='nav-links' onClick={closeMobileMenu}>
                                <i className="fab fa-gitlab"/>
                            </a>
                        </li>
                        {/*<li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Monay
                        </Link>
    </li>*/}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
