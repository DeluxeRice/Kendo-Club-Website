import React, { Component } from 'react';
import { Email, Schedule, Footer, Navbar } from '../../containers';
import './Home.css'
import image from '../../assets/yuhihaishiai.jpg';

class HomePage extends Component {
  render() {
    return (
        <div className='wrapper'>
          <Navbar/>
          <div className='title'>
            <img className='title-image' src = {image} alt = 'shiai'></img>
            <h1 class='title-text'>UCI Kendo Club</h1>
          </div>
          <div className='mission-statement about-text'>
            <h3 className ='mission-statement-title'>What is Kendo?</h3>
              <p className = 'mission-statement-sub'>Originating from Japan, kendo is a martial art which simulates the duels of ancient samurai.
              Practitioners use bamboo swords to duel each other. Through the practice of kendo, we can learn discipline and perserverance. 
              </p>
            <h3 className ='mission-statement-title'>Why us?</h3>
              <p className ='mission-statement-sub'>The Kendo Club at UCI 
              is committed to providing a safe and welcoming environment for all students, regardless of
              experience or fitness level to learn Kendo. We welcome all to come and train with us.</p>
          </div>
          <Schedule/>
          <Email/>
          <Footer/>
        </div>
    );
  }
}



export default HomePage;