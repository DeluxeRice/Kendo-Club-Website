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
                            <p>8:30pm-10pm</p>
                        </div>
                        <div className='kendo__events-text-time'>
                            <p>Fridays</p>
                            <p>9pm-10:30pm</p>
                        </div>
                        <div className='kendo__events-text-time'>
                            <p>Saturday</p>
                            <p>11am-1pm</p>
                        </div>
                    </div>
                    <p className='kendo__events-text-location'>@ ARC Training Zone</p>
                </div>
            </div>
        </div>
    )
}

export default Events;