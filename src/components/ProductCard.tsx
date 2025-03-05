import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Laptop } from '../types';

interface ProductCardProps {
  laptop: Laptop;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ laptop, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
        <img 
          src={laptop.image} 
          alt={laptop.name} 
          className="w-full h-full object-contain p-4"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-gray-900 line-clamp-2">{laptop.name}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {laptop.brand}
          </span>
        </div>
        
        <div className="text-sm text-gray-600 mb-3 line-clamp-2">
          {laptop.description}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${laptop.price.toLocaleString()}</span>
          <button 
            onClick={onAddToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
            aria-label={`Add ${laptop.name} to cart`}
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;