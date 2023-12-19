export enum Categories {
  All = 'all',
  Phones = 'phones',
  Tablets = 'tablets',
  Accessories = 'accessories',
}

export enum EndPoints {
  Product = 'products',
  Phones = 'phones',
  Tablets = 'tablets',
  Accessories = 'accessories',
}

type ProductsAmountKey = 'phones' | 'tablets' | 'accessories';

export type ProductsAmount = {
  [key in ProductsAmountKey]: number;
};
