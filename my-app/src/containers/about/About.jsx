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
                        <p> Kendo Club at UCI provides an environment for the Kendokas of UCI
                            to train and build a community with their fellow Kenshi. We believe
                            that each student has potential, and encourage Kendokas of all levels to
                            come and train at UCI.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;