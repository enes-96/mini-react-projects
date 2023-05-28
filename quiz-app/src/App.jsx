import React, { useState, useEffect } from "react";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [hearts, setHearts] = useState(3);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch("https://the-trivia-api.com/api/questions");
      const questionData = await response.json();
      setQuestions(questionData);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleAnswerClick = (e) => {
    const { correctAnswer } = questions[0];

    if (correctAnswer === e.target.innerText) {
      handleCorrectAnswer();
    } else {
      handleWrongAnswer();
    }
  };

  const handleCorrectAnswer = () => {
    alert("Correct answer!");
    setScore(score + 1);
    fetchQuestions();
  };

  const handleWrongAnswer = () => {
    setHearts(hearts - 1);

    if (hearts < 2) {
      handleGameLost();
    }
  };

  const handleGameLost = () => {
    alert("You lost!");
    setHearts(3);
    setScore(0);
    fetchQuestions();
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const renderQuestion = () => {
    if (questions.length === 0) {
      return null;
    }

    const { question, incorrectAnswers, correctAnswer } = questions[0];
    const answerArray = [...incorrectAnswers, correctAnswer];
    shuffleArray(answerArray);

    return (
      <div className="h-screen w-full grid place-items-center">
        <section className=" w-1/4 p-14 border-2">
          <div className="flex justify-between p-2">
            <p>
              HEARTS: <span>{hearts}</span>
            </p>
            <p>
              SCORE: <span>{score}</span>
            </p>
          </div>
          <h1 className="text-xl text-center text-red-800 font-bold py-12">
            {question}
          </h1>
          <ul className="grid gap-y-10">
            {answerArray.map((answer, index) => (
              <button
                className="border-2 rounded-full py-2 px-12 w-full"
                onClick={handleAnswerClick}
                key={index}
              >
                {answer}
              </button>
            ))}
          </ul>
        </section>
      </div>
    );
  };

  return <div>{renderQuestion()}</div>;
};

export default App;
