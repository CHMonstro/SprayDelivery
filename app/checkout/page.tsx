'use client';

import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  
  // Dados de exemplo para o carrinho
  const cartItems = [
    {
      id: 1,
      name: 'Colorgin Arte Urbana 400ml - Preto',
      price: 29.90,
      quantity: 2
    },
    {
      id: 2,
      name: 'Colorgin Arte Urbana 400ml - Amarelo',
      price: 29.90,
      quantity: 1
    }
  ];
  
  // Calcular subtotal
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  // Taxa de entrega
  const deliveryFee = 15.90;
  
  // Total
  const total = subtotal + deliveryFee;
  
  // Avançar para o próximo passo
  const nextStep = () => {
    setStep(step + 1);
  };
  
  // Voltar para o passo anterior
  const prevStep = () => {
    setStep(step - 1);
  };
  
  // Finalizar pedido
  const finishOrder = () => {
    alert('Pedido finalizado com sucesso!');
    window.location.href = '/';
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">Checkout</h1>
          
          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            <div className={`flex flex-col items-center ${step >= 1 ? 'text-primary' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                1
              </div>
              <span>Endereço</span>
            </div>
            <div className="flex-grow border-t border-gray-300 self-center mx-4"></div>
            <div className={`flex flex-col items-center ${step >= 2 ? 'text-primary' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                2
              </div>
              <span>Entrega</span>
            </div>
            <div className="flex-grow border-t border-gray-300 self-center mx-4"></div>
            <div className={`flex flex-col items-center ${step >= 3 ? 'text-primary' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                3
              </div>
              <span>Pagamento</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-card p-6">
                {/* Step 1: Address */}
                {step === 1 && (
                  <div>
                    <h2 className="text-xl font-bold mb-4">Endereço de Entrega</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm mb-1">Nome Completo</label>
                        <input type="text" className="w-full p-2 border rounded" />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Telefone</label>
                        <input type="text" className="w-full p-2 border rounded" />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm mb-1">CEP</label>
                      <input type="text" className="w-full p-2 border rounded" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm mb-1">Rua</label>
                        <input type="text" className="w-full p-2 border rounded" />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Número</label>
                        <input type="text" className="w-full p-2 border rounded" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm mb-1">Complemento</label>
                        <input type="text" className="w-full p-2 border rounded" />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Bairro</label>
                        <input type="text" className="w-full p-2 border rounded" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-sm mb-1">Cidade</label>
                        <input type="text" className="w-full p-2 border rounded" />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Estado</label>
                        <select className="w-full p-2 border rounded">
                          <option value="">Selecione</option>
                          <option value="SP">São Paulo</option>
                          <option value="RJ">Rio de Janeiro</option>
                          <option value="MG">Minas Gerais</option>
                          {/* Outros estados */}
                        </select>
                      </div>
                    </div>
                    
                    <button onClick={nextStep} className="btn-primary w-full py-3">
                      Continuar para Entrega
                    </button>
                  </div>
                )}
                
                {/* Step 2: Delivery */}
                {step === 2 && (
                  <div>
                    <h2 className="text-xl font-bold mb-4">Opções de Entrega</h2>
                    
                    <div className="space-y-4 mb-6">
                      <div className="border rounded p-4 flex items-center">
                        <input type="radio" name="delivery" id="standard" className="mr-3" defaultChecked />
                        <label htmlFor="standard" className="flex-grow">
                          <div className="font-semibold">Entrega Padrão</div>
                          <div className="text-sm text-gray-600">2-3 dias úteis</div>
                        </label>
                        <div className="font-bold">R$ 15,90</div>
                      </div>
                      
                      <div className="border rounded p-4 flex items-center">
                        <input type="radio" name="delivery" id="express" className="mr-3" />
                        <label htmlFor="express" className="flex-grow">
                          <div className="font-semibold">Entrega Expressa</div>
                          <div className="text-sm text-gray-600">1 dia útil</div>
                        </label>
                        <div className="font-bold">R$ 25,90</div>
                      </div>
                      
                      <div className="border rounded p-4 flex items-center">
                        <input type="radio" name="delivery" id="pickup" className="mr-3" />
                        <label htmlFor="pickup" className="flex-grow">
                          <div className="font-semibold">Retirada na Loja</div>
                          <div className="text-sm text-gray-600">Sem custo adicional</div>
                        </label>
                        <div className="font-bold">Grátis</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <button onClick={prevStep} className="border border-primary text-primary px-6 py-2 rounded">
                        Voltar
                      </button>
                      <button onClick={nextStep} className="btn-primary px-6 py-2">
                        Continuar para Pagamento
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Step 3: Payment */}
                {step === 3 && (
                  <div>
                    <h2 className="text-xl font-bold mb-4">Método de Pagamento</h2>
                    
                    <div className="mb-6">
                      <div className="border-b pb-2 mb-4">
                        <div className="flex items-center mb-2">
                          <input type="radio" name="payment" id="credit" className="mr-3" defaultChecked />
                          <label htmlFor="credit" className="font-semibold">Cartão de Crédito</label>
                        </div>
                        
                        <div className="pl-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <label className="block text-sm mb-1">Número do Cartão</label>
                              <input type="text" className="w-full p-2 border rounded" placeholder="0000 0000 0000 0000" />
                            </div>
                            <div>
                              <label className="block text-sm mb-1">Nome no Cartão</label>
                              <input type="text" className="w-full p-2 border rounded" />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm mb-1">Data de Validade</label>
                              <input type="text" className="w-full p-2 border rounded" placeholder="MM/AA" />
                            </div>
                            <div>
                              <label className="block text-sm mb-1">CVV</label>
                              <input type="text" className="w-full p-2 border rounded" placeholder="123" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-b pb-2 mb-4">
                        <div className="flex items-center mb-2">
                          <input type="radio" name="payment" id="pix" className="mr-3" />
                          <label htmlFor="pix" className="font-semibold">PIX</label>
                        </div>
                        
                        <div className="pl-6">
                          <p className="text-sm text-gray-600 mb-2">
                            Ao finalizar o pedido, você receberá um QR Code para pagamento via PIX.
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-2">
                          <input type="radio" name="payment" id="cash" className="mr-3" />
                          <label htmlFor="cash" className="font-semibold">Dinheiro na Entrega</label>
                        </div>
                        
                        <div className="pl-6">
                          <p className="text-sm text-gray-600 mb-2">
                            Pague em dinheiro diretamente ao entregador.
                          </p>
                          <div>
                            <label className="block text-sm mb-1">Troco para</label>
                            <input type="text" className="w-full p-2 border rounded" placeholder="R$ 0,00" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <button onClick={prevStep} className="border border-primary text-primary px-6 py-2 rounded">
                        Voltar
                      </button>
                      <button onClick={finishOrder} className="btn-primary px-6 py-2">
                        Finalizar Pedido
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-card p-4">
                <h2 className="text-lg font-bold mb-4">Resumo do Pedido</h2>
                
                <div className="mb-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between py-2 border-b last:border-b-0">
                      <div>
                        <span className="font-semibold">{item.quantity}x</span> {item.name}
                      </div>
                      <div className="font-semibold">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>R$ {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxa de entrega</span>
                    <span>R$ {deliveryFee.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
