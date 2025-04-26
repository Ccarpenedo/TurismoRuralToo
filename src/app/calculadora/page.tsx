'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Calculadora() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    atividadePrincipal: '',
    faturamentoAnual: '',
    percentualTurismo: '',
    tipoAtividade: [],
    emiteNotas: '',
    contratarFuncionarios: '',
    acessoCredito: '',
    seguradoEspecial: ''
  });
  
  const [resultado, setResultado] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let updatedActivities = [...formData.tipoAtividade];
    
    if (checked) {
      updatedActivities.push(name);
    } else {
      updatedActivities = updatedActivities.filter(activity => activity !== name);
    }
    
    setFormData({
      ...formData,
      tipoAtividade: updatedActivities
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const calculateResult = () => {
    // Sistema de pontuação para determinar a recomendação
    let pontosCNPJ = 0;
    let pontosPF = 0;

    // Atividade principal
    if (formData.atividadePrincipal === 'turismo') {
      pontosCNPJ += 3;
    } else {
      pontosPF += 2;
    }

    // Faturamento anual
    const faturamento = parseInt(formData.faturamentoAnual);
    if (faturamento <= 30000) {
      pontosPF += 3;
    } else if (faturamento <= 81000) {
      pontosCNPJ += 1;
      pontosPF += 1;
    } else if (faturamento <= 360000) {
      pontosCNPJ += 3;
    } else {
      pontosCNPJ += 5;
    }

    // Percentual de renda do turismo
    const percentual = parseInt(formData.percentualTurismo);
    if (percentual <= 20) {
      pontosPF += 3;
    } else if (percentual <= 40) {
      pontosPF += 2;
      pontosCNPJ += 1;
    } else if (percentual <= 60) {
      pontosPF += 1;
      pontosCNPJ += 2;
    } else {
      pontosCNPJ += 3;
    }

    // Tipo de atividade
    if (formData.tipoAtividade.includes('hospedagem')) {
      pontosCNPJ += 2;
    }
    if (formData.tipoAtividade.includes('alimentacao')) {
      pontosCNPJ += 1;
    }
    if (formData.tipoAtividade.includes('eventos')) {
      pontosCNPJ += 2;
    }
    if (formData.tipoAtividade.includes('aventura')) {
      pontosCNPJ += 1;
    }
    if (formData.tipoAtividade.includes('producao')) {
      pontosPF += 2;
    }
    if (formData.tipoAtividade.includes('artesanato')) {
      pontosPF += 1;
    }

    // Emissão de notas fiscais
    if (formData.emiteNotas === 'sim') {
      pontosCNPJ += 2;
    } else {
      pontosPF += 1;
    }

    // Contratação de funcionários
    if (formData.contratarFuncionarios === 'sim') {
      pontosCNPJ += 3;
    } else {
      pontosPF += 1;
    }

    // Acesso a crédito
    if (formData.acessoCredito === 'sim') {
      pontosCNPJ += 2;
    }

    // Segurado especial
    if (formData.seguradoEspecial === 'sim') {
      pontosPF += 3;
    }

    // Determinar resultado
    let recomendacao = '';
    let justificativa = [];
    let tipoRecomendado = '';

    if (pontosCNPJ > pontosPF) {
      tipoRecomendado = 'cnpj';
      
      // Determinar tipo de CNPJ recomendado
      if (faturamento <= 81000 && formData.contratarFuncionarios !== 'muitos') {
        recomendacao = 'MEI (Microempreendedor Individual)';
        justificativa = [
          'Seu faturamento está dentro do limite para MEI (até R$ 81.000,00/ano)',
          'Simplificação tributária e baixo custo de manutenção',
          'Possibilidade de emitir notas fiscais para serviços turísticos'
        ];
      } else if (faturamento <= 360000) {
        recomendacao = 'Microempresa (ME) no Simples Nacional';
        justificativa = [
          'Seu faturamento está dentro do limite para Microempresa (até R$ 360.000,00/ano)',
          'Redução da carga tributária em comparação com outros regimes',
          'Possibilidade de contratar funcionários sem limitação'
        ];
      } else {
        recomendacao = 'Empresa de Pequeno Porte (EPP) no Simples Nacional';
        justificativa = [
          'Seu faturamento indica a necessidade de uma estrutura empresarial mais robusta',
          'O Simples Nacional oferece simplificação tributária até R$ 4.800.000,00/ano',
          'Maior segurança jurídica para operações de maior porte'
        ];
      }
    } else {
      tipoRecomendado = 'pf';
      recomendacao = 'Pessoa Física (Produtor Rural)';
      justificativa = [
        'A atividade de turismo rural parece ser complementar à sua atividade rural principal',
        'Manutenção da condição de segurado especial da previdência social',
        'Simplificação das obrigações fiscais e contábeis'
      ];
      
      // Adicionar alerta sobre PL 5167/19 se aplicável
      if (formData.emiteNotas === 'sim') {
        justificativa.push('Fique atento ao PL 5167/19, que pode permitir a emissão de notas fiscais para turismo rural usando apenas o CPF');
      }
    }

    setResultado({
      tipoRecomendado,
      recomendacao,
      justificativa,
      pontosCNPJ,
      pontosPF
    });

    nextStep();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="card">
            <h2>Informações Básicas</h2>
            <div className="space-y-4">
              <div className="form-group">
                <label className="form-label">Qual é sua atividade principal?</label>
                <div className="mt-2">
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name="atividadePrincipal"
                      value="rural"
                      checked={formData.atividadePrincipal === 'rural'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Produção rural
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="atividadePrincipal"
                      value="turismo"
                      checked={formData.atividadePrincipal === 'turismo'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Turismo rural
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Qual é seu faturamento anual aproximado (em R$)?</label>
                <select
                  name="faturamentoAnual"
                  value={formData.faturamentoAnual}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="30000">Até R$ 30.000,00</option>
                  <option value="81000">De R$ 30.000,01 até R$ 81.000,00</option>
                  <option value="360000">De R$ 81.000,01 até R$ 360.000,00</option>
                  <option value="4800000">De R$ 360.000,01 até R$ 4.800.000,00</option>
                  <option value="5000000">Acima de R$ 4.800.000,00</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Qual percentual aproximado da sua renda vem do turismo rural?</label>
                <select
                  name="percentualTurismo"
                  value={formData.percentualTurismo}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="20">Até 20%</option>
                  <option value="40">De 21% a 40%</option>
                  <option value="60">De 41% a 60%</option>
                  <option value="80">De 61% a 80%</option>
                  <option value="100">De 81% a 100%</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={nextStep}
                disabled={!formData.atividadePrincipal || !formData.faturamentoAnual || !formData.percentualTurismo}
                className={`btn btn-primary ${(!formData.atividadePrincipal || !formData.faturamentoAnual || !formData.percentualTurismo) ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Próximo
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="card">
            <h2>Atividades e Serviços</h2>
            <div className="space-y-4">
              <div className="form-group">
                <label className="form-label">Quais atividades de turismo rural você oferece ou pretende oferecer?</label>
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="hospedagem"
                      checked={formData.tipoAtividade.includes('hospedagem')}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    Hospedagem rural
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="alimentacao"
                      checked={formData.tipoAtividade.includes('alimentacao')}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    Alimentação (restaurante, café colonial)
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="eventos"
                      checked={formData.tipoAtividade.includes('eventos')}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    Eventos e festas
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="aventura"
                      checked={formData.tipoAtividade.includes('aventura')}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    Turismo de aventura (trilhas, cavalgadas)
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="producao"
                      checked={formData.tipoAtividade.includes('producao')}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    Visitação à produção rural
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="artesanato"
                      checked={formData.tipoAtividade.includes('artesanato')}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    Venda de artesanato e produtos rurais
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Você precisa emitir notas fiscais para seus clientes com frequência?</label>
                <div className="mt-2">
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name="emiteNotas"
                      value="sim"
                      checked={formData.emiteNotas === 'sim'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Sim
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="emiteNotas"
                      value="nao"
                      checked={formData.emiteNotas === 'nao'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Não
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button onClick={prevStep} className="btn btn-secondary">
                Anterior
              </button>
              <button
                onClick={nextStep}
                disabled={formData.tipoAtividade.length === 0 || !formData.emiteNotas}
                className={`btn btn-primary ${(formData.tipoAtividade.length === 0 || !formData.emiteNotas) ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Próximo
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="card">
            <h2>Aspectos Adicionais</h2>
            <div className="space-y-4">
              <div className="form-group">
                <label className="form-label">Você pretende contratar funcionários para o turismo rural?</label>
                <div className="mt-2">
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name="contratarFuncionarios"
                      value="sim"
                      checked={formData.contratarFuncionarios === 'sim'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Sim, alguns funcionários
                  </label>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name="contratarFuncionarios"
                      value="muitos"
                      checked={formData.contratarFuncionarios === 'muitos'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Sim, vários funcionários
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="contratarFuncionarios"
                      value="nao"
                      checked={formData.contratarFuncionarios === 'nao'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Não, apenas trabalho familiar
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Você pretende acessar linhas de crédito específicas para turismo?</label>
                <div className="mt-2">
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name="acessoCredito"
                      value="sim"
                      checked={formData.acessoCredito === 'sim'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Sim
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="acessoCredito"
                      value="nao"
                      checked={formData.acessoCredito === 'nao'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Não
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">É importante para você manter a condição de segurado especial da previdência social?</label>
                <div className="mt-2">
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name="seguradoEspecial"
                      value="sim"
                      checked={formData.seguradoEspecial === 'sim'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Sim, é muito importante
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="seguradoEspecial"
                      value="nao"
                      checked={formData.seguradoEspecial === 'nao'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Não é tão importante
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button onClick={prevStep} className="btn btn-secondary">
                Anterior
              </button>
              <button
                onClick={calculateResult}
                disabled={!formData.contratarFuncionarios || !formData.acessoCredito || !formData.seguradoEspecial}
                className={`btn btn-primary ${(!formData.contratarFuncionarios || !formData.acessoCredito || !formData.seguradoEspecial) ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Calcular Resultado
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div className={`card ${resultado.tipoRecomendado === 'pf' ? 'bg-green-50' : 'bg-blue-50'}`}>
              <h2>Resultado da Análise</h2>
              <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Recomendação: {resultado.recomendacao}</h3>
                <p className="mb-4">
                  Com base nas informações fornecidas, nossa análise indica que a melhor opção para o seu 
                  empreendimento de turismo rural é atuar como <strong>{resultado.recomendacao}</strong>.
                </p>
                <h4 className="text-lg font-medium mb-2">Justificativa:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  {resultado.justificativa.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card">
              <h2>Próximos Passos</h2>
              <div className="space-y-4 mt-4">
                {resultado.tipoRecomendado === 'pf' ? (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Para atuar como Pessoa Física (Produtor Rural):</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Mantenha seu bloco de produtor rural atualizado</li>
                      <li>Verifique as regras específicas do seu estado para emissão de notas fiscais</li>
                      <li>Acompanhe a tramitação do PL 5167/19, que pode facilitar a emissão de notas fiscais para turismo rural</li>
                      <li>Consulte um contador para orientações sobre a declaração de imposto de renda</li>
                      <li>Considere o cadastro opcional no Cadastur para ter acesso a benefícios do programa</li>
                    </ol>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Para constituir um {resultado.recomendacao}:</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Consulte um contador para orientações específicas sobre a abertura do CNPJ</li>
                      <li>Verifique as exigências da prefeitura local para obtenção de alvará de funcionamento</li>
                      <li>Realize o cadastro obrigatório no Cadastur, se aplicável à sua atividade</li>
                      <li>Informe-se sobre as obrigações fiscais e contábeis do regime tributário escolhido</li>
                      <li>Verifique as linhas de crédito disponíveis para o seu tipo de empreendimento</li>
                    </ol>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button onClick={() => setStep(1)} className="btn btn-secondary">
                Recomeçar
              </button>
              <Link href="/requisitos" className="btn btn-primary">
                Ver Quadro Comparativo
              </Link>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <div className="card bg-green-50">
        <h1>Calculadora de Enquadramento para Turismo Rural</h1>
        <p>
          Esta calculadora interativa ajudará você a determinar se deve atuar como pessoa física ou constituir 
          um CNPJ para seu empreendimento de turismo rural. Responda às perguntas abaixo para receber uma 
          recomendação personalizada.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
              1
            </div>
            <div className={`h-1 w-16 mx-1 ${step >= 2 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
              2
            </div>
            <div className={`h-1 w-16 mx-1 ${step >= 3 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
              3
            </div>
            <div className={`h-1 w-16 mx-1 ${step >= 4 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 4 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
              4
            </div>
          </div>
          <div className="text-sm text-gray-500">
            Passo {step} de 4
          </div>
        </div>
      </div>

      {renderStep()}
    </div>
  );
}
