export interface Product {
  id: number;
  category: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
}

export interface Description {
  title: string;
  text: string[];
}

export interface ProductDetail {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: Description[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}

export interface QueryParams {
  page: string;
  perPage: string;
  sort: string;
  order: 'asc' | 'desc';
}

export interface ProductWithAmount extends Product {
  amount: number;
}

export interface Detail {
  current: ProductDetail;
  additional: ProductDetail[];
}
