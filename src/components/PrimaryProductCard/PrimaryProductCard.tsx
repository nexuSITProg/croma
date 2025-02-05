import './PrimaryProductCard.style.scss';
import { NavLink } from 'react-router-dom';

interface PrimaryProductCardProps {
  img: {
    link: string,
    alt: string
  },
  title: string, 
  type: string, 
  link: string
}

export const PrimaryProductCard : React.FC<PrimaryProductCardProps> = ({ img, title, type, link }) => {
  return (
    <div className='primary-product__card'>
      <div className="primary-product__card__content">
        <div>
          <h3>{title}</h3>
          <p className='p-first'>{type}</p>
        </div>
        <span className='primary-product__card__text p-second'><NavLink to={link} className={'primary-product__card__nav-link'}>
          See all collection {'->'}
        </NavLink></span>
      </div>
      <img src={img.link} alt={img.alt} className='primary-product__card__img'/>
    </div>
  )
}