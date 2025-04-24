'use client';

import React from 'react';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isColorgin = product.brand === 'Colorgin';
  
  return (
    <div className={`product-card p-4 ${isColorgin ? 'colorgin-product' : ''}`}>
      {isColorgin && <span className="colorgin-badge mb-2">Colorgin</span>}
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
  );
}
