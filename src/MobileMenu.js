import React from 'react';
import './index.css';
import {AiOutlineMenu} from 'react-icons/ai';
import {useState} from 'react';





const MobileMenu = () => {
    const [open, setOpen] = useState(false);
 return (
 <>
    <div class="mobile-container">
    <div className="top-nav"> 
    <a href="#home" className="active">
    <h4 className="logo">WhereMe
    {/* <img src="https://cdn2.iconfinder.com/data/icons/e-commerce-icons-2/256/Ecommerce_Icons_Rose_Color-11-512.png" width="50" height="50"/> */}      
    <AiOutlineMenu
    className="menu-icon" 
    open={open} onClick={()=> setOpen(!open)}
    />
    </h4> 
    </a>
    <div className="nav-links">
        <a href="#about">About</a>
        <a href="#survey">Survey</a>
        <a href="#contact">Contact</a>
        </div>
        <a href="#" className="burger-icon"></a>
    </div>
  </div>

     
     </>


 )

}


export default MobileMenu;