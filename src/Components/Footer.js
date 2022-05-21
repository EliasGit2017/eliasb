import React from 'react';
//import { Link } from 'react-router-dom';
//import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    To anyone interested in discussing future projects or curious to know more about me
                </p>
                <p className="footer-subscription-text">
                    Please send an Email to <a href = "mailto: elias.bendjaballah@gmail.com">elias.bendjaballah@gmail.com</a>
                </p>
            </section>
            {/*<div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About us</h2>
                        <Link to='/sign-up'> How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Carreers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    {/*<div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/sign-up'> How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Carreers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
        
            </div>*/}
            {/* <section className="social-media">
                <div className="social-media-wrap">
                    <div className="social-icons">
                        <Link className="social-icon-link instagram"
                            to='/'
                            target='_blank'
                            aria-label='Instagram'>
                            <i className="fab fa-instagram" />
                        </Link>
                    </div>
                </div>
            </section> */}
        </div>
    );
}

export default Footer;
