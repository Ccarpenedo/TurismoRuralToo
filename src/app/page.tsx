'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden rounded-xl">
        <Image 
          src="/images/chale_rural.jpeg" 
          alt="Chalé Rural" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-transparent flex flex-col justify-center p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Turismo Rural
          </h1>
          <p className="text-xl text-white max-w-xl">
            Guia completo sobre a regularidade da atividade: quando atuar como pessoa física e quando é necessário CNPJ
          </p>
          <div className="mt-8">
            <Link href="/calculadora" className="btn btn-primary">
              Calcular meu enquadramento
            </Link>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="card bg-green-50">
        <h2>Bem-vindo ao Portal do Turismo Rural</h2>
        <p>
          O turismo rural é uma atividade que vem crescendo no Brasil, oferecendo aos produtores rurais 
          uma alternativa de renda complementar e aos turistas uma experiência autêntica de contato com 
          a natureza e a vida no campo.
        </p>
        <p className="mt-4">
          No entanto, muitos produtores rurais têm dúvidas sobre a regularidade da atividade, 
          especialmente sobre quando podem atuar como pessoa física e quando precisam constituir um CNPJ.
        </p>
        <p className="mt-4">
          Este portal foi desenvolvido para orientar produtores rurais sobre as legislações aplicáveis, 
          os requisitos para cada modalidade e oferecer uma ferramenta interativa para auxiliar na tomada de decisão.
        </p>
      </div>

      {/* Main Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <div className="relative h-48 rounded-t-lg overflow-hidden">
            <Image 
              src="/images/casa_rural_historica.jpeg" 
              alt="Legislações" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Legislações</h3>
            </div>
          </div>
          <div className="p-6">
            <p>
              Conheça as principais legislações que regulamentam o turismo rural no Brasil, 
              incluindo a Lei Geral do Turismo, o Cadastur, as regras para segurados especiais 
              da previdência social e a legislação específica do Paraná para TRAF.
            </p>
            <div className="mt-4">
              <Link href="/legislacoes" className="btn btn-secondary">
                Ver legislações
              </Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="relative h-48 rounded-t-lg overflow-hidden">
            <Image 
              src="/images/trilha_rural.jpeg" 
              alt="Requisitos" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-green-900/50 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Requisitos</h3>
            </div>
          </div>
          <div className="p-6">
            <p>
              Veja um quadro comparativo detalhado dos requisitos para atuar como pessoa física 
              ou constituir um CNPJ no turismo rural, incluindo aspectos tributários, previdenciários, 
              fiscais e operacionais.
            </p>
            <div className="mt-4">
              <Link href="/requisitos" className="btn btn-secondary">
                Ver requisitos
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <div className="relative h-48 rounded-t-lg overflow-hidden">
            <Image 
              src="/images/cavalgada_rural.jpeg" 
              alt="Calculadora" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-yellow-900/50 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Calculadora</h3>
            </div>
          </div>
          <div className="p-6">
            <p>
              Utilize nossa calculadora interativa para determinar se você deve abrir um CNPJ 
              ou pode atuar como pessoa física no turismo rural, com base nas características 
              específicas do seu empreendimento.
            </p>
            <div className="mt-4">
              <Link href="/calculadora" className="btn btn-secondary">
                Acessar calculadora
              </Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="relative h-48 rounded-t-lg overflow-hidden">
            <Image 
              src="/images/cafe_rural.webp" 
              alt="Café Rural" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Benefícios do Turismo Rural</h3>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-2">
              <li>✅ Diversificação da renda na propriedade rural</li>
              <li>✅ Valorização da cultura e dos produtos locais</li>
              <li>✅ Preservação do patrimônio natural e cultural</li>
              <li>✅ Geração de empregos e desenvolvimento local</li>
              <li>✅ Melhoria da qualidade de vida no campo</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="card bg-yellow-50">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2>Não sabe por onde começar?</h2>
            <p className="mt-2">
              Utilize nossa calculadora interativa para descobrir se você deve abrir um CNPJ ou pode 
              atuar como pessoa física no turismo rural, com base nas características específicas do 
              seu empreendimento.
            </p>
            <div className="mt-4">
              <Link href="/calculadora" className="btn btn-primary">
                Calcular meu enquadramento
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image 
                src="/images/chale_rural.jpeg" 
                alt="Turismo Rural" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
