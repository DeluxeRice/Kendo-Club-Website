import React from "react";
import { List, ListItem } from "@mui/material";
function Upcoming(){
    return{
        <List variant="masonry" cols={3} gap={2} className='gallery-container'>
        {feeds.map((item) => (
            <a href={item.media_url} rel='noopener'>
                <ListItem key={item.img}>
                    <img src={item.media_url} srcSet={item.media_url} alt={item.caption} loading="lazy"/>
                </ListItem>
            </a>
        ))}
        </List>
    };
}

export default Upcoming;