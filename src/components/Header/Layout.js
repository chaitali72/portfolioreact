import React from 'react';
import Header from './Header';
import Navbar from '../Navbar/Navbar';

const Layout = ({ section,imgSrc,children ,url }) => {
    return (
    <div>
    <Navbar/>
    <Header section ={section} imgSrc= {imgSrc} url= {url}></Header>
    <div >{children}</div>
    </div>
);
};
export default Layout;