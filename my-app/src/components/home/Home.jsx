import React, { Component } from 'react';
import { Email, Schedule, Footer, Navbar } from '../../containers';
import './Home.css'

class HomePage extends Component {
  render() {
    return (
        <div className='wrapper'>
          <Navbar/>
          <Schedule/>
          <Email/>
          <Footer/>
        </div>
    );
  }
}



export default HomePage;