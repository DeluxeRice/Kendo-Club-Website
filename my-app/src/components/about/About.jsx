import React, { Component } from 'react';
import { Navbar, About, Footer, Officer} from '../../containers';
import bryce from '../../assets/bryce.jfif'
import suzuki from '../../assets/suzuki.png'
class AboutPage extends Component {
  render() {
    return (
        <div>
          <Navbar/>
          <About/>
          <div className = 'kendo_mission'>
            <p>We want people to do kendo very good!</p>
          </div>
            <Officer image = {bryce} name = 'Bryce Nishimaki'/>
            <Officer image = {suzuki} name = 'Suzuzki Masao'/>
          <Footer/>
        </div>
    );
  }
}

export default AboutPage;