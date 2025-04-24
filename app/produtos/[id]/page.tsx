'use client';

import React, { useState } from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import { Product } from '../../../types/product';

// Produto de exemplo
const product: Product = {
  id: 1,
  name: 'Colorgin Arte Urbana 400ml - Preto',
  description: 'Tinta spray Colorgin Arte Urbana na cor preta. Secagem rápida e ótima cobertura, ideal para graffiti e arte urbana. Proporciona acabamento de alta qualidade e durabilidade. Perfeita para uso em diversas superfícies como madeira, metal, alvenaria, cerâmica, gesso e muito mais.',
  price: 29.90,
  image: '/images/products/colorgin-preto.jpg',
  color: 'Preto',
  brand: 'Colorgin',
  category: 'Tintas Spray',
  stock: 50,
  rating: 4.8
};

// Produtos relacionados
const relatedProducts: Product[] = [
  {
    id: 2,
    name: 'Colorgin Arte Urbana 400ml - Amarelo',
    description: 'Tinta spray para graffiti e arte urbana com secagem rápida e ótima cobertura.',
    price: 29.90,
    image: '/images/products/colorgin-amarelo.jpg',
    color: 'Amarelo',
    brand: 'Colorgin',
    category: 'Tintas Spray',
    stock: 45,
    rating: 4.7
  },
  {
    id: 3,
    name: 'Colorgin Arte Urbana 400ml - Azul',
    description: 'Tinta spray para graffiti e arte urbana com secagem rápida e ótima cobertura.',
    price: 29.90,
    image: '/images/products/colorgin-azul.jpg',
    color: 'Azul',
    brand: 'Colorgin',
    category: 'Tintas Spray',
    stock: 40,
    rating: 4.6
  },
  {
    id: 4,
    name: 'Colorgin Arte Urbana 400ml - Vermelho',
    description: 'Tinta spray para graffiti e arte urbana com secagem rápida e ótima cobertura.',
    price: 29.90,
    image: '/images/products/colorgin-vermelho.jpg',
    color: 'Vermelho',
    brand: 'Colorgin',
    category: 'Tintas Spray',
    stock: 35,
    rating: 4.5
  }
];

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    // Lógica para adicionar ao carrinho seria implementada aqui
    alert(`${quantity} unidade(s) de ${product.name} adicionada(s) ao carrinho!`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="text-sm mb-6">
            <a href="/" className="text-gray-500 hover:text-primary">Início</a>
            <span className="mx-2">/</span>
            <a href="/produtos" className="text-gray-500 hover:text-primary">Produtos</a>
            <span className="mx-2">/</span>
            <span className="text-primary">{product.name}</span>
          </div>
          
          {/* Product Detail */}
          <div className="bg-white rounded-lg shadow-card overflow-hidden mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              {/* Product Image */}
              <div className="flex items-center justify-center">
                <img 
                  src={product.image || '/images/product-placeholder.jpg'} 
                  alt={product.name} 
                  className="max-w-full h-auto max-h-96 object-contain"
                />
              </div>
              
              {/* Product Info */}
              <div>
                {product.brand === 'Colorgin' && (
                  <span className="colorgin-badge mb-3">Colorgin</span>
                )}
                <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}>★</span>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">{product.rating} ({product.stock} em estoque)</span>
                </div>
                <p className="text-3xl font-bold text-primary mb-4">
                  R$ {product.price.toFixed(2)}
                </p>
                <p className="text-gray-700 mb-6">{product.description}</p>
                
                {/* Color */}
                {product.color && (
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Cor:</h3>
                    <div className="flex items-center">
                      <span className="mr-2">{product.color}</span>
                      <div 
                        className="w-6 h-6 rounded-full border" 
                        style={{ backgroundColor: product.color.toLowerCase() }}
                      ></div>
                    </div>
                  </div>
                )}
                
                {/* Quantity */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Quantidade:</h3>
                  <div className="flex items-center">
                    <button 
                      onClick={decreaseQuantity}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l"
                    >
                      -
                    </button>
                    <span className="bg-gray-100 px-4 py-1">{quantity}</span>
                    <button 
                      onClick={increaseQuantity}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                {/* Add to Cart Button */}
                <button 
                  onClick={addToCart}
                  className="btn-primary w-full py-3 text-lg"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Produtos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map(product => (
                <div key={product.id} className={`product-card p-4 ${product.brand === 'Colorgin' ? 'colorgin-product' : ''}`}>
                  {product.brand === 'Colorgin' && <span className="colorgin-badge mb-2">Colorgin</span>}
                  <img 
                    src={product.image || '/images/product-placeholder.jpg'} 
                    alt={product.name} 
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold">R$ {product.price.toFixed(2)}</span>
                    <button className="btn-primary">Adicionar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
