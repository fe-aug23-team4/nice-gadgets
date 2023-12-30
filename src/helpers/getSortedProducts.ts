import { Phone } from '../types/Phone';

export const getSortedProducts = (
  recievedProducts: Phone[],
  params: URLSearchParams,
) => {
  const sortBy = params.get('sort') || '';
  const visibleProducts = [...recievedProducts];

  visibleProducts.sort((product1: Phone, product2: Phone) => {
    switch (sortBy) {
      case 'title':
        return product1.name.localeCompare(product2.name);
      case 'age':
        return product2.year - product1.year;
      case 'price':
        return product1.price - product2.price;
      default:
        return 0;
    }
  });

  return visibleProducts;
};
