import React from 'react';
import './index.css';


const Burger = () => {
 return (
 <>
    <div class="mobile-container">
    <div className="top-nav"> 
    <a href="#home" className="active">WhereMe</a>
    <div className="nav-links">
        <a href="#about">About</a>
        <a href="#survey">Survey</a>
        <a href="#contact">Contact</a>
        </div>
        <a href="#" className="burger-icon"></a>
    </div>
  </div>

     <button className="burger">
         <div className="menu"></div>
     </button>
     </>


 )

}


export default Burger;