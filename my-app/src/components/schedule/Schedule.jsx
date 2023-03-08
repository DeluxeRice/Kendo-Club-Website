import React, { Component } from 'react';
import { Navbar,  Events, Footer} from '../../containers';
import './Schedule.css'

class SchedulePage extends Component {
  render() {
    return (
        <div>
          <Navbar/>
          <Events/>
          <div className='news news-text'>
              <h3>Upcoming Events</h3>
          </div>
          <Footer/>
        </div>
    );
  }
}

export default SchedulePage;