import { axiosClient } from '../utils/axiosClient';

import { Phone } from '../types/Phone';
import { PhoneDetail } from '../types/PhoneDetail';
import { Categories, EndPoints, ProductsAmount } from '../types/Enums';
import { Product, QueryParams } from '../types/Product';

export const getPhones = () => {
  return axiosClient.get<Phone[]>('/phones');
};

export const getProductAmount = (category?: Categories) => {
  return axiosClient.get<ProductsAmount>(
    `/${EndPoints.Product}/amount/${category}`,
  );
};

export const getProductsWithSearchParams = (
  endPoints: EndPoints,
  params?: QueryParams,
) => {
  const {
    page = 1, perPage = 8, sort = 'discount', order = 'asc',
  } = params || {};

  return axiosClient.get<Product[]>(
    `/${endPoints}?page=${page}&perPage=${perPage}&sort=${sort}&order=${order}`,
  );
};

export const getNewestProducts = () => {
  return axiosClient.get<Phone[]>(`/${EndPoints.Product}/new`);
};

export const getProductsWithDiscount = () => {
  return axiosClient.get<Phone[]>(`/${EndPoints.Product}/discount`);
};

export const getProductDetail = (endPoint: EndPoints, itemId: string) => {
  return axiosClient.get<PhoneDetail>(`/${endPoint}/${itemId}`);
};

export const getRecommendedProducts = (
  endPoint: EndPoints,
  phoneId: string,
) => {
  return axiosClient.get<Phone[]>(`/${endPoint}/${phoneId}/recommended`);
};
