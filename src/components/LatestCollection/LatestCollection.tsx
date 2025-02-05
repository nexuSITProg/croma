import { Product } from '../../types/product.types';
import { ProductCard } from '../ProductCard/ProductCard';
import { useState, useRef, useCallback } from 'react';
import React from 'react'; // Added import for React
import './LatestCollection.style.scss';

interface LatestCollectionProps {
  products: Product[]
}

export const LatestCollection: React.FC<LatestCollectionProps> = ({ products }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Оптимизируем обработчики с useCallback
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0))
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()

    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 1.5 // Добавляем множитель для более плавного скролла
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk
    }
  }, [isDragging, startX, scrollLeft])

  // Добавляем обработчики для touch-событий
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk
    }
  }, [isDragging, startX, scrollLeft])

  return (
    <section className='latest-collection'>
      <h3>Latest Collection</h3>
      <div className="scroll-section__outer">
        <div
          ref={scrollContainerRef}
          className="scroll-section__track"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
        >
          {products.map((product, index) => (
            <ProductCard 
              key={`${product.link}-${index}`} // Добавляем key для оптимизации
              img={product.img}
              title={product.title}
              price={product.price}
              link={product.link}
            />
          ))}
          {products.map((product, index) => (
            <ProductCard 
              key={`${product.link}-${index}`} // Добавляем key для оптимизации
              img={product.img}
              title={product.title}
              price={product.price}
              link={product.link}
            />
          ))}
          {products.map((product, index) => (
            <ProductCard 
              key={`${product.link}-${index}`} // Добавляем key для оптимизации
              img={product.img}
              title={product.title}
              price={product.price}
              link={product.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}