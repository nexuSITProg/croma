import './OurCollection.style.scss';
import { exampleProducts } from '../../data/exampleProducts';
import { ProductCard } from '../ProductCard/ProductCard';
import { Button } from '../Button/Button';

export const OurCollection = () => {
  return (
    <div className="wrapper">
      <div className='our-collection'>
        <h3 className='our-collection__title'>Our Collection</h3>
        <div className="our-collection__products">
          {exampleProducts.map((product) => (
            <ProductCard 
              img={product.img}
              title={product.title}
              price={product.price}
              link={product.link}
            />
          ))}
          {exampleProducts.map((product) => (
            <ProductCard 
              img={product.img}
              title={product.title}
              price={product.price}
              link={product.link}
            />
          ))}
          {exampleProducts.map((product) => (
            <ProductCard 
              img={product.img}
              title={product.title}
              price={product.price}
              link={product.link}
            />
          ))}
        </div>
        <Button type='secondary' link='collections'>
          View All
        </Button>
      </div>
    </div>
  )
}