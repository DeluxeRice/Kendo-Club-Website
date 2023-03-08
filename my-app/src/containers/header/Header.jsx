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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;