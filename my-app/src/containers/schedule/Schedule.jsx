import React from 'react';
import './Schedule.css';

const Schedule = () => {
    return(
        <div className='kendo__schedule section__padding-schedule parallax__schedule' id='schedule'>
            <div className='kendo__schedule-content'>
                <div className='kendo__schedule-text'>
                    <div className='kendo__schedule-text-title'>
                        <h2>Club Practice Schedule</h2>
                    </div>
                    <div className='kendo__schedule-text-sub'>
                        <div className='kendo__schedule-text-time'>
                            <p>Mondays</p>
                            <p>7:30pm-9:00pm</p>
                        </div>
                    </div>
                    <p>@ ARC Physical Forum</p>
                    <div className='kendo__schedule-text-sub'>
                        <div className='kendo__schedule-text-time'>
                            <p>Fridays</p>
                            <p>7:00-8:50pm</p>
                        </div>
                        <div className='kendo__schedule-text-time'>
                            <p>Saturday</p>
                            <p>12pm-2pm</p>
                        </div>
                    </div>
                    <a href='https://drive.google.com/file/d/1tuAdz7URQwfIluH8JbRX8-ZFMaYcgr1w/view' className='kendo__schedule-text-location' target='_blank' rel='noreferrer'>@ ARC Training Zone</a>
                </div>
            </div>
        </div>
    )
}

export default Schedule;