import React from 'react';
import './index.css';
// import './assets/pexels-vlada-karpovich-7429304.mp4';

const SurveyForm = () => {
    return (
      <article>
      <form className="quiz">
        <h2>Style Quiz</h2>
        <label htmlFor="occasion">What occasion are you dressing for?</label>
        <input type="text"/>
        <label>What is your age range?</label>
        <input type="text"/>
        <label>What is the season?</label>
        <input type="text"/>
        <button class="btn">Show Styles!</button>
        </form>
        <div>
        </div>
        </article>
    );
  }

  export default SurveyForm;