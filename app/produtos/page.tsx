'use client';
import { useState } from 'react';
import { Product } from '@/types/product';
import Image from 'next/image';

// Simulação dos produtos (mantido como está)
const produtos: Product[] = [/* ... */];

// Filtros disponíveis (mantido como está)
const marcas = ['Todas', 'Montana', 'Colorgin', 'Ironlak', 'MTN', 'Posca', 'Universal'];
const cores = ['Todas', 'Preto', 'Azul', 'Vermelho', 'Verde', 'Amarelo', 'Laranja', 'Branco'];
const categorias = ['Todas', 'Tintas Spray', 'Marcadores', 'Caps'];

export default function ProdutosPage() {
  const [filtroMarca, setFiltroMarca] = useState<string>('Todas');
  const [filtroCor, setFiltroCor] = useState<string>('Todas');
  const [filtroCategoria, setFiltroCategoria] = useState<string>('Todas');
  const [ordenacao, setOrdenacao] = useState<string>('relevancia');
  const [termoBusca, setTermoBusca] = useState<string>('');

  const produtosFiltrados = produtos.filter(produto => {
    const matchMarca = filtroMarca === 'Todas' || produto.brand === filtroMarca;
    const matchCor = filtroCor === 'Todas' || produto.color === filtroCor;
    const matchCategoria = filtroCategoria === 'Todas' || produto.category === filtroCategoria;
    const matchBusca = termoBusca === '' || 
      produto.name.toLowerCase().includes(termoBusca.toLowerCase()) || 
      produto.brand.toLowerCase().includes(termoBusca.toLowerCase());
    
    return matchMarca && matchCor && matchCategoria && matchBusca;
  });

  const produtosOrdenados = [...produtosFiltrados].sort((a, b) => {
    switch (ordenacao) {
      case 'preco-menor':
        return a.price - b.price;
      case 'preco-maior':
        return b.price - a.price;
      case 'nome-az':
        return a.name.localeCompare(b.name);
      case 'nome-za':
        return b.name.localeCompare(a.name);
      case 'avaliacao':
        return (b.rating || 0) - (a.rating || 0);
      default:
        return 0;
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Produtos</h1>

      {/* Barra de busca */}
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Buscar produtos..."
          className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filtros - mantido igual */}

        {/* Lista de Produtos */}
        <div className="w-full md:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <p className="text-gray-600 mb-2 sm:mb-0">
              {produtosOrdenados.length} produtos encontrados
            </p>
            <div className="flex items-center">
              <span className="mr-2 text-gray-600">Ordenar por:</span>
              <select 
                className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={ordenacao}
                onChange={(e) => setOrdenacao(e.target.value)}
              >
                <option value="relevancia">Relevância</option>
                <option value="preco-menor">Menor Preço</option>
                <option value="preco-maior">Maior Preço</option>
                <option value="nome-az">Nome (A-Z)</option>
                <option value="nome-za">Nome (Z-A)</option>
                <option value="avaliacao">Melhor Avaliação</option>
              </select>
            </div>
          </div>

          {produtosOrdenados.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {produtosOrdenados.map((produto) => (
                <div key={produto.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                  <div className="h-48 bg-gray-100 relative">
                    <Image 
                      src={produto.image} 
                      alt={produto.name} 
                      layout="fill" 
                      objectFit="cover" 
                      className="rounded-t-lg"
                    />
                    <div className="absolute bottom-0 right-0 bg-purple-600 text-white text-xs font-bold px-2 py-1">
                      {produto.brand}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 line-clamp-2">{produto.name}</h3>
                    <div className="flex items-center mb-2">
                      <div 
                        className="w-4 h-4 rounded-full mr-1 border border-gray-300" 
                        style={{ backgroundColor: produto.color.toLowerCase() }}
                      ></div>
                      <span className="text-sm text-gray-600">{produto.color}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-purple-700">
                        R$ {produto.price.toFixed(2)}
                      </span>
                      <button className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <p className="text-gray-600 text-lg">Nenhum produto encontrado com os filtros selecionados.</p>
              <button 
                className="mt-4 py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                onClick={() => {
                  setFiltroMarca('Todas');
                  setFiltroCor('Todas');
                  setFiltroCategoria('Todas');
                  setTermoBusca('');
                }}
              >
                Limpar Filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
