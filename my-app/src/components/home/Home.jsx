import React, { Component } from 'react';
import { Email, Schedule, Footer, Navbar } from '../../containers';
import './Home.css'

class HomePage extends Component {
  render() {
    return (
        <div className='wrapper'>
          <Navbar/>
          <Schedule/>
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
          <Email/>
          <Footer/>
        </div>
    );
  }
}



export default HomePage;