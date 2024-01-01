import React from 'react';
import ResumePDF from '../content/Resume.pdf'
import DarkMode from './DarkMode.js';

// CSS import statement
import '../css/Footer.css';

// Image import statements
import GitHub from '../img/footer/github.png';
import LinkedIn from '../img/footer/linkedIn.png';
import Mail from '../img/footer/mail.png';
// import Resume from '../img/footer/resume.png';
import YouTube from '../img/footer/youtube.png';
import TikTok from '../img/footer/tiktok.png';

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
                    <a href='mailto: zhangster12@gmail.com' rel='noopener noreferrer' target='_blank'>
                        <img src={Mail} alt='Email' />
                    </a>
                </span>
                {/* <span>
                    <a href={ResumePDF} rel='noopener noreferrer' target='_blank'>
                        <img src={Resume} alt='Resume' />
                    </a>
                </span> */}
                <span>
                    <a href='https://github.com/zhangster12' rel='noopener noreferrer' target='_blank'>
                        <img src={GitHub} alt='GitHub' />
                    </a>
                </span>
                <span>
                    <a href='https://www.youtube.com/@DanCooksFood' rel='noopener noreferrer' target='_blank'>
                        <img src={YouTube} alt='YouTube' />
                    </a>
                </span>
                <span>
                    <a href='https://www.tiktok.com/@thedancooks?lang=en' rel='noopener noreferrer' target='_blank'>
                        <img src={TikTok} alt='TikTok' />
                    </a>
                </span>
            </div>
            <div>
                <span className='footer-menu' id='footer-link'><a href='/'>Home</a></span>
                <span className='footer-menu' id='footer-link'><a href='/about'>About</a></span>
                <span className='footer-menu' id='footer-link'><a href='https://dyzhang4.wixsite.com/daniel-zhang' rel='noopener noreferrer' target='_blank'>Blog</a></span>
                <span className='footer-menu' id='footer-link'><a href='/contact'>Contact</a></span>
                <span className='footer-menu' id='footer-darkmode'><DarkMode /></span>
            </div>
            <div className='footer-copyright' id='footer-link'>© {new Date().getFullYear()} Daniel Zhang. This site was made by Daniel Zhang from scratch with React. Icons by <a href='https://icons8.com/' rel='noopener noreferrer' target='_blank'>Icons8</a>.</div>
        </footer>
    );
}

export default Footer;