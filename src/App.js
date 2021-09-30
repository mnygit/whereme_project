import React from 'react';
import Header from './Header';
import Hero from './Hero';
import SurveyForm from './SurveyForm'; 
import Footer from './Footer';
import Burger from './Burger';




const App = () => {
return (
   <div>
      <Header />
      <Burger/>
      <Hero />
      <SurveyForm />
      <Footer />
    </div>
  )
 }

export default App;