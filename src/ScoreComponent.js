import React from 'react'

function ScoreComponent({score, total}) {

  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>your Score: {score}/{total}</p>
    </div>
  )
}

export default ScoreComponent;