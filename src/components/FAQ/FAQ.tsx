import './FAQ.style.scss';
import example from '../../assets/Hero.png';
import { Question } from '../Question/Question';
import { questions } from '../../data/faq.data';

export const FAQ = () => {
  return (
    <div className="wrapper">
      <div className='faq'>
        <div className="faq__content">
          <h3>Asked by Others</h3>
          <div className="faq__content__questions">
            {questions.map(question => (
              <Question 
                question={question.question}
                answer={question.answer}
              />
            ))}
          </div>
        </div>
        <img src={example} alt="example" className="faq__img" />
      </div>
    </div>
  )
}