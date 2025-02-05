import './ProductCard.style.scss';
import { NavLink } from 'react-router-dom';

interface ProductCardProps {
  img: {
    link: string,
    alt: string
  },
  title: string, 
  price: number,
  link: string
}

export const ProductCard : React.FC<ProductCardProps> = ({ img, title, price, link }) => {
  return (
    <div className='product-card'>
      <NavLink to={link} className={'product-card__nav-link'}>
        <img src={img.link} alt={img.alt} className='product-card__img' />
      </NavLink>
      <h5 className='product-card__title'>
        <NavLink to={link} className={'product-card__nav-link'}>
          {title}
        </NavLink>
      </h5>
      <p className='product-card__price p-second'>${price.toFixed(2)}</p>
    </div>
  )
}