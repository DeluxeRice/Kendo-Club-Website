import React, { Component } from 'react';
import { Navbar, Footer, Officer, Title} from '../../containers';

import gallinger from '../../assets/gallinger.jpg'
import mcneil from '../../assets/mcneil.jpg'
import fung from '../../assets/fung.jpg'
import bravo from '../../assets/alice.jpg'
import naethan from '../../assets/naethan.jpg'
import jaime from '../../assets/jaime.jpg'
import amy from '../../assets/amy.jpg'
import selina from '../../assets/selina.jpg'
import mizobe from '../../assets/mizobe.jpg'
import aljae from '../../assets/aljae.jpg'
import './About.css'

class AboutPage extends Component {
  render() {
    return (
        <div className='about'>
          <Navbar/>
          <div className='about-title about-text'>
            <Title text='Leadership'/>
          </div>

          <div className='sensei-info sensei-about-text'>
            <div className='sensei-info-header sensei-about-text'>
              <h3>Coaches</h3>
            </div>
            <div className='sensei-info-description'>
            </div>
            <div className='sensei-info-pictures'>
              <Officer image = {gallinger} name = 'Nathan Gallinger' rank='5 Dan'/>
              <Officer image = {mcneil} name = 'Brandon Mcneil' rank='2 Dan'/>
              <Officer image = {fung} name = 'Amos Fung' rank='1 Dan'/>
              <Officer image = {mizobe} name = 'Ken Mizobe'  rank='5 Dan'/>
            </div>
          </div>

          <div className='officer-info about-text'>
            <div className='officer-info-header about-text'>
              <h3>Club Officers</h3>
            </div>
            <div className='officer-info-description about-text'>
            </div>
            <div className='officer-info-pictures'>
              <Officer image = {bravo} name = 'Alessandra Bravo' role='President' rank='Rank: 5 kyu'/>
              <Officer image = {jaime} name = 'Jaime Dubeibe' role='Vice President' rank='Rank: 0 kyu'/>
              <Officer image = {amy} name = 'Haley Amy' role='Secretary' rank='Rank: 0 kyu'/>
              <Officer image = {naethan} name = 'Naethan Fajarito' role='Treasurer' rank='Rank: 9999 Dan'/>
              <Officer image = {aljae} name = 'Aljae Trinidad' role='Historian' rank='Rank'/>
              <Officer image = {selina} name = 'Selina Hsieh' role='Public Events Coordinator' rank='Rank: infinite'/>
            </div>
            <p className='officer-info-post-text'>Feel free to say hi if you see them at practice!</p>
          </div>
          <Footer/>
        </div>
    );
  }
}

export default AboutPage;