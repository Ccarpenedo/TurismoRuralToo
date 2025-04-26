import Link from 'next/link';

export default function SeguradoEspecial() {
  return (
    <div className="space-y-8">
      <div className="card bg-green-50">
        <h1>Segurado Especial da Previdência Social e o Turismo Rural</h1>
        <p>
          Uma das principais dúvidas dos produtores rurais que desejam iniciar atividades de turismo rural
          é se poderão manter a condição de segurado especial da previdência social. Esta página apresenta
          informações detalhadas sobre este tema.
        </p>
      </div>

      <div className="card">
        <h2>O que é Segurado Especial?</h2>
        <p>
          O segurado especial é o trabalhador rural que exerce sua atividade majoritariamente no campo. 
          Esta categoria inclui:
        </p>
        <ul>
          <li>Pequeno produtor rural (proprietário, usufrutuário, possuidor, assentado, parceiro, meeiro, comodatário ou arrendatário rural)</li>
          <li>Seringueiro ou extrativista vegetal</li>
          <li>Pescador artesanal</li>
          <li>Indígenas</li>
          <li>Quilombolas</li>
        </ul>
        <p>
          A atividade pode ser realizada individualmente (com auxílio eventual de terceiros) ou em regime de economia familiar 
          (quando o trabalho dos membros da família é indispensável à própria subsistência).
        </p>
      </div>

      <div className="card">
        <h2>Critérios para manutenção da condição de Segurado Especial</h2>
        <p>
          Para manter a condição de segurado especial, o produtor rural deve observar os seguintes critérios:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>No caso de exploração agropecuária, o tamanho da terra não pode ser maior do que quatro módulos fiscais</li>
          <li>A utilização de empregados para ajuda na produção não pode ultrapassar a proporção de 120 dias por ano civil</li>
          <li>A utilização de matéria-prima não pode vir de outra origem que não for do próprio núcleo familiar</li>
        </ol>
      </div>

      <div className="card">
        <h2>Contribuição Previdenciária do Segurado Especial</h2>
        
        <h3>Contribuição Obrigatória</h3>
        <p>
          A contribuição destinada à seguridade social, incidente sobre a receita bruta da comercialização da produção rural, é de:
        </p>
        <ul>
          <li>1,2% (um inteiro e dois décimos por cento)</li>
          <li>0,1% (zero vírgula um por cento) para o financiamento dos benefícios concedidos em razão do grau de incidência de incapacidade laborativa decorrente dos riscos ambientais do trabalho</li>
        </ul>

        <h3>Formas de Recolhimento</h3>
        <p>
          <strong>Venda para pessoa jurídica:</strong> A empresa compradora é responsável por descontar e recolher a contribuição (sub-rogação)
        </p>
        <p>
          <strong>Venda no varejo, venda a outro segurado especial ou produtor rural pessoa física e importação direta:</strong> O próprio segurado especial deve calcular e recolher o valor do tributo
        </p>

        <h3>Contribuição Opcional</h3>
        <p>
          O Segurado Especial também pode contribuir facultativamente com alíquota de 20% sobre o salário-de-contribuição, o que permite acesso a benefícios previdenciários com valores superiores ao salário mínimo.
        </p>
      </div>

      <div className="card bg-yellow-50">
        <h2>Implicações para o Turismo Rural</h2>
        <p>
          Para produtores rurais que desejam atuar no turismo rural, é importante considerar:
        </p>
        <div className="bg-white p-4 rounded-lg border border-yellow-300 my-4">
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>A atividade de turismo rural deve ser secundária em relação à atividade rural principal</strong> - O produtor deve manter a característica de trabalho majoritariamente no campo</li>
            <li><strong>Limite de renda com atividades não-rurais</strong> - As atividades de turismo rural não devem descaracterizar a condição de segurado especial</li>
            <li><strong>Documentação e registro</strong> - É importante manter registros das atividades rurais principais para comprovar que estas continuam sendo a fonte principal de subsistência</li>
          </ol>
        </div>
        <p>
          <strong>Atenção:</strong> Caso a atividade de turismo rural se torne a principal fonte de renda ou ocupe a maior parte do tempo do produtor, 
          pode haver a descaracterização da condição de segurado especial, com impactos na cobertura previdenciária.
        </p>
      </div>

      <div className="card">
        <h2>Comprovação da Condição de Segurado Especial</h2>
        <p>
          Para comprovar a condição de segurado especial, é necessário apresentar:
        </p>
        <ul>
          <li>Autodeclaração Rural (com detalhes sobre como a atividade rural é praticada)</li>
          <li>Documentos que comprovem a atividade rural, como:
            <ul className="pl-6 mt-2">
              <li>Documento de propriedade das terras (escritura)</li>
              <li>Contratos de arrendamento, parceria e comodato</li>
              <li>Cartão de produtor rural</li>
              <li>Notas fiscais de venda dos produtos agrícolas</li>
              <li>Comprovantes de vacinação de gado</li>
              <li>Declarações de entrega da produção rural para cooperativas</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="card bg-blue-50">
        <h2>Recomendações para Produtores Rurais</h2>
        <p>
          Se você é produtor rural e deseja iniciar atividades de turismo rural mantendo a condição de segurado especial:
        </p>
        <ul className="space-y-2">
          <li>Mantenha a atividade rural como principal fonte de subsistência</li>
          <li>Documente adequadamente tanto as atividades rurais quanto as de turismo</li>
          <li>Consulte um contador ou advogado especializado para orientações específicas ao seu caso</li>
          <li>Verifique a possibilidade de enquadramento como MEI (Microempreendedor Individual) para as atividades de turismo, sem perder a condição de segurado especial</li>
          <li>Considere a contribuição facultativa adicional para garantir benefícios previdenciários de maior valor</li>
        </ul>
      </div>

      <div className="card">
        <h2>Referências Legais</h2>
        <ul className="space-y-2">
          <li>
            <a 
              href="https://www.gov.br/inss/pt-br/direitos-e-deveres/inscricao-e-contribuicao/contribuicao-do-segurado-especial" 
              target="_blank" 
              className="text-blue-600 hover:underline"
            >
              Contribuição do Segurado Especial - INSS
            </a>
          </li>
          <li>
            <a 
              href="https://www.gov.br/inss/pt-br/noticias/segurado-especial-confira-os-requisitos-para-se-ter-acesso-aos-beneficios-do-inss" 
              target="_blank" 
              className="text-blue-600 hover:underline"
            >
              Segurado especial: confira os requisitos para ter acesso aos benefícios do INSS
            </a>
          </li>
        </ul>
      </div>

      <div className="flex justify-between mt-8">
        <Link href="/legislacoes" className="btn btn-secondary">
          Voltar para Legislações
        </Link>
        <Link href="/legislacoes/bloco-produtor" className="btn btn-primary">
          Próximo: Bloco do Produtor
        </Link>
      </div>
    </div>
  );
}
