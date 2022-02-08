import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Leave us your email, we'll take care of you ;-)
                </p>
                <p className="footer-subscription-text">
                    Subscribe to our newsletter (you can unsubscribe at any time)
                </p>
                <div className='input-areas'>
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    {/*<div className='footer-link-items'>
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
                    </div>*/}
                </div>
        
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            Mappy <i className='fab fa-grav' />
                        </Link>
                    </div>
                    <small className='website-rights'>Mappy 2021 No copyrights infringement allowed, it is ours and that's how we like it ;-)</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                            to='/'
                            target='_blank'
                            aria-label='Facebook'>
                            <i className="fa fa-facebook-f" />
                        </Link>
                        <Link className="social-icon-link instagram"
                            to='/'
                            target='_blank'
                            aria-label='Instagram'>
                            <i className="fa fa-instagram" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
