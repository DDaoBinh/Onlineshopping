import React, { useState } from 'react';
import { ShoppingCart, Filter, Laptop, Search, X } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
import { laptops } from './data/laptops';
import { Laptop as LaptopType } from './types';

function App() {
  const [cart, setCart] = useState<(LaptopType & { quantity: number })[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const brands = Array.from(new Set(laptops.map(laptop => laptop.brand)));

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const addToCart = (laptop: LaptopType) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === laptop.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === laptop.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevCart, { ...laptop, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
  };

  const filteredLaptops = laptops.filter(laptop => {
    const matchesSearch = laptop.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          laptop.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = laptop.price >= priceRange[0] && laptop.price <= priceRange[1];
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(laptop.brand);
    
    return matchesSearch && matchesPrice && matchesBrand;
  });

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        toggleCart={toggleCart} 
        cartItemCount={totalItems}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Explore Laptops</h1>
          <button 
            onClick={toggleFilter}
            className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm border border-gray-200 md:hidden"
          >
            <Filter size={20} />
            <span>Filters</span>
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 bg-white p-4 rounded-lg shadow-sm border border-gray-200 h-fit">
            <h2 className="font-semibold text-lg mb-4">Filters</h2>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Price Range</h3>
              <div className="flex items-center gap-2">
                <span>${priceRange[0]}</span>
                <input 
                  type="range" 
                  min="0" 
                  max="5000" 
                  value={priceRange[0]} 
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full"
                />
                <span>${priceRange[1]}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="5000" 
                value={priceRange[1]} 
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Brands</h3>
              <div className="space-y-2">
                {brands.map(brand => (
                  <label key={brand} className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                      className="rounded"
                    />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          
          {/* Filters - Mobile */}
          {isFilterOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
              <div className="absolute right-0 top-0 h-full w-80 bg-white p-4 overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-lg">Filters</h2>
                  <button onClick={toggleFilter} className="p-1">
                    <X size={24} />
                  </button>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <div className="flex items-center gap-2">
                    <span>${priceRange[0]}</span>
                    <input 
                      type="range" 
                      min="0" 
                      max="5000" 
                      value={priceRange[0]} 
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full"
                    />
                    <span>${priceRange[1]}</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="5000" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Brands</h3>
                  <div className="space-y-2">
                    {brands.map(brand => (
                      <label key={brand} className="flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          checked={selectedBrands.includes(brand)}
                          onChange={() => handleBrandChange(brand)}
                          className="rounded"
                        />
                        <span>{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={toggleFilter}
                  className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}
          
          {/* Product Grid */}
          <div className="flex-1">
            {filteredLaptops.length === 0 ? (
              <div className="text-center py-12">
                <Laptop size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-medium text-gray-700">No laptops found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your filters or search term</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredLaptops.map(laptop => (
                  <ProductCard 
                    key={laptop.id} 
                    laptop={laptop} 
                    onAddToCart={() => addToCart(laptop)} 
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={toggleCart} 
        cartItems={cart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
}

export default App;