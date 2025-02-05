import { useEffect, useState } from "react";
import { Product } from "../../types/product.types";
import "./PrimaryProducts.style.scss";
import { exampleProducts } from "../../data/exampleProducts";
import { PrimaryProductCard } from "../PrimaryProductCard/PrimaryProductCard";

interface PrimaryProductsProps {
  products: Product[];
}

export const PrimaryProducts: React.FC<PrimaryProductsProps> = ({
  products,
}) => {
  const [showProducts, setShowProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (products.length > 2) {
      setShowProducts([
        products[products.length - 1],
        products[products.length - 2],
      ]);
    } else if (products.length < 2) {
      setShowProducts([
        exampleProducts[exampleProducts.length - 1],
        exampleProducts[exampleProducts.length - 2],
      ]);
    } else {
      setShowProducts(products);
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="primary-products">
        {showProducts.map((primaryProduct) => (
          <PrimaryProductCard
            img={primaryProduct.img}
            title={primaryProduct.title}
            type={primaryProduct.type}
            link={primaryProduct.link}
          />
        ))}
      </div>
    </div>
  );
};
