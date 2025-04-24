'use client';

import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold text-primary hover:underline">
          Spray Delivery
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-gray-700 hover:text-primary">Início</Link></li>
            <li><Link href="/produtos" className="text-gray-700 hover:text-primary">Produtos</Link></li>
            <li><Link href="/carrinho" className="text-gray-700 hover:text-primary">Carrinho</Link></li>
            <li><Link href="/perfil" className="text-gray-700 hover:text-primary">Perfil</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

