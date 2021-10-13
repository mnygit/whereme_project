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
    <h4 className="clothing-label">What's your occasion?</h4>
    <p className="clothing-intro">Lorem ipsum dolor sit amet,Ut enim ad minim veniam.</p>
    <div className="gallery">
        <div className="img-one"> 
    <img className="gallery-img" src={daily} alt="everyday wear" />
    <div className="img-label">Everyday</div>
    </div>
    <div className="img-two">
    <img className="gallery-img" src={business} alt="business" />
    <div className="img-label">Business</div>
    </div>
    <div className="img-three">
    <img className="gallery-img" src={sports} alt="sports" />
    <div className="img-label">Sports</div>
    </div>
    <div className="img-four">
    <img className="gallery-img" src={formal} alt="formal" />
    <div className="img-label">Formal</div>
    </div>
    <div className="img-five">
    <img className="gallery-img" src={baecation} alt="swimsuit" />
    <div className="img-label">Baecation</div>
    </div>
    </div>
    
    
    
    </section>

 )


}





export default Clothing;