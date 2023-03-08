import React, { Component } from 'react';
import { Navbar, Footer, Officer, Title} from '../../containers';
import nakayama from '../../assets/nakayama.jpg';
import quach from '../../assets/quach.jpg';
import bravo from '../../assets/bravo.jpg';
import lam from '../../assets/lam.jpg';
import lim from '../../assets/lim.jpg'
import bryce from '../../assets/bryce.jpg';
import kiuchi from '../../assets/kiuchi.jpg'
import fung from '../../assets/fung.jpg'
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
            <p className = 'mission-statement-sub'>Kendo Club at UCI provides an environment for the Kendokas of UCI to train and build a community with their fellow Kenshi. We believe that each student has potential, and encourage Kendokas of all levels to come and train at UCI.</p>
          </div>

          <div className='officer-info about-text'>
            <div className='officer-info-header about-text'>
              <h3>Meet the Sensei</h3>
              <p className='officer-info-header-sub'>The wonderful sensei that make UCI Kendo unique.</p>
            </div>
            <div className='officer-info-description about-text'>
            </div>
            <div className='officer-info-pictures'>
              <Officer image = {kiuchi} name = 'Masashi Shikai' role='Head Sensei' rank='Rank'/>
              <Officer image = {kiuchi} name = 'Tonie' role='Instructor' rank='Rank'/>
              <Officer image = {kiuchi} name = 'Nathan Gallinger' role='Coach' rank='Rank'/>
              <Officer image = {kiuchi} name = 'Joseph Kiuchi' role='Coach' rank='Rank'/>
              <Officer image = {fung} name = 'Amos Fung' role='Coach' rank='Rank'/>
              
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
              <Officer image = {nakayama} name = 'Noah Nakayama' role='President' rank='Rank'/>
              <Officer image = {quach} name = 'Diana Quach' role='Vice President' rank='Rank'/>
              <Officer image = {bravo} name = 'Alessandra Bravo' role='Secretary' rank='Rank'/>
              <Officer image = {lam} name = 'Patrick Lam' role='Treasurer' rank='Rank'/>
              <Officer image = {lim} name = 'Charlie Lim' role='Historian' rank='Rank'/>
              <Officer image = {bryce} name = 'Bryce Nishimaki' role='Public Events Coordinator' rank='Rank'/>
            </div>
          </div>
          <Footer/>
        </div>
    );
  }
}

export default AboutPage;