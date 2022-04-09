import React from 'react'
import FirstPageCircleIcon from '../constants/icons/firstPageCircleIcon';
import ResultBarIcon from '../constants/icons/resultBarIcon';
import QuestionBarIcon from '../constants/icons/questionBarIcon';
import CorrectIcon from '../constants/icons/correctIcon';
import { useScore } from '../context/score';


import { Link } from "react-router-dom";

function ResultPage() {
  const { addTour, totalQuestion, correctAnswers, score } = useScore();

  const addTours = () => {
    addTour(1);
  }

  return (
    <>
      <div className='result-page-container'>
        <div className='result-page-final'>

          <div className='result-page-title'>Final</div>
          <ResultBarIcon />

          <div className='final-container'>
            <div className='final-text'>Point: {score}</div>
            <div className='final-text'>Questions: {totalQuestion}</div>
            <div className='final-text'>Correct Answers: {correctAnswers}</div>
          </div>

          <FirstPageCircleIcon />

          <Link to="/challenge_page">
            <span className='restart-button' onClick={() => addTours()}>Restart</span>
          </Link>

        </div>

        <div>
          <div className='result-page-title'>All Question</div>
          <QuestionBarIcon />
          <div>
            <div className='question-result-card'>
              <div className='question-text'>3 x 4 = 12</div>
              <div className='correct-icon'><CorrectIcon /></div>
            </div>
            <div className='question-result-card'>
              <div className='question-text'>3 x 4 = 12</div>
              <div className='correct-icon'><CorrectIcon /></div>
            </div>
            <div className='question-result-card'>
              <div className='question-text'>3 x 4 = 12</div>
              <div className='correct-icon'><CorrectIcon /></div>
            </div>
            <div className='question-result-card'>
              <div className='question-text'>3 x 4 = 12</div>
              <div className='correct-icon'><CorrectIcon /></div>
            </div>
            <div className='question-result-card'>
              <div className='question-text'>3 x 4 = 12</div>
              <div className='correct-icon'><CorrectIcon /></div>
            </div>
            <div className='question-result-card'>
              <div className='question-text'>3 x 4 = 12</div>
              <div className='correct-icon'><CorrectIcon /></div>
            </div>
            <div className='question-result-card'>
              <div className='question-text'>3 x 4 = 12</div>
              <div className='correct-icon'><CorrectIcon /></div>
            </div>
            <div className='question-result-card'>
              <div className='question-text'>3 x 4 = 12</div>
              <div className='correct-icon'><CorrectIcon /></div>
            </div>
            <div className='question-result-card'>
              <div className='question-text'>3 x 4 = 12</div>
              <div className='correct-icon'><CorrectIcon /></div>
            </div>
            <div className='question-result-card'>
              <div className='question-text'>3 x 4 = 12</div>
              <div className='correct-icon'><CorrectIcon /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultPage