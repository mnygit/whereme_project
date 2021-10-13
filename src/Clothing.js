import React from 'react';
import './index.css';
import daily from './everyday.png';
import business from './business.png';
import sports from './sports.png';
import formal from './formal.png';
import baecation from './baecation.png';



const Clothing = () => {
 return (
    <section className="clothing"> 
    <h4>What's your occasion?</h4>
    <p>Lorem ipsum dolor sit amet,Ut enim ad minim veniam.</p>
    <div className="gallery">  
    <img src={daily} alt="everyday wear" />
    <img src={business} alt="business" />
    <img src={sports} alt="sports" />
    <img src={formal} alt="formal" />
    <img src={baecation} alt="swimsuit" />
    
    
    </div>
    
    
    
    </section>

 )


}





export default Clothing;