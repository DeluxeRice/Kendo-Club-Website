import React from 'react';
import { Navbar, Footer, Email } from '../../containers';
import './Contact.css'

const ContactPage = () => {
  return (
    <div className="contact-page wrapper">
      <Navbar/>
      <div className='contactEmail'>
      </div>
      <Email/>
      <Footer/>
    </div>
  );
};

export default ContactPage;
