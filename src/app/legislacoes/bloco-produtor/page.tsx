import Link from 'next/link';

export default function BlocoProdutor() {
  return (
    <div className="space-y-8">
      <div className="card bg-green-50">
        <h1>Regras do Bloco do Produtor para o Turismo Rural</h1>
        <p>
          Uma das principais questões para produtores rurais que desejam atuar no turismo rural é como emitir 
          documentos fiscais para estas atividades. Esta página apresenta informações sobre as regras do bloco 
          do produtor e as mudanças recentes na legislação.
        </p>
      </div>

      <div className="card">
        <h2>Situação Atual</h2>
        <p>
          Atualmente, apenas produtores rurais com CNPJ podem explorar atividades não agrícolas formalmente, 
          como o turismo rural, com a emissão de notas fiscais aos clientes. Isso tem sido um obstáculo para 
          muitos pequenos produtores que desejam diversificar suas atividades.
        </p>
        <p>
          No entanto, há mudanças importantes em andamento que visam facilitar a atuação dos produtores rurais 
          no setor de turismo, permitindo o uso do bloco do produtor ou nota fiscal eletrônica com CPF.
        </p>
      </div>

      <div className="card bg-yellow-50">
        <h2>Projeto de Lei 5167/19</h2>
        <p>
          A Comissão de Agricultura, Pecuária, Abastecimento e Desenvolvimento Rural da Câmara dos Deputados 
          aprovou o Projeto de Lei 5167/19, que traz mudanças significativas para o setor.
        </p>
        <div className="bg-white p-4 rounded-lg border border-yellow-300 my-4">
          <h3 className="text-xl font-semibold text-yellow-700 mb-3">Principais mudanças propostas:</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Emissão de notas fiscais com CPF:</strong> Agricultores devidamente cadastrados nos órgãos 
              fazendários federais, estaduais e municipais poderão emitir nota fiscal eletrônica ou nota do talão 
              de produtor rural na comercialização de produtos e serviços ligados ao turismo rural ou ao agroturismo
            </li>
            <li>
              <strong>Simplificação tributária:</strong> O documento fiscal poderá ser emitido usando apenas o 
              Cadastro de Pessoas Físicas (CPF) do produtor rural
            </li>
            <li>
              <strong>Opção pelo Simples Nacional:</strong> Será facultado ao produtor, quando possível, migrar 
              para o regime do Simples Nacional
            </li>
          </ol>
        </div>
        <p>
          Este projeto visa simplificar a tributação e permitir que o produtor rural desenvolva atividades de 
          turismo sem a necessidade imediata de constituir uma pessoa jurídica, facilitando o início das atividades 
          e reduzindo os riscos caso a iniciativa não tenha o resultado esperado.
        </p>
      </div>

      <div className="card">
        <h2>Atividades Contempladas</h2>
        <p>
          O projeto contempla diversas atividades que os produtores rurais podem oferecer aos turistas:
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Produção e comercialização de alimentos:</strong> Acompanhamento da produção de produtos 
            agropecuários (doces, geleias, pães, café, queijo, vinhos, aguardentes)
          </li>
          <li>
            <strong>Experiências rurais:</strong> Vivência do dia a dia da vida rural (plantio, colheita, manejo de animais)
          </li>
          <li>
            <strong>Turismo de aventura:</strong> Atividades nas propriedades rurais (rafting, trekking, arvorismo, 
            escalada, paraquedismo)
          </li>
          <li>
            <strong>Hospedagem rural:</strong> Serviços de hospedagem em propriedades rurais
          </li>
          <li>
            <strong>Gastronomia rural:</strong> Serviços de alimentação com produtos típicos da região
          </li>
        </ul>
      </div>

      <div className="card">
        <h2>Nota Fiscal Eletrônica para Produtores Rurais</h2>
        <p>
          Além das mudanças propostas pelo PL 5167/19, há também novas regras para a emissão de notas fiscais 
          por produtores rurais:
        </p>
        <ul className="space-y-2">
          <li>
            A partir de 3 de fevereiro de 2025, passa a ser obrigatório o uso de Nota Fiscal Eletrônica (NF-e), 
            modelo 55, nas operações internas praticadas por produtores rurais com receita bruta superior a R$ 360 mil
          </li>
          <li>
            Para os demais produtores rurais, a obrigatoriedade será implementada gradualmente
          </li>
          <li>
            Em alguns estados, os produtores rurais pessoa física podem realizar a emissão de nota fiscal através 
            do aplicativo Nota Fiscal Fácil
          </li>
        </ul>
        <p className="mt-4">
          <strong>Importante:</strong> As regras específicas para emissão de notas fiscais podem variar de acordo 
          com a legislação estadual. Consulte a Secretaria da Fazenda do seu estado para obter informações atualizadas.
        </p>
      </div>

      <div className="card bg-blue-50">
        <h2>Implicações para o Turismo Rural</h2>
        <p>
          Estas mudanças têm implicações significativas para o desenvolvimento do turismo rural:
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Simplificação da formalização:</strong> Redução da burocracia para produtores rurais que 
            desejam diversificar suas atividades
          </li>
          <li>
            <strong>Emissão de documentos fiscais:</strong> Possibilidade de emitir documentos fiscais sem a 
            necessidade de constituir pessoa jurídica
          </li>
          <li>
            <strong>Segurança jurídica:</strong> Maior segurança jurídica para os produtores rurais que atuam 
            no setor de turismo
          </li>
          <li>
            <strong>Acesso a políticas públicas:</strong> Facilidade para acessar políticas públicas de fomento 
            ao turismo rural
          </li>
        </ul>
      </div>

      <div className="card">
        <h2>Recomendações para Produtores Rurais</h2>
        <p>
          Se você é produtor rural e deseja iniciar atividades de turismo rural:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Verifique a legislação específica do seu estado sobre emissão de notas fiscais para atividades não agrícolas
          </li>
          <li>
            Consulte a Secretaria da Fazenda do seu estado para obter informações sobre o bloco do produtor e 
            nota fiscal eletrônica
          </li>
          <li>
            Acompanhe a tramitação do Projeto de Lei 5167/19, que pode trazer mudanças significativas para o setor
          </li>
          <li>
            Considere a possibilidade de se cadastrar no Cadastur, mesmo que como pessoa física, para ter acesso 
            a políticas públicas de fomento ao turismo
          </li>
          <li>
            Consulte um contador ou advogado especializado para orientações específicas ao seu caso
          </li>
        </ol>
      </div>

      <div className="card">
        <h2>Referências Legais</h2>
        <ul className="space-y-2">
          <li>
            <a 
              href="https://www.camara.leg.br/noticias/915061-comissao-aprova-permissao-para-produtor-explorar-agroturismo-e-turismo-rural-como-pessoa-fisica/" 
              target="_blank" 
              className="text-blue-600 hover:underline"
            >
              Comissão aprova permissão para produtor explorar agroturismo e turismo rural como pessoa física
            </a>
          </li>
          <li>
            <a 
              href="https://www.santoantoniodapatrulha.rs.gov.br/entenda-como-funciona-a-obrigatoriedade-da-nfe-para-produtor-rural/" 
              target="_blank" 
              className="text-blue-600 hover:underline"
            >
              Entenda como funciona a obrigatoriedade da NFE para Produtor Rural
            </a>
          </li>
        </ul>
      </div>

      <div className="flex justify-between mt-8">
        <Link href="/legislacoes/segurado-especial" className="btn btn-secondary">
          Anterior: Segurado Especial
        </Link>
        <Link href="/legislacoes/traf-parana" className="btn btn-primary">
          Próximo: TRAF Paraná
        </Link>
      </div>
    </div>
  );
}
