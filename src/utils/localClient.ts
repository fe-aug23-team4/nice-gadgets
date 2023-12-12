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
    window.localStorage.setItem(key, JSON.stringify(data));
  },

  init: (key: string, initialData: any) => {
    if (!localClient.read(key)) {
      localClient.write(key, initialData);
    }
  },
};
