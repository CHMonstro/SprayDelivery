'use client';

import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/produtos/ProductCard';

// Dados de exemplo para produtos da Colorgin Arte Urbana
const featuredProducts = [
  {
    id: 1,
    name: 'Colorgin Arte Urbana 400ml - Preto',
    description: 'Tinta spray para graffiti e arte urbana com secagem rápida e ótima cobertura.',
    price: 29.90,
    image: '/images/products/colorgin-preto.jpg',
    color: 'Preto',
    brand: 'Colorgin',
    category: 'Tintas Spray',
    stock: 50,
    rating: 4.8
  },
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
  }
];

// Categorias de exemplo
const categories = [
  { id: 1, name: 'Tintas Spray', image: '/images/categories/tintas.jpg' },
  { id: 2, name: 'Marcadores', image: '/images/categories/marcadores.jpg' },
  { id: 3, name: 'Caps', image: '/images/categories/caps.jpg' },
  { id: 4, name: 'Acessórios', image: '/images/categories/acessorios.jpg' }
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="logo mb-4">Spray Delivery</h1>
            <p className="text-secondary text-xl mb-8">
              Tintas spray Colorgin Arte Urbana entregues na sua porta!
            </p>
            <a href="/produtos" className="btn-primary text-lg px-8 py-3">
              Ver Produtos
            </a>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Categorias</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map(category => (
                <a 
                  key={category.id} 
                  href={`/produtos?categoria=${category.name}`}
                  className="bg-white rounded-lg shadow-card overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-32 bg-gray-200">
                    {/* Placeholder para imagem */}
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold">{category.name}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Products Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Produtos em Destaque
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="/produtos" className="btn-primary px-6 py-2">
                Ver Todos os Produtos
              </a>
            </div>
          </div>
        </section>
        
        {/* Colorgin Brand Section */}
        <section className="bg-secondary py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Colorgin Arte Urbana
            </h2>
            <p className="text-primary text-lg mb-6">
              A melhor linha de tintas spray para graffiti e arte urbana
            </p>
            <a href="/produtos?marca=Colorgin" className="bg-primary text-secondary font-bold py-2 px-6 rounded">
              Ver Coleção
            </a>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Por que escolher o Spray Delivery?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-4">
                <div className="text-4xl mb-4 text-secondary">🚚</div>
                <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
                <p>Receba suas tintas spray em até 48 horas, dependendo da sua localização.</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-4 text-secondary">🎨</div>
                <h3 className="text-xl font-semibold mb-2">Qualidade Garantida</h3>
                <p>Trabalhamos apenas com as melhores marcas do mercado, como Colorgin Arte Urbana.</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-4 text-secondary">💰</div>
                <h3 className="text-xl font-semibold mb-2">Preços Competitivos</h3>
                <p>Oferecemos os melhores preços do mercado, com descontos para compras em quantidade.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
