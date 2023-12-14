import { axiosClient } from '../utils/axiosClient';

import { Phone } from '../types/Phone';
import { SortBy } from '../types/SortBy';
import { PhoneDetail } from '../types/PhoneDetail';

export const getPhones = () => {
  return axiosClient.get<Phone[]>('/phones');
};

export const getPhonesWithSearchParams = (
  sortBy: SortBy,
  perPage: number,
  page: number,
) => {
  return axiosClient.get<Phone[]>(
    `/phones?sortBy=${sortBy}&perPage=${perPage}&page=${page}`,
  );
};

export const getNewestPhones = () => {
  return axiosClient.get<Phone[]>('/phones/new');
};

export const getPhonesWithDiscount = () => {
  return axiosClient.get<Phone[]>('/phones/discount');
};

export const getPhoneDetail = (phoneId: string) => {
  return axiosClient.get<PhoneDetail>(`/phones/${phoneId}`);
};

export const getRecommendedPhones = (phoneId: string) => {
  return axiosClient.get<Phone[]>(`/phones/${phoneId}/recommended`);
};
