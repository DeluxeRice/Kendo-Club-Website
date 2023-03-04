import React, { Component } from 'react';
import { Navbar, Footer, Email } from "../../containers";

class NewsletterPage extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Email/>
                <Footer/>
            </div>
        );
    }
}

export default NewsletterPage;