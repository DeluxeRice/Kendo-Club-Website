import React, { Component } from 'react';
import { Navbar, Footer, Officer, Title} from '../../containers';

import shikai from '../../assets/shikai.jpg'
import shikai2 from '../../assets/shikai2.jpg'
import zhu from '../../assets/zhu.jpg'
import gallinger from '../../assets/gallinger.jpg'
import mcneil from '../../assets/mcneil.jpg'
import fung from '../../assets/fung.jpg'
import bravo from '../../assets/alice.jpg';
import lim from '../../assets/lim.jpg';
import naethan from '../../assets/naethan.jpg'
import jaime from '../../assets/jaime.jpg'
import amy from '../../assets/amy.jpg'
import selina from '../../assets/selina.jpg'
import './About.css'

class AboutPage extends Component {
  render() {
    return (
        <div className='about'>
          <Navbar/>
          <div className='about-title about-text'>
            <Title text='About Us'/>
          </div>

          <div className='mission-statement about-text'>
            <h3 className ='mission-statement-title'>What is Kendo?</h3>
            <p className = 'mission-statement-sub'>Kendo is a Japanese fencing-like martial art which uses 
              bamboo swords (shinai) and derives from the fighting style of samurai.
              </p>
            <h3 className ='mission-statement-title'>Why us?</h3>
            <p className ='mission-statement-sub'>The Kendo Club at UCI 
              is committed to providing a safe and welcoming environment for all students, regardless of
              experience or fitness level to learn Kendo. We welcome all to come and train with us.</p>
          </div>

          <div className='sensei-info sensei-about-text'>
            <div className='sensei-info-header sensei-about-text'>
              <h3>Meet the Sensei</h3>
              <p className='sensei-info-header-sub'>The wonderful sensei that make UCI Kendo unique.</p>
            </div>
            <div className='sensei-info-description'>
            </div>
            <div className='sensei-info-pictures'>
              <Officer image = {shikai} name = 'Masashi Shikai' role='Head Sensei' rank='7 Dan'/>
              <Officer image = {shikai2} name = 'Yuriko Shikai' role='Instructor' rank='6 Dan'/>
              <Officer image = {zhu} name = 'Tonie Zhu' role='Instructor' rank='3 Dan'/>
              <Officer image = {gallinger} name = 'Nathan Gallinger' role='Coach' rank='5 Dan'/>
              <Officer image = {mcneil} name = 'Brandon Mcneil' role='Coach' rank='2 Dan'/>
              <Officer image = {fung} name = 'Amos Fung' role='Coach' rank='1 Dan'/>
            </div>
          </div>

          <div className='officer-info about-text'>
            <div className='officer-info-header about-text'>
              <h3>Meet the Officers</h3>
              <p className='officer-info-header-sub'>The Kenshi that make sure everything is running smoothly behind the scenes.</p>
            </div>
            <div className='officer-info-description about-text'>
            </div>
            <div className='officer-info-pictures'>
              <Officer image = {bravo} name = 'Alessandra Bravo' role='President' rank='Rank: 5 kyu'/>
              <Officer image = {jaime} name = 'Jaime Dubeibe' role='Vice President' rank='Rank: 0 kyu'/>
              <Officer image = {amy} name = 'Amy Haley' role='Secretary' rank='Rank: 0 kyu'/>
              <Officer image = {naethan} name = 'Naethan Fajarito' role='Treasurer' rank='Rank: 9999 Dan'/>
              <Officer image = {lim} name = 'Aljae Trinidad' role='Historian' rank='Rank'/>
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