import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <div className='kendo__header section__padding-header parallax__header' id='home'>
            <div className='kendo__header-content'>
                <div className='kendo__header-text'>
                    <div className='kendo__header-text-title'>
                        <h1>Kendo Club at UCI</h1>
                    </div>
                    <div className='kendo__header-text-event'>
                        <h2>Practice Resumes!</h2>
                        <p>Starting on 9/27 club practices will now be held in the ARC Training Zone. For practice times check the practice schedule below. Directions to the ARC Training Zone can be found <a classname='tz_directions' rel='noopener' href='https://drive.google.com/file/d/1tuAdz7URQwfIluH8JbRX8-ZFMaYcgr1w/view?usp=sharing'>here</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;