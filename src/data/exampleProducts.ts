import { Product } from "../types/product.types"
import hero from '../assets/Hero.png';

export const exampleProducts : Product[] = [
  {
    title: 'Galee Chain',
    type: 'Necklaces collection',
    price: 100,
    img: {
      link: hero,
      alt: 'example'
    },
    characteristics: {
      material: '18k Solid Gold with Onyx Stone',
      finishing: 'Polished to a high sheen for a refined',
      weight: 3,
      width: {
        base: 5,
        top: 9
      },
      availableSize: {
        country: 'US',
        sizes: [5,6,7,8,9]
      }
    },
    link: 'collection/example-1'
  },
  {
    title: 'Roxenne',
    type: 'Earrings collection',
    price: 100,
    img: {
      link: hero,
      alt: 'example'
    },
    characteristics: {
      material: '18k Solid Gold with Onyx Stone',
      finishing: 'Polished to a high sheen for a refined',
      weight: 3,
      width: {
        base: 5,
        top: 9
      },
      availableSize: {
        country: 'US',
        sizes: [5,6,7,8,9]
      }
    },
    link: 'collection/example-2'
  }
]