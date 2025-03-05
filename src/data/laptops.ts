import { Laptop } from '../types';

export const laptops: Laptop[] = [
  {
    id: '1',
    name: 'MacBook Pro 16-inch',
    brand: 'Apple',
    price: 2399,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80',
    description: 'Supercharged for pros. The most powerful MacBook Pro ever is here.',
    specs: {
      processor: 'Apple M2 Pro',
      ram: '16GB',
      storage: '512GB SSD',
      display: '16-inch Liquid Retina XDR',
      graphics: 'Apple M2 Pro GPU'
    }
  },
  {
    id: '2',
    name: 'Dell XPS 15',
    brand: 'Dell',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
    description: 'Stunning 4K display with InfinityEdge. Powerful performance in a thin and light design.',
    specs: {
      processor: 'Intel Core i7-12700H',
      ram: '16GB',
      storage: '1TB SSD',
      display: '15.6-inch 4K UHD+',
      graphics: 'NVIDIA GeForce RTX 3050 Ti'
    }
  },
  {
    id: '3',
    name: 'HP Spectre x360',
    brand: 'HP',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80',
    description: 'Convertible 2-in-1 laptop with stunning OLED display and premium design.',
    specs: {
      processor: 'Intel Core i7-1255U',
      ram: '16GB',
      storage: '512GB SSD',
      display: '13.5-inch OLED Touch',
      graphics: 'Intel Iris Xe'
    }
  },
  {
    id: '4',
    name: 'Lenovo ThinkPad X1 Carbon',
    brand: 'Lenovo',
    price: 1699,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Legendary business laptop with military-grade durability and exceptional keyboard.',
    specs: {
      processor: 'Intel Core i7-1270P',
      ram: '16GB',
      storage: '1TB SSD',
      display: '14-inch WUXGA IPS',
      graphics: 'Intel Iris Xe'
    }
  },
  {
    id: '5',
    name: 'ASUS ROG Zephyrus G14',
    brand: 'ASUS',
    price: 1649,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80',
    description: 'Compact gaming powerhouse with amazing performance and battery life.',
    specs: {
      processor: 'AMD Ryzen 9 6900HS',
      ram: '16GB',
      storage: '1TB SSD',
      display: '14-inch QHD 120Hz',
      graphics: 'NVIDIA GeForce RTX 3060'
    }
  },
  {
    id: '6',
    name: 'Microsoft Surface Laptop 5',
    brand: 'Microsoft',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Sleek and stylish with a vibrant PixelSense display and all-day battery life.',
    specs: {
      processor: 'Intel Core i5-1235U',
      ram: '8GB',
      storage: '256GB SSD',
      display: '13.5-inch PixelSense',
      graphics: 'Intel Iris Xe'
    }
  },
  {
    id: '7',
    name: 'Razer Blade 15',
    brand: 'Razer',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Premium gaming laptop with CNC aluminum chassis and powerful components.',
    specs: {
      processor: 'Intel Core i7-12800H',
      ram: '16GB',
      storage: '1TB SSD',
      display: '15.6-inch QHD 240Hz',
      graphics: 'NVIDIA GeForce RTX 3070 Ti'
    }
  },
  {
    id: '8',
    name: 'Acer Swift 5',
    brand: 'Acer',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    description: 'Ultra-lightweight laptop with antimicrobial coating and fast charging.',
    specs: {
      processor: 'Intel Core i7-1260P',
      ram: '16GB',
      storage: '512GB SSD',
      display: '14-inch FHD IPS Touch',
      graphics: 'Intel Iris Xe'
    }
  },
  {
    id: '9',
    name: 'LG Gram 17',
    brand: 'LG',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1551&q=80',
    description: 'Incredibly light 17-inch laptop with long battery life and large display.',
    specs: {
      processor: 'Intel Core i7-1260P',
      ram: '16GB',
      storage: '1TB SSD',
      display: '17-inch WQXGA IPS',
      graphics: 'Intel Iris Xe'
    }
  },
  {
    id: '10',
    name: 'Samsung Galaxy Book3 Pro',
    brand: 'Samsung',
    price: 1449,
    image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Ultra-thin laptop with vibrant AMOLED display and seamless Galaxy ecosystem integration.',
    specs: {
      processor: 'Intel Core i7-1360P',
      ram: '16GB',
      storage: '512GB SSD',
      display: '14-inch 3K AMOLED',
      graphics: 'Intel Iris Xe'
    }
  },
  {
    id: '11',
    name: 'Alienware m17 R5',
    brand: 'Dell',
    price: 2799,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    description: 'High-performance gaming laptop with advanced cooling and customizable AlienFX lighting.',
    specs: {
      processor: 'AMD Ryzen 9 6900HX',
      ram: '32GB',
      storage: '1TB SSD',
      display: '17.3-inch FHD 360Hz',
      graphics: 'NVIDIA GeForce RTX 3080 Ti'
    }
  },
  {
    id: '12',
    name: 'MacBook Air M2',
    brand: 'Apple',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Redesigned thin and light laptop with M2 chip and all-day battery life.',
    specs: {
      processor: 'Apple M2',
      ram: '8GB',
      storage: '256GB SSD',
      display: '13.6-inch Liquid Retina',
      graphics: 'Apple M2 GPU'
    }
  }
];