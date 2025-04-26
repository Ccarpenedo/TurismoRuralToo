import Link from 'next/link';

export default function Requisitos() {
  return (
    <div className="space-y-8">
      <div className="card bg-green-50">
        <h1>Requisitos para Turismo Rural: Pessoa Física vs CNPJ</h1>
        <p>
          Uma das principais dúvidas dos produtores rurais que desejam atuar no turismo rural é quando podem 
          operar como pessoa física e quando precisam constituir um CNPJ. Esta página apresenta um quadro 
          comparativo dos requisitos e implicações de cada opção.
        </p>
      </div>

      <div className="card">
        <h2>Quadro Comparativo: Pessoa Física vs CNPJ</h2>
        <div className="table-container">
          <table className="table">
            <thead className="table-header">
              <tr>
                <th className="table-header-cell">Aspecto</th>
                <th className="table-header-cell">Pessoa Física (Produtor Rural)</th>
                <th className="table-header-cell">Pessoa Jurídica (CNPJ)</th>
              </tr>
            </thead>
            <tbody className="table-body">
              <tr className="table-row">
                <td className="table-cell font-medium">Emissão de Notas Fiscais</td>
                <td className="table-cell">
                  Pode emitir nota do talão de produtor rural apenas para produtos agrícolas. 
                  <br /><br />
                  <span className="text-yellow-600 font-medium">Mudança em andamento:</span> O PL 5167/19 propõe permitir a emissão de notas para serviços de turismo rural usando apenas o CPF.
                </td>
                <td className="table-cell">
                  Pode emitir notas fiscais para todos os produtos e serviços, incluindo hospedagem, alimentação e atividades de lazer.
                </td>
              </tr>
              <tr className="table-row">
                <td className="table-cell font-medium">Previdência Social</td>
                <td className="table-cell">
                  Pode manter a condição de segurado especial, desde que:
                  <ul className="list-disc pl-4 mt-2">
                    <li>A atividade de turismo rural seja secundária</li>
                    <li>A renda com turismo não descaracterize a condição de segurado especial</li>
                    <li>Mantenha a atividade rural como principal fonte de subsistência</li>
                  </ul>
                </td>
                <td className="table-cell">
                  Contribuição como empresário:
                  <ul className="list-disc pl-4 mt-2">
                    <li>Pró-labore com alíquota de 20% sobre o valor declarado</li>
                    <li>Perda da condição de segurado especial</li>
                    <li>Possibilidade de contribuição como MEI em alguns casos</li>
                  </ul>
                </td>
              </tr>
              <tr className="table-row">
                <td className="table-cell font-medium">Tributação</td>
                <td className="table-cell">
                  <ul className="list-disc pl-4">
                    <li>Imposto de Renda Pessoa Física</li>
                    <li>FUNRURAL (2,3% sobre a receita bruta da comercialização da produção rural)</li>
                    <li>Isenção de ICMS em alguns casos, dependendo da legislação estadual</li>
                  </ul>
                </td>
                <td className="table-cell">
                  Depende do regime tributário:
                  <ul className="list-disc pl-4 mt-2">
                    <li><strong>MEI:</strong> Valor fixo mensal (INSS, ISS e/ou ICMS)</li>
                    <li><strong>Simples Nacional:</strong> Alíquota única sobre faturamento</li>
                    <li><strong>Lucro Presumido:</strong> PIS, COFINS, IRPJ, CSLL, ICMS, ISS</li>
                    <li><strong>Lucro Real:</strong> Tributação completa</li>
                  </ul>
                </td>
              </tr>
              <tr className="table-row">
                <td className="table-cell font-medium">Limite de Faturamento</td>
                <td className="table-cell">
                  Não há limite específico, mas valores elevados podem descaracterizar a condição de produtor rural e segurado especial.
                </td>
                <td className="table-cell">
                  Varia conforme o regime tributário:
                  <ul className="list-disc pl-4 mt-2">
                    <li><strong>MEI:</strong> Até R$ 81.000,00/ano</li>
                    <li><strong>Simples Nacional:</strong> Até R$ 4.800.000,00/ano</li>
                    <li><strong>Lucro Presumido:</strong> Até R$ 78.000.000,00/ano</li>
                    <li><strong>Lucro Real:</strong> Sem limite</li>
                  </ul>
                </td>
              </tr>
              <tr className="table-row">
                <td className="table-cell font-medium">Cadastur</td>
                <td className="table-cell">
                  Cadastro opcional para algumas categorias, como guias de turismo.
                  <br /><br />
                  Limitações para acesso a alguns benefícios do programa.
                </td>
                <td className="table-cell">
                  Cadastro obrigatório para:
                  <ul className="list-disc pl-4 mt-2">
                    <li>Meios de Hospedagem</li>
                    <li>Agências de Turismo</li>
                    <li>Transportadoras Turísticas</li>
                    <li>Organizadoras de Eventos</li>
                    <li>Parques Temáticos</li>
                    <li>Acampamentos Turísticos</li>
                  </ul>
                  Acesso completo aos benefícios do programa.
                </td>
              </tr>
              <tr className="table-row">
                <td className="table-cell font-medium">Acesso a Crédito</td>
                <td className="table-cell">
                  Acesso a linhas de crédito rural:
                  <ul className="list-disc pl-4 mt-2">
                    <li>PRONAF (Programa Nacional de Fortalecimento da Agricultura Familiar)</li>
                    <li>Crédito rural para pessoa física</li>
                  </ul>
                  Limitações para financiamentos específicos de turismo.
                </td>
                <td className="table-cell">
                  Acesso amplo a linhas de crédito:
                  <ul className="list-disc pl-4 mt-2">
                    <li>Linhas específicas para turismo</li>
                    <li>Financiamentos do BNDES</li>
                    <li>Linhas de crédito do FUNGETUR</li>
                    <li>Crédito para pequenas empresas</li>
                  </ul>
                </td>
              </tr>
              <tr className="table-row">
                <td className="table-cell font-medium">Responsabilidade</td>
                <td className="table-cell">
                  Responsabilidade ilimitada:
                  <br />
                  O patrimônio pessoal do produtor responde pelas dívidas e obrigações.
                </td>
                <td className="table-cell">
                  Responsabilidade limitada (exceto MEI):
                  <br />
                  O patrimônio da empresa responde pelas dívidas e obrigações, protegendo o patrimônio pessoal dos sócios.
                </td>
              </tr>
              <tr className="table-row">
                <td className="table-cell font-medium">Obrigações Acessórias</td>
                <td className="table-cell">
                  Obrigações simplificadas:
                  <ul className="list-disc pl-4 mt-2">
                    <li>Declaração de Imposto de Renda Pessoa Física</li>
                    <li>Declaração do ITR (Imposto Territorial Rural)</li>
                    <li>Manutenção do bloco de produtor rural</li>
                  </ul>
                </td>
                <td className="table-cell">
                  Obrigações mais complexas:
                  <ul className="list-disc pl-4 mt-2">
                    <li>Escrituração contábil e fiscal</li>
                    <li>Entrega de declarações periódicas (DEFIS, PGDAS, SPED, etc.)</li>
                    <li>Folha de pagamento (se houver funcionários)</li>
                    <li>Alvará de funcionamento</li>
                    <li>Licenças sanitárias e ambientais</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card bg-yellow-50">
        <h2>Quando é recomendado atuar como Pessoa Física?</h2>
        <div className="bg-white p-4 rounded-lg border border-yellow-300 my-4">
          <ul className="space-y-2">
            <li>
              <strong>Atividade em pequena escala:</strong> Quando o turismo rural é uma atividade complementar e de pequena escala
            </li>
            <li>
              <strong>Manutenção do segurado especial:</strong> Quando é importante manter a condição de segurado especial da previdência social
            </li>
            <li>
              <strong>Fase inicial/teste:</strong> Quando está iniciando a atividade e quer testar a viabilidade antes de formalizar um CNPJ
            </li>
            <li>
              <strong>Baixo volume de serviços:</strong> Quando o volume de serviços turísticos é baixo em relação à atividade rural principal
            </li>
            <li>
              <strong>Simplicidade operacional:</strong> Quando busca simplicidade na gestão e nas obrigações fiscais e contábeis
            </li>
          </ul>
        </div>
      </div>

      <div className="card bg-blue-50">
        <h2>Quando é recomendado constituir um CNPJ?</h2>
        <div className="bg-white p-4 rounded-lg border border-blue-300 my-4">
          <ul className="space-y-2">
            <li>
              <strong>Atividade em maior escala:</strong> Quando o turismo rural se torna uma atividade significativa ou principal
            </li>
            <li>
              <strong>Necessidade de emissão de notas fiscais:</strong> Quando há necessidade frequente de emitir notas fiscais para serviços turísticos
            </li>
            <li>
              <strong>Contratação de funcionários:</strong> Quando há necessidade de contratar funcionários para a atividade turística
            </li>
            <li>
              <strong>Acesso a linhas de crédito específicas:</strong> Quando deseja acessar linhas de crédito específicas para o setor de turismo
            </li>
            <li>
              <strong>Cadastur obrigatório:</strong> Quando a atividade se enquadra nas categorias de cadastro obrigatório no Cadastur
            </li>
            <li>
              <strong>Proteção patrimonial:</strong> Quando busca separar o patrimônio pessoal do patrimônio do negócio
            </li>
            <li>
              <strong>Parcerias e contratos:</strong> Quando precisa estabelecer parcerias formais com agências de turismo e outros prestadores de serviços
            </li>
          </ul>
        </div>
      </div>

      <div className="card">
        <h2>Opções de formalização com CNPJ</h2>
        <p>
          Se você decidir constituir um CNPJ para seu empreendimento de turismo rural, existem diferentes opções 
          de formalização, cada uma com suas vantagens e limitações:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-green-700 mb-3">MEI - Microempreendedor Individual</h3>
            <p><strong>Faturamento:</strong> Até R$ 81.000,00/ano</p>
            <p><strong>Tributação:</strong> Valor fixo mensal</p>
            <p><strong>Vantagens:</strong></p>
            <ul className="list-disc pl-4 mt-2">
              <li>Baixo custo de formalização e manutenção</li>
              <li>Simplificação tributária</li>
              <li>Emissão de notas fiscais</li>
              <li>Cobertura previdenciária</li>
            </ul>
            <p className="mt-2"><strong>Limitações:</strong></p>
            <ul className="list-disc pl-4 mt-2">
              <li>Limite de faturamento</li>
              <li>Apenas um funcionário</li>
              <li>Atividades limitadas ao CNAE permitido</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Simples Nacional</h3>
            <p><strong>Faturamento:</strong> Até R$ 4.800.000,00/ano</p>
            <p><strong>Tributação:</strong> Alíquota única sobre faturamento</p>
            <p><strong>Vantagens:</strong></p>
            <ul className="list-disc pl-4 mt-2">
              <li>Simplificação tributária</li>
              <li>Redução da carga tributária</li>
              <li>Sem limite de funcionários</li>
              <li>Ampla gama de atividades permitidas</li>
            </ul>
            <p className="mt-2"><strong>Limitações:</strong></p>
            <ul className="list-disc pl-4 mt-2">
              <li>Maior complexidade contábil que o MEI</li>
              <li>Necessidade de contador</li>
              <li>Algumas atividades podem ser vedadas</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Lucro Presumido/Real</h3>
            <p><strong>Faturamento:</strong> Sem limite (Lucro Real) ou até R$ 78 milhões (Presumido)</p>
            <p><strong>Tributação:</strong> Mais complexa, com diversos tributos</p>
            <p><strong>Vantagens:</strong></p>
            <ul className="list-disc pl-4 mt-2">
              <li>Sem limitações de faturamento (Lucro Real)</li>
              <li>Possibilidade de aproveitamento de créditos tributários</li>
              <li>Adequado para negócios de maior porte</li>
            </ul>
            <p className="mt-2"><strong>Limitações:</strong></p>
            <ul className="list-disc pl-4 mt-2">
              <li>Alta complexidade contábil e fiscal</li>
              <li>Maior carga tributária em muitos casos</li>
              <li>Custos mais elevados de conformidade</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card bg-green-50">
        <h2>Calculadora de Enquadramento</h2>
        <p>
          Não tem certeza se deve atuar como pessoa física ou constituir um CNPJ para seu empreendimento de turismo rural? 
          Use nossa calculadora interativa para receber uma recomendação personalizada com base nas características do seu negócio.
        </p>
        <div className="flex justify-center mt-6">
          <Link href="/calculadora" className="btn btn-primary">
            Acessar Calculadora
          </Link>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Link href="/legislacoes/cadastur" className="btn btn-secondary">
          Voltar para Legislações
        </Link>
        <Link href="/calculadora" className="btn btn-primary">
          Próximo: Calculadora
        </Link>
      </div>
    </div>
  );
}
