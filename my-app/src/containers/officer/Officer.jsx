import React from "react";

function Officer({name, image}){
    return(
        <div className = 'kendo_officer'>
            <img src = {image} alt = 'Headshot of officer'></img>
            <p>{name}</p>
        </div>
    );
}

export default Officer;