import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../images/logosvg.png';
import './Navbar.scss';

const Navbar = () => {
    const clickHandle = () => {
        const nav = document.querySelector('nav');
        nav.classList.toggle('open');
    }
const sections = {
About: '/',
Work : '/work',
Experience:'/experience',
}; 


const NavLinks = Object.keys(sections).map((keyname,index) => {
    return (
<li key={index}>
    <Link to ={sections[keyname]} onClick={clickHandle}>{keyname}</Link>
</li>
    )
})
    return (
        <nav>
            <div id="nav-inner">
                <h2 className="logo">
                    <Link to ={sections.About}>
                        {/* <i className="fa fa-code"></i> */}
                <img src={logo} className="logo-icon" alt = "logo"></img>
                </Link>
                </h2>
               <div >
                   <div id = "nav-toggle"  onClick={clickHandle}>
                       <div>
                       <span></span>
                       <span></span>
                       <span></span>
                   </div>
                   </div>
               </div>
               <ul id="global-nav">{NavLinks}</ul>
            </div>
            <div className="nav-outer">

            </div>
        </nav>
        
    )
}
export default Navbar;