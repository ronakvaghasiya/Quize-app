import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { questions } from "./Questions";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [value, setValue] = useState(false);

  const history = useHistory();

  const handleNextQue = (number: number) => {
    const nextQuetions = currentQuestion + 1;

    if (nextQuetions < questions.length) {
      const selectedOptions = questions[currentQuestion].answerOptions.filter(
        (option: any) => option.id == value
      );

      if (selectedOptions[currentQuestion].isCorrect) {
        setScore(score + 1);
      }
      setCurrentQuestion(nextQuetions);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <div className="quiz_page">
        <div className="quiz_box">
          <h1 className="header">Quiz</h1>
          {showScore ? (
            <div className="score-section">
              <p>
                You scored <b>{score}</b> out of <b>{questions.length}</b>
              </p>
              <button onClick={() => history.push("/")} className="restart">
                Restart
              </button>
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>

              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map(
                  (answerOptions: any, index: number) => (
                    <>
                      <div key={index}>
                        <input
                          type="radio"
                          name="quizAnswer"
                          id={`${answerOptions.id}`}
                          value={answerOptions.id}
                          onChange={(e: any) => {
                            setValue(e.target.value);
                          }}
                        />
                        {answerOptions.answerText}
                      </div>
                    </>
                  )
                )}
              </div>
              <button
                onClick={() => handleNextQue(currentQuestion + 1)}
                className="next"
              >
                Next
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
