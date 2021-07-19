import React from 'react';
import './index.css';
// import './assets/pexels-vlada-karpovich-7429304.mp4';

const SurveyForm = () => {
    return (
      <div>
      <section className="quiz">
        <h2>Style Quiz</h2>
        <p>What occasion are you dressing for?</p>
        <p>What is your age range?</p>
        <p>What is the season?</p>
        <button class="btn">Show Styles!</button>
        </section>
        <div>
        {/* <button class="btn">Show Styles!</button> */}
        </div>
        </div>
    );
  }

  export default SurveyForm;