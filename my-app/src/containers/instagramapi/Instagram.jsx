import React, { useState, useEffect, useRef } from 'react'
import { ImageList, ImageListItem } from '@mui/material'
import axios from 'axios'

import './Instagram.css'

function Instagram({...props}){
    const [feeds, setFeedsData] = useState([])
    const APIKey = process.env.INSTA_API_KEY
    //use useRef to store the latest value of the prop without firing the effect

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${APIKey}`)
                .then((resp) => {
                    setFeedsData(resp.data.data)
                })
          } catch (err) {
              console.log('error', err)
          }
        }
        
        // manually call the fecth function 
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    return (
        <ImageList variant="masonry" cols={3} gap={2} className='gallery-container'>
        {feeds.map((item) => (
            <a href={item.media_url} rel='noopener'>
                <ImageListItem key={item.img}>
                    <img src={item.media_url} srcSet={item.media_url} alt={item.caption} loading="lazy"/>
                </ImageListItem>
            </a>
        ))}
        </ImageList>
    );
}

export default Instagram;