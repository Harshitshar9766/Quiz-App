import React, { useEffect, useState } from 'react'
import QuizComponent from './QuizComponent'
import { clear } from '@testing-library/user-event/dist/clear';


function QuestionComponent({question, handleAnswer, isLastQuestion, onSubmitQuiz}) {
  

 const [timer, setTimer] = useState(15);
 const [selectedOption, setSelectedOption] = useState(null);


useEffect(() => {
  const countdown = setInterval(() => {
    setTimer((prev) => (prev > 0 ? prev -  1 : 0));
  }, 1000);

  if(timer === 0){
    handleAnswer(null);
  }

  return () => clearInterval(countdown);
},[timer])

useEffect(() =>{
  setTimer(15);
  setSelectedOption(null)
},[question, handleAnswer])


const handleOptionChange = (event) =>{
  setSelectedOption(event.target.value);
}

// const handleOptionChange = (option) =>{
//   setSelectedOption(option);
// }

const handleOptionClick = () =>{
  if(selectedOption !==null)
  {
    handleAnswer(selectedOption);
    setTimer(15);
  }
};




  return (
    <div className='quiz'>
  
       <h2>{question.question}</h2>
      <ul>
        {question.options.map((option, index) =>(
          <li key={index}> 
          <label>
            <input 
            type="radio"
            name="quiz-option"
            value={option}
            checked={selectedOption === option}
            onClick={handleOptionChange} />
           {option}
           </label>
          </li>
        ))}
      </ul>
      <p>Time Remaining: {timer} seconds</p>
      {isLastQuestion ? (
      <button onClick={onSubmitQuiz} disabled={!selectedOption}>Submit</button> ) : (
      <button onClick={handleOptionClick} disabled={!selectedOption}>Next</button>
      )}
   </div>
  );
}

export default QuestionComponent;