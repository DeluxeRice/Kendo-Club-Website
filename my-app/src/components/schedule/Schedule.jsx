import React, { Component } from 'react';
import { Navbar,  Events, Footer} from '../../containers';

class SchedulePage extends Component {
  render() {
    return (
        <div>
          <Navbar/>
          <Events/>
          <Footer/>
        </div>
    );
  }
}

export default SchedulePage;