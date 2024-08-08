import React, { Component } from 'react';
import { Navbar, Footer} from '../../containers';
import './Calendar.css'

class CalendarPage extends Component {

  render() {
    const calendarSrc = "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&mode=MONTH&src=YTJmMjkzNDk1Y2VjNDg1OTk2YTE4MGUxMjZlNmU3MzU0ODc0NWE5NGI1Y2U3Nzk1MDE5ZTdmMTc2MmI1NjBlNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23616161";
    return (
        <div className='body'>
          <Navbar/>
            <div className='calendar-full'>
              <iframe
                title = 'kendo-calendar'
                src={calendarSrc}
                style={{ borderWidth: 0, width: '98vw', height: '80vh' }}
                frameBorder="0"
                scrolling="no"
              />
            </div>
            <div className='calendar-mobile'>
              <iframe
                title = 'kendo-calendar'
                src={calendarSrc}
                style={{ borderWidth: 0, width: '98vw', height: '80vh' }}
                frameBorder="0"
                scrolling="no"
              />
            </div>
          <Footer/>
        </div>
    );
  }
}

export default CalendarPage;