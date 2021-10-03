import React from 'react';
import './index.css';
import './MobileMenu';
import MobileMenu from './MobileMenu';


const Header = () => {
    return (
        <header className="main-header">
            <MobileMenu/>

         {/* <div className="container">
             <h1 className="logo">WhereMe
             <img src="https://cdn2.iconfinder.com/data/icons/e-commerce-icons-2/256/Ecommerce_Icons_Rose_Color-11-512.png" width="50" height="50"/>
             </h1> 
        <nav className="main-nav">
        <ul className="main-nav-list">
        <li><a href="#">About</a></li>
        <li><a href="#">Survey</a></li>
        <li><a href="#">Contact</a></li>
        </ul>
        </nav>
        </div> */}
        </header>
    
    );
}

export default Header;