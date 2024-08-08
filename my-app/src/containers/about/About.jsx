import React from 'react';
import Title from '../title/Title';
import './About.css';

const About = () => {
    return(
        <div className='kendo__about section__padding-about' id='about'>
            <div className='kendo__about-content'>
                <div className='kendo__about-text'>
                    <div className='kendo__about-text-title'>
                        <Title text='About Us'/>
                    </div>
                    <div className='kendo__about-text-sub'> 
                        <p> The Kendo Club at UCI provides an environment for Kendokas (practitioners of Kendo)
                            to train and build a community with their fellow Kenshi.
                            We welcome people of all skill levels and encourage all to come and train with us.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;