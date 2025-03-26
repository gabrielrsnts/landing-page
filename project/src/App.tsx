import React, { useState } from 'react';
import { Star, Shield, Clock, Heart, Zap, ShoppingCart, ChevronDown, Timer } from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quanto tempo demora para fazer efeito?",
      answer: "Os efeitos começam em aproximadamente 30 minutos após o consumo e podem durar até 4 horas."
    },
    {
      question: "Qual a composição?",
      answer: "100% natural, composto por mel puro, própolis, geleia real e extratos naturais energizantes."
    },
    {
      question: "Tem contraindicações?",
      answer: "Consulte seu médico antes de usar se você for alérgico a produtos apícolas ou tiver condições médicas específicas."
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      text: "Incrível! Superou todas as minhas expectativas.",
      rating: 5
    },
    {
      name: "Ana Paula",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      text: "Produto fantástico, recomendo a todos!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-red-900">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center text-white px-4">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=1600" 
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 text-golden animate-fade-in">
            Melzinho do Amor
          </h1>
          <p className="text-2xl mb-8 text-golden-light">
            A energia e o prazer que você merece
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-xl font-bold transition-all transform hover:scale-105 flex items-center gap-2">
              <ShoppingCart className="w-6 h-6" />
              Comprar Agora
            </button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20 bg-black/80 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Benefícios Exclusivos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-b from-red-900/50 to-black/50">
              <Heart className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h3 className="text-xl font-bold mb-2">Aumenta a Disposição</h3>
              <p>Energia instantânea para momentos especiais</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-b from-red-900/50 to-black/50">
              <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-xl font-bold mb-2">Resultados Rápidos</h3>
              <p>Efeitos em apenas 30 minutos</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-b from-red-900/50 to-black/50">
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-2">Longa Duração</h3>
              <p>Até 4 horas de energia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-black/90 to-red-900/90 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">O que dizem nossos clientes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black/30 p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="italic">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-black/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-green-500" />
          <h2 className="text-4xl font-bold mb-6">Satisfação Garantida</h2>
          <p className="text-xl mb-8">
            Se não ficar 100% satisfeito, devolvemos seu dinheiro
          </p>
          <div className="flex justify-center gap-4 items-center">
            <Timer className="w-6 h-6 text-red-500" />
            <p className="text-red-500 font-bold">
              Oferta por tempo limitado!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black/90 to-red-900/90 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Perguntas Frequentes</h2>
          <div className="max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full flex justify-between items-center p-4 bg-black/30 rounded-lg"
                  onClick={() => setIsOpen(isOpen === index ? null : index)}
                >
                  <span className="font-bold">{faq.question}</span>
                  <ChevronDown className={`w-6 h-6 transition-transform ${isOpen === index ? 'rotate-180' : ''}`} />
                </button>
                {isOpen === index && (
                  <div className="p-4 bg-black/20 rounded-b-lg mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Aproveite Nossa Oferta Especial</h2>
          <p className="text-2xl mb-8">Leve 3, Pague 2!</p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-xl font-bold transition-all transform hover:scale-105 flex items-center gap-2 mx-auto">
            <ShoppingCart className="w-6 h-6" />
            Garantir Minha Oferta
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;