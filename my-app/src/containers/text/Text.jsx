import React from "react";
import './Text.css';

function TextBox ({text}){
    return(
        <div className='text-box'>
            {text}
        </div>
    );
}

export default TextBox;