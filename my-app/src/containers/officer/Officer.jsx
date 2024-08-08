import React from "react";
import './Officer.css'

function Officer({name, image, role, rank}){
    return(
        <div className = 'kendo_officer'>
            <img src = {image} alt = 'Headshot of officer'></img>
            <p>{name}</p>
            <h4>{role}</h4>
            <h5>{rank}</h5>
        </div>
    );
}

export default Officer;