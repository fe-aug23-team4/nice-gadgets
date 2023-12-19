export type PhoneItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  fullPrice: number;
  year: number;
  screen?: string;
  capacity?: string;
  ram?: string;
  color?: string;
  description?: {
    title: string;
    text: string[];
  }[];
};
