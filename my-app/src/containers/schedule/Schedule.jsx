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
                            <p>Tuesdays @ Training Zone</p>
                            <p>8:30PM-10PM</p>
                        </div>
                    </div>
                    <div className='kendo__schedule-text-sub'>
                        <div className='kendo__schedule-text-time'>
                            <p>Fridays @ Training Zone</p>
                            <p>7-9pm, 9:30-11pm</p>
                        </div>
                    <div className='kendo__schedule-text-sub'></div>
                        <div className='kendo__schedule-text-time'>
                            <p>Saturday @ Physical Forum</p>
                            <p>11:30AM-1:30PM</p>
                        </div>
                        </div>
                    <a href='https://drive.google.com/file/d/1tuAdz7URQwfIluH8JbRX8-ZFMaYcgr1w/view' className='kendo__schedule-text-location' target='_blank' rel='noreferrer'>Click for Directions</a>
                </div>
            </div>
        </div>
    )
}

export default Schedule;