import React from 'react';
import './Footer.css';
import { SiFacebook, SiInstagram, SiGmail } from "react-icons/si";

const Footer = () => {
    return(
            <div className='contact gradient__bg' id='footer'>
                <a className='contact-button' rel='noopener' href='https://www.facebook.com/groups/kendoclubatuci/'><SiFacebook/></a>
                <a className='contact-button' rel='noopener' href='https://www.instagram.com/kendoclubatuci'><SiInstagram/></a>
                <a className='contact-button' rel='noopener' href='mailto:ucikendoclub@gmail.com'><SiGmail/></a>
            </div>
    )
}

export default Footer;