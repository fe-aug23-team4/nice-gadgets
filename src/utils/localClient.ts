import { Phone } from '../types/Phone';

export const localClient = {
  read: (key: string) => {
    const data = window.localStorage.getItem(key);

    try {
      return data && JSON.parse(data);
    } catch (error) {
      return null;
    }
  },

  write: (key: string, data: any) => {
    window.localStorage.setItem(key, JSON.stringify(data, null, 2));
  },

  add: (key: string, data: Phone) => {
    const existingData = localClient.read(key);

    existingData.push(data);
    window.localStorage.setItem(key, JSON.stringify(existingData, null, 2));
  },

  update: (key: string, data: Phone) => {
    const existingData = localClient.read(key);
    const newData = existingData.map((item: Phone) => {
      return item.id === data.id
        ? data
        : item;
    });

    window.localStorage.setItem(key, JSON.stringify(newData, null, 2));
  },

  delete: (key: string, id: number) => {
    const existingData = localClient.read(key);
    const newData = existingData.filter((item: Phone) => item.id !== id);

    window.localStorage.setItem(key, JSON.stringify(newData, null, 2));
  },

  find: (key: string, id: number) => {
    const existingData: Phone[] = localClient.read(key);

    return !!existingData.find((item: Phone) => item.id === id);
  },

  init: (key: string, initialData: any) => {
    if (!localClient.read(key)) {
      localClient.write(key, initialData);
    }
  },
};
