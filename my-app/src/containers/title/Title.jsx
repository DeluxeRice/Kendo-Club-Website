import React from "react";
import './Title.css';

function Title({text}){
    return(
        <div className='Generic-Title'>
            <h2>{text}</h2>
        </div>
    );
}

export default Title;