'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-4">Spray Delivery</div>
            <p className="text-gray-400">
              Entrega de tintas spray para todo o Brasil
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Navegação</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:underline text-gray-300">Início</a></li>
                <li><a href="/produtos" className="hover:underline text-gray-300">Produtos</a></li>
                <li><a href="/sobre" className="hover:underline text-gray-300">Sobre Nós</a></li>
                <li><a href="/contato" className="hover:underline text-gray-300">Contato</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Produtos</h3>
              <ul className="space-y-2">
                <li><a href="/produtos?category=Tintas%20Spray" className="hover:underline text-gray-300">Tintas Spray</a></li>
                <li><a href="/produtos?brand=Colorgin" className="hover:underline text-gray-300">Colorgin Arte Urbana</a></li>
                <li><a href="/produtos?category=Acessórios" className="hover:underline text-gray-300">Acessórios</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">contato@spraydelivery.com.br</li>
                <li className="text-gray-400">(11) 99999-9999</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Spray Delivery. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
