import React from 'react';
import './Events.css';

const Events = () => {
    return(
        <div className='kendo__events section__padding-events parallax__events' id='events'>
            <div className='kendo__events-content'>
                <div className='kendo__events-text'>
                    <div className='kendo__events-text-title'>
                        <h2>Club Practice Schedule</h2>
                    </div>
                    <div className='kendo__events-text-sub'>
                        <div className='kendo__events-text-time'>
                            <p>Tuesdays</p>
                            <p>7:00pm-8:30pm</p>
                        </div>
                        <div className='kendo__events-text-time'>
                            <p>Fridays</p>
                            <p>7:00-8:50pm</p>
                        </div>
                        <div className='kendo__events-text-time'>
                            <p>Saturday</p>
                            <p>11am-1pm</p>
                        </div>
                    </div>
                    <a href='https://drive.google.com/file/d/1tuAdz7URQwfIluH8JbRX8-ZFMaYcgr1w/view' className='kendo__events-text-location' target='_blank' rel='noreferrer'>@ ARC Training Zone</a>
                </div>
            </div>
        </div>
    )
}

export default Events;