import React, { Component } from 'react';
import {About, Email, Events, Footer, Header, Navbar} from '../../containers';
import Gallery from '../../containers/gallery/Gallery';

class HomePage extends Component {
  render() {
    return (
        <div>
          <Navbar/>
          <Header/>
          <About/>
          <Events/>
          <Gallery/>
          <Email/>
          <Footer/>
        </div>
    );
  }
}



export default HomePage;