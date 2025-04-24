'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Item do carrinho
interface CartItem {
  id: number;
  name: string;
  price: number;
  image?: string;
  quantity: number;
}

// Dados de exemplo para o carrinho
const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: 'Colorgin Arte Urbana 400ml - Preto',
    price: 29.90,
    image: '/images/products/colorgin-preto.jpg',
    quantity: 2
  },
  {
    id: 2,
    name: 'Colorgin Arte Urbana 400ml - Amarelo',
    price: 29.90,
    image: '/images/products/colorgin-amarelo.jpg',
    quantity: 1
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  
  // Calcular subtotal
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  // Taxa de entrega
  const deliveryFee = 15.90;
  
  // Total
  const total = subtotal + deliveryFee;
  
  // Atualizar quantidade
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  // Remover item
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">Carrinho de Compras</h1>
          
          {cartItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-card p-8 text-center">
              <p className="text-xl mb-4">Seu carrinho está vazio</p>
              <a href="/produtos" className="btn-primary inline-block px-6 py-2">
                Continuar Comprando
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-card overflow-hidden">
                  {cartItems.map(item => (
                    <div key={item.id} className="p-4 border-b last:border-b-0 flex items-center">
                      <div className="w-20 h-20 flex-shrink-0">
                        <img 
                          src={item.image || '/images/product-placeholder.jpg'} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-grow">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-600">R$ {item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l"
                        >
                          -
                        </button>
                        <span className="bg-gray-100 px-3 py-1">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r"
                        >
                          +
                        </button>
                      </div>
                      <div className="ml-4 text-right">
                        <p className="font-bold">R$ {(item.price * item.quantity).toFixed(2)}</p>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 text-sm mt-1"
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Order Summary */}
              <div>
                <div className="bg-white rounded-lg shadow-card p-4">
                  <h2 className="text-lg font-bold mb-4">Resumo do Pedido</h2>
                  
                  <div className="border-b pb-4 mb-4">
                    <div className="flex justify-between mb-2">
                      <span>Subtotal</span>
                      <span>R$ {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxa de entrega</span>
                      <span>R$ {deliveryFee.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between font-bold text-lg mb-6">
                    <span>Total</span>
                    <span>R$ {total.toFixed(2)}</span>
                  </div>
                  
                  <a href="/checkout" className="btn-primary block text-center py-3">
                    Finalizar Compra
                  </a>
                  
                  <a href="/produtos" className="text-primary text-center block mt-4">
                    Continuar Comprando
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
