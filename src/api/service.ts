import { axiosClient } from '../utils/axiosClient';

import { Categories, EndPoints, ProductsAmount } from '../types/Enums';
import { Product, ProductDetail, QueryParams } from '../types/Product';

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
    page = 1, perPage = 16, sort = 'discount', order = 'asc',
  } = params || {};

  return axiosClient.get<Product[]>(
    `/${endPoints}?page=${page}&perPage=${perPage}&sort=${sort}&order=${order}`,
  );
};

export const getNewestProducts = () => {
  return axiosClient.get<Product[]>(`/${EndPoints.Product}/new`);
};

export const getProductsWithDiscount = () => {
  return axiosClient.get<Product[]>(`/${EndPoints.Product}/discount`);
};

export const getProductDetail = (endPoint: EndPoints, itemId: string) => {
  return axiosClient.get<ProductDetail>(`/${endPoint}/${itemId}`);
};

export const getRecommendedProducts = (
  endPoint: EndPoints,
  phoneId: string,
) => {
  return axiosClient.get<Product[]>(`/${endPoint}/${phoneId}/recommended`);
};
