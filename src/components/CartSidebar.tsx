import React from 'react';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { Laptop } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: (Laptop & { quantity: number })[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  onRemove,
  onUpdateQuantity
}) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  if (!isOpen) return null;
  
  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white z-50 shadow-xl overflow-hidden flex flex-col">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <ShoppingCart size={24} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-700">Your cart is empty</h3>
            <p className="text-gray-500 mt-1">Start shopping to add items to your cart</p>
            <button 
              onClick={onClose}
              className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-4">
                {cartItems.map(item => (
                  <li key={item.id} className="flex gap-4 pb-4 border-b border-gray-100">
                    <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-medium text-gray-800 line-clamp-1">{item.name}</h4>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="text-gray-400 hover:text-red-500"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      
                      <div className="text-sm text-gray-500 mb-2">{item.brand}</div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border border-gray-200 rounded-md">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 text-gray-500 hover:bg-gray-100"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-2 py-1">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 text-gray-500 hover:bg-gray-100"
                            aria-label="Increase quantity"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        
                        <span className="font-medium">${(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold mb-4">
                <span>Total</span>
                <span>${totalPrice.toLocaleString()}</span>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

// Add ShoppingCart icon for empty cart state
const ShoppingCart = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="8" cy="21" r="1"/>
    <circle cx="19" cy="21" r="1"/>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
  </svg>
);

export default CartSidebar;