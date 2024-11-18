import React from 'react'

function QuizIntro({startQuiz}) {
  return (
   <div className="text-center p-8 bg-indigo-100 rounded-lg shadow-md" >
    <ul>
        <ul>Welcome to the Quiz Challenge!</ul>
<ul>Test your knowledge and see how many questions you can answer correctly!</ul>
<li>Multiple-Choice Questions: Each question has four answer options. Choose the one you think is correct.</li>
<li>Timer: You’ll have limited time to answer each question. Keep an eye on the timer so you don’t run out!</li>
<li>Scoring: Earn points for each correct answer. Your final score will be displayed at the end.</li>
<li>No Going Back: Once you answer, you can’t change it, so choose carefully!</li>
<ul>Ready to start? Click Start Quiz to begin! Good luck! 🍀</ul>
<button class="bg-violet-500" onClick={startQuiz}>Start Quiz</button>
    </ul>
    
   </div>
  )
}

export default QuizIntro;