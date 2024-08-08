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
import bryce from '../../assets/bryce.jpg';
import naethan from '../../assets/naethan.jpg'
import jaime from '../../assets/jaime.jpg'
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
            <h3 className ='mission-statement-title'>Our Purpose</h3>
            <p className = 'mission-statement-sub'>The Kendo Club at UCI provides an environment for Kendokas (practitioners of Kendo) to train and build a community with their fellow Kenshi. We welcome people of all skill levels and encourage all to come and train with us.</p>
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
              <Officer image = {bravo} name = 'Alessandra Bravo' role='President' rank='Rank'/>
              <Officer image = {jaime} name = 'Jaime Dubeibe' role='Vice President' rank='Rank'/>
              <Officer image = {bravo} name = 'Amy Haley' role='Secretary' rank='Rank'/>
              <Officer image = {naethan} name = 'Naethan Fajarito' role='Treasurer' rank='Rank'/>
              <Officer image = {lim} name = 'Aljae Trinidad' role='Historian' rank='Rank'/>
              <Officer image = {bryce} name = 'Bryce Nishimaki' role='Public Events Coordinator' rank='Rank'/>
            </div>
            <p className='officer-info-post-text'>Feel free to say hi if you see them at practice!</p>
          </div>
          <Footer/>
        </div>
    );
  }
}

export default AboutPage;