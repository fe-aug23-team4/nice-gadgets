import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fe-aug23-team4-nice-gadgets-api.onrender.com',
});

export const axiosClient = {
  async get<T>(url: string) {
    const response = await instance.get<T>(url);

    return response.data;
  },

  async post<T>(url: string, data: unknown) {
    const response = await instance.post<T>(url, data);

    return response.data;
  },

  async patch<T>(url: string, data: unknown) {
    const response = await instance.patch<T>(url, data);

    return response.data;
  },

  async delete(url: string) {
    return instance.delete(url);
  },
};
