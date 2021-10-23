import React from 'react';
import ResumePDF from '../content/Resume.pdf'

// CSS import statement
import '../css/Footer.css';

// Image import statements
import GitHub from '../img/footer/github.png';
import LinkedIn from '../img/footer/linkedIn.png';
import Mail from '../img/footer/mail.png';
import Resume from '../img/footer/resume.png';
import YouTube from '../img/footer/youtube.png';

function Footer() {
    return(
        <footer className='footer'>
            <div className='icons'>
                <span>
                    <a href='https://www.linkedin.com/in/the-daniel-zhang/' rel='noopener noreferrer' target='_blank'>
                        <img src={LinkedIn} alt='LinkedIn' />
                    </a>
                </span>
                <span>
                    <a href='mailto: dyzhang@gatech.edu' rel='noopener noreferrer' target='_blank'>
                        <img src={Mail} alt='Email' />
                    </a>
                </span>
                <span>
                    <a href={ResumePDF} rel='noopener noreferrer' target='_blank'>
                        <img src={Resume} alt='Resume' />
                    </a>
                </span>
                <span>
                    <a href='https://github.com/zhangster12' rel='noopener noreferrer' target='_blank'>
                        <img src={GitHub} alt='GitHub' />
                    </a>
                </span>
                <span>
                    <a href='https://www.youtube.com/channel/UCOMUSbE2BYVBK6P9yLQhV5Q' rel='noopener noreferrer' target='_blank'>
                        <img src={YouTube} alt='YouTube' />
                    </a>
                </span>
            </div>
            <div>
                <span className='footer-menu' id='footer-link'><a href='/'>Home</a></span>
                <span className='footer-menu' id='footer-link'><a href='/about'>About</a></span>
                <span className='footer-menu' id='footer-link'><a href='/blog'>Blog</a></span>
                <span className='footer-menu' id='footer-link'><a href='/contact'>Contact</a></span>
            </div>
            <div className='footer-copyright' id='footer-link'>© 2021 Daniel Zhang. This site was made by Daniel Zhang from scratch with React. Icons by <a href='https://icons8.com/' rel='noopener noreferrer' target='_blank'>Icons8</a>.</div>
        </footer>
    );
}

export default Footer;