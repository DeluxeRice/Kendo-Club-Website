import React, { Component } from 'react';
import { Navbar, Officer, Footer} from '../../containers';
import './Sensei.css'
import shikai from '../../assets/shikai.jpg'
import zhu from '../../assets/zhu.jpg'
import gallinger from '../../assets/gallinger.jpg'
import mcneil from '../../assets/mcneil.jpg'
import fung from '../../assets/fung.jpg'

class SenseiPage extends Component {
  render() {
    return (
      <div className='wrapper sensei-wrapper'>
      <Navbar/>
          <div className='sensei-info sensei-about-text'>
            <div className='sensei-info-header sensei-about-text'>
              <h3>Meet the Sensei</h3>
              <p className='sensei-info-header-sub'>The wonderful sensei that make UCI Kendo unique.</p>
            </div>
            <div className='sensei-info-description'>
            </div>
            <div className='sensei-info-pictures'>
              <Officer image = {shikai} name = 'Masashi Shikai' role='Head Sensei' rank='Rank'/>
              <Officer image = {zhu} name = 'Tonie Zhu' role='Instructor' rank='Rank'/>
              <Officer image = {mcneil} name = 'Brandon Mcneil' role='Coach' rank='Rank'/>
              <Officer image = {gallinger} name = 'Nathan Gallinger' role='Coach' rank='Rank'/>
              <Officer image = {fung} name = 'Amos Fung' role='Coach' rank='Rank'/>
              
            </div>
          </div>
      <Footer/>
      </div>
    );
  }
}

export default SenseiPage;