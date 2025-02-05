import './Subscribe.style.scss';
import { Button } from '../Button/Button';
import example from '../../assets/Hero.png';

export const Subscribe = () => {
  return (
    <div className='subscribe'>
      <h4 className='subscribe__title'>Join our mail list and be the first to know about new arrivals and special discounts</h4>
      <input type="text" name="" id="" placeholder="Your Email" className="subscribe__input" />
      <Button type={'primary'} link='/'>
        Subscribe
      </Button>
      <img src={example} alt="example" className="subscribe__img subscribe__img__first" />
      <img src={example} alt="example" className="subscribe__img subscribe__img__second" />
      <img src={example} alt="example" className="subscribe__img subscribe__img__third" />
      <img src={example} alt="example" className="subscribe__img subscribe__img__fourth" />
    </div>
  )
}