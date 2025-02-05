export interface Product {
  title: string, 
  type: string,
  price: number,
  img: {
    link: string,
    alt: string
  },
  characteristics: JewelryCharacteristics,
  link: string
}

export interface JewelryCharacteristics {
  material: string, 
  finishing: string,
  weight: number, 
  width: {
    base: number, 
    top: number
  }
  availableSize: {
    country: string,
    sizes: number[]
  }
}