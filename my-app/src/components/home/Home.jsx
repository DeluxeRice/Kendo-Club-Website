import React, { Component } from 'react';
import {About, Email, Events, Footer, Header, Navbar} from '../../containers';


class HomePage extends Component {
  render() {
    return (
        <div>
          <Navbar/>
          <Header/>
          <About/>
          <Events/>
          <Email/>
          <Footer/>
        </div>
    );
  }
}



export default HomePage;