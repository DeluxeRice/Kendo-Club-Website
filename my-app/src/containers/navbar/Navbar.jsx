import {React, useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/kendo_logo_transp.png'


const Menu = () => (
    <>
    <p><Link to={'/'} >Home</Link></p>
    <p><Link to={'/about'} >About</Link></p>
    <p><Link to={'/schedule'} >Schedule</Link></p>
    <p><Link to={'/newsletter'} >Newsletter</Link></p>
    <p><Link to={'/contact'} >Contact</Link></p>
    </>

)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return(
        <div className='kendo__navbar gradient__bg'>
            <div className='kendo__navbar-logo'>
                    <img src ={logo} alt="uci logo"/>
            </div>
            <div className='kendo__navbar-links'>
                <div className='kendo__navbar-links_container'>
                    <Menu/>
                </div>
                <div className='kendo__navbar-menu'>
                    {toggleMenu 
                        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
                    }
                    {toggleMenu && (
                        <div className='kendo__navbar-menu_container scale-in-ver-top'>
                            <div kendo__navbar-menu_container-links>
                                <Menu/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar;