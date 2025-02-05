import { useState } from 'react';
import './Question.style.scss';
import questionArrowUp from '../../assets/question-arrow-up.svg';
import questionArrowDown from '../../assets/question-arrow-down.svg';

interface QuestionProps {
  question: string, 
  answer: string
}

export const Question : React.FC<QuestionProps> = ({ question, answer }) => {
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);
  const handleShowAnswer = () => {
    setIsAnswerOpen(prev => !prev);
  };

  return (
    <div className='question'>
      <div className="question__question">
        <h5 onClick={handleShowAnswer}>{question}</h5>
        {isAnswerOpen ? <img src={questionArrowDown} alt="question-arrow-down-img" className="question__img" onClick={handleShowAnswer}/> : <img src={questionArrowUp} alt="question-arrow-up-img" className="question__img" onClick={handleShowAnswer}/>}
      </div>
      <hr className='question__separator' style={isAnswerOpen ? { display: 'none' } : {}}/>
      {isAnswerOpen ? 
        <div className="answer">
          <p className="p-second">{answer}</p>
        </div>
      : ''}
    </div>
  )
}