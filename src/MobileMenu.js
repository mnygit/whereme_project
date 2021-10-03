import React from 'react';
import './index.css';
import {AiOutlineMenu} from 'react-icons/ai';


const MobileMenu = () => {
 return (
 <>
    <div class="mobile-container">
    <div className="top-nav"> 
    <a href="#home" className="active">WhereMe</a>
    <AiOutlineMenu size='24px' color='black'/>
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