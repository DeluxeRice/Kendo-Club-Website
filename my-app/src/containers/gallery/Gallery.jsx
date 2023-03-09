import React, { Component } from 'react'
import InstaFeeds from '../instagramapi/Instagram.jsx'
import './Gallery.css'

class Gallery extends Component {
    render(){
        return(
            <div className='gallery-container'>
                <InstaFeeds limit={15}/>
            </div>
            
        );
    }
}

export default Gallery;