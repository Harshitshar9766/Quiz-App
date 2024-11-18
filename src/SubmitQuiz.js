import React, { useState } from 'react'

function SubmitQuiz() {
    const [submitted, setSubmitted ] = useState(false);

    setSubmitted(true);

  return (
    <div>
         {!started && <QuizIntro startQuiz={startQuiz}/>}
         {started && !quizEnded && !submitted && (
      <>
        <QuestionComponent
          question={questions[currentQuestionIndex]}
          handleAnswer={handleAnswer}
        />
        {/* Check if it's the last question */}
        {currentQuestionIndex === questions.length - 1 ? (
          <button onClick={submitQuiz}>Submit</button>
        ) : (
          <button onClick={nextQuestion}>Next</button>
        )}
      </>
    )}

{submitted && <ScoreComponent score={score} total={questions.length} />}
    </div>
  )
}

export default SubmitQuiz