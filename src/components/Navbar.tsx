import React from 'react';
import { ShoppingCart, Search, Laptop } from 'lucide-react';

interface NavbarProps {
  toggleCart: () => void;
  cartItemCount: number;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  toggleCart, 
  cartItemCount, 
  searchTerm, 
  setSearchTerm 
}) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Laptop size={28} className="text-blue-600" />
            <span className="text-xl font-bold text-gray-800">LaptopHub</span>
          </div>
          
          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-6 relative">
            <input
              type="text"
              placeholder="Search for laptops..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search size={20} className="absolute right-3 text-gray-400" />
          </div>
          
          {/* Cart Button */}
          <button 
            onClick={toggleCart}
            className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Open shopping cart"
          >
            <ShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
        
        {/* Mobile Search */}
        <div className="mt-3 md:hidden relative">
          <input
            type="text"
            placeholder="Search for laptops..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;