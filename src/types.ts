export interface Laptop {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  specs: {
    processor: string;
    ram: string;
    storage: string;
    display: string;
    graphics: string;
  };
}