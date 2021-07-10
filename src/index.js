import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const SurveyForm = () => {
  return (
    <section>
      <h2>Style Quiz</h2>
      <p>What occasion are you dressing for?</p>
      <p>What is your age range?</p>
      <p>What is the season?</p>
      </section>

  );
}

ReactDOM.render(<SurveyForm/>, document.getElementById('root'));


