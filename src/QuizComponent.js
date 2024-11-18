import React, { useState } from 'react'
import QuizIntro from './QuizIntro';
import QuestionComponent from './QuestionComponent';
import ScoreComponent from './ScoreComponent';

function QuizComponent() {
  const [ started, setStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);

  const questions =  [
    {
    question: 'In 2013 how much money was lost by Nigerian scams?',
    options: ["$95 Million","$956 Million","$2.7 Billion", "$12.7 Billion"],
    correctAnswer: '$12.7 Billion'
    },

    {
        question: "Whose greyscale face is on the kappa emoticon on Twitch?",
        options:["Justin DeSeno","John DeSeno","Jimmy DeSeno", "osh DeSeno" ],
        correctAnswer: "Josh DeSeno"
        },

        {
            question: "This field is sometimes known as &ldquo;The Dismal Science.&rdquo;",
            options: ["Philosophy","Politics","Physics", "Economics"],
            correctAnswer: "Economics"
            },

            {
                question: "Which American manufactured submachine gun was informally known by the American soldiers that used it as &quot;Grease Gun&quot;?",
                options: ["Colt 9mm","Thompson","MAC-10", "M3"],
                correctAnswer: "M3"
                },

                {
                    question: "What is a dead mall?",
                    options: ["A mall with no stores","A mall that has been condemed","A mall after business hours", "A mall with high vacancy rates or low consumer foot traffic"],
                    correctAnswer: "A mall with high vacancy rates or low consumer foot traffic",
                    },
                  ]

                  const startQuiz = () =>{
                    setStarted(true);
                    setQuizEnded(false);
                    setCurrentQuestionIndex(0);
                    setScore(0);
                  };

                  const submitQuiz = () =>{
                    setQuizEnded(true);
                  }

                  const handleAnswer = (selectedAnswer) =>{
                    const isCorrect = questions[currentQuestionIndex].correctAnswer === selectedAnswer;
                    if(isCorrect) setScore((prev) => prev + 1);

                    if(currentQuestionIndex + 1 < questions.length){
                      setCurrentQuestionIndex((prev) => prev + 1)
                    } else {
                      setQuizEnded(true);
                    }
                  };

  return (
    <div>
      {!started && <QuizIntro startQuiz={startQuiz}/>}
   
    {started && !quizEnded && (
      <QuestionComponent 
      question={questions[currentQuestionIndex]}
      handleAnswer={handleAnswer}
      isLastQuestion={currentQuestionIndex === questions.length - 1}
      onSubmitQuiz ={submitQuiz} 
      />
    )}
    {quizEnded && <ScoreComponent score={score} total={questions.length}/>}
    
    </div>
  );
};

export default QuizComponent;