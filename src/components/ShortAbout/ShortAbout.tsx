import './ShortAbout.style.scss';
import example from '../../assets/Hero.png';
import { NavLink } from 'react-router-dom';

export const ShortAbout = () => {
  return (
    <div className='short-about'>
      <img src={example} alt="example" className='short-about__img'/>
      <div className="short-about__content">
        <div className="short-about__content__header">
          <h6>About Croma</h6>
          <h6>Since 1988</h6>
        </div>
        <div className="short-about__content__text">
          <h3>Jewelry is an Art Form and a Legacy</h3>
          <p className='p-third'>We design each piece to capture the timeless allure of precious gold and gemstones, bringing a sense of luxury and distinction to those who wear it. Every piece in our collection is the result of thoughtful craftsmanship, combining contemporary aesthetics with the heritage of fine jewelry making.</p>
          <p className='p-third'>We ensure that each piece is designed and crafted to perfection using only the finest materials. Whether you're celebrating life's most cherished moments or simply embracing your style, Croma brings you a collection that speaks elegance in every detail.</p>
        </div>
        <span className='p-second'><NavLink to={'about'} className={'primary-product__card__nav-link'}>
          See more {'->'}
        </NavLink></span>
      </div>
    </div>
  )
}