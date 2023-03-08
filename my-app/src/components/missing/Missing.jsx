import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../../containers";

class MissingPage extends Component{
    render(){
        return(
            <div className='MissingPage-container'>
                <Navbar/>
                <div className='MissingPage-content'>
                    <h1>Oops!</h1>
                    <h2>The page that you are looking for does not exist!</h2>
                    <Link to={'/'}>Click here to return to the home page.</Link>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default MissingPage;