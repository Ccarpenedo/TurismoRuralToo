import Link from 'next/link';

export default function TrafParana() {
  return (
    <div className="space-y-8">
      <div className="card bg-green-50">
        <h1>Legislação do Paraná para TRAF (Turismo Rural na Agricultura Familiar)</h1>
        <p>
          O estado do Paraná possui legislação específica para o Turismo Rural na Agricultura Familiar (TRAF),
          que define as atividades turísticas permitidas e estabelece critérios para o enquadramento dos produtores
          rurais nesta modalidade.
        </p>
      </div>

      <div className="card">
        <h2>Lei Nº 15.143, de 31 de maio de 2006</h2>
        <p>
          A Lei Nº 15.143/2006 do Paraná define as atividades turísticas que podem ser classificadas como
          "Turismo Rural na Agricultura Familiar" (TRAF). Esta legislação é pioneira no Brasil e serve de
          referência para outros estados.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg my-4">
          <h3 className="text-xl font-semibold text-blue-700 mb-3">Definição de TRAF</h3>
          <p className="italic">
            "Todas as atividades turísticas que ocorrem na unidade e produção dos agricultores familiares que
            mantêm as atividades econômicas típicas da agricultura familiar, dispostos a valorizar, respeitar
            e compartilhar seu modo de vida, o patrimônio cultural e natural, ofertando produtos e serviços
            de qualidade e proporcionando bem estar aos envolvidos."
          </p>
        </div>
      </div>

      <div className="card">
        <h2>Atividades consideradas como TRAF</h2>
        <p>
          O Art. 2º da Lei Nº 15.143/2006 estabelece as seguintes formas de ocorrência de turismo rural na
          agricultura familiar:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Comercialização de produtos alimentícios in natura</strong> de origem local
          </li>
          <li>
            <strong>Comercialização de produtos transformados</strong> (queijos, embutidos, doces, conservas, pães, etc.)
          </li>
          <li>
            <strong>Comercialização de artesanato</strong> com aproveitamento de produtos de origem vegetal, animal ou mineral
          </li>
          <li>
            <strong>Produção rural como atrativo</strong> - demonstrações sobre técnicas de produção, onde o turista
            também pode interagir fazendo parte do processo (pomares, leiterias, apiários, pesque-pagues, criações
            de animais, agricultura orgânica, vinícolas, alambiques, etc.)
          </li>
          <li>
            <strong>Educação ambiental</strong> - atividades educativas ligadas ao meio ambiente e/ou atividades agrícolas
          </li>
          <li>
            <strong>Serviços de lazer</strong> - cavalgadas, caminhadas, visitas a instalações de fazendas de interesse
            histórico, cachoeiras, grutas, bosques, caminhos históricos e pesca em tanques e rios
          </li>
          <li>
            <strong>Serviços de alimentação</strong> - restaurantes e cafés coloniais que oferecem alimentação típica
            ou de preparo especial
          </li>
          <li>
            <strong>Serviços de hospedagem</strong> - pousadas, hospedarias e outros estabelecimentos envolvidos com
            a produção rural
          </li>
          <li>
            <strong>Serviços ambientais em áreas naturais</strong> - áreas protegidas legalmente ou não, que se
            transformam em atrativos turísticos
          </li>
          <li>
            <strong>Arredores da unidade familiar</strong> - produtores que se beneficiam de sua localização próxima
            a um atrativo natural
          </li>
          <li>
            <strong>Patrimônio histórico</strong> - manifestações importantes da história da agricultura e das
            comunidades locais
          </li>
          <li>
            <strong>Centros de pesquisa tecnológica</strong> - que proporcionam a difusão de tecnologias ao meio rural
          </li>
          <li>
            <strong>Eventos diversos</strong> - festas regionais, eventos técnicos científicos, feiras de produtos
            e exposições agropecuárias
          </li>
        </ol>
      </div>

      <div className="card bg-yellow-50">
        <h2>Princípios do TRAF</h2>
        <p>
          Conforme o Art. 3º da Lei Nº 15.143/2006, as atividades do Turismo Rural na Agricultura Familiar
          devem seguir os seguintes princípios:
        </p>
        <ul className="space-y-2">
          <li>Ser um turismo ambientalmente correto e socialmente justo</li>
          <li>Incentivar a diversificação da produção e propiciar a comercialização direta dos produtos locais</li>
          <li>Valorizar e resgatar o artesanato regional e a cultura da família do campo</li>
          <li>Contribuir para a revitalização do território rural e para o resgate da autoestima dos agricultores</li>
          <li>Ser desenvolvido preferencialmente de forma associativa e organizada no território</li>
          <li>Ser complementar às demais atividades da unidade de produção familiar</li>
          <li>Proporcionar a convivência entre os visitantes e a família rural</li>
          <li>Estimular as atividades produtivas com enfoque no sistema agroecológico</li>
        </ul>
      </div>

      <div className="card">
        <h2>Definição de Agricultura Familiar</h2>
        <p>
          O Art. 4º da Lei Nº 15.143/2006 define como Agricultura Familiar as unidades produtivas rurais que possuam:
        </p>
        <div className="bg-white p-4 rounded-lg border border-green-300 my-4">
          <ol className="list-decimal pl-6 space-y-2">
            <li>Até 50 hectares de área</li>
            <li>Desenvolvam atividades agropecuárias de subsistência</li>
            <li>Os produtores sejam os administradores diretos da propriedade</li>
          </ol>
        </div>
        <p>
          São consideradas todas as formas de posse da propriedade, mesmo sendo de caráter provisório
          (arrendatários, posseiros, meeiros, parceiros e assentados rurais).
        </p>
      </div>

      <div className="card bg-blue-50">
        <h2>Implicações para os Produtores Rurais</h2>
        <p>
          A Lei Nº 15.143/2006 do Paraná traz importantes implicações para os produtores rurais que desejam
          atuar no turismo rural:
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Reconhecimento legal:</strong> As atividades de turismo rural na agricultura familiar são
            reconhecidas legalmente, o que proporciona maior segurança jurídica
          </li>
          <li>
            <strong>Diversificação de atividades:</strong> Possibilidade de diversificar as atividades da
            propriedade rural, agregando valor à produção
          </li>
          <li>
            <strong>Preservação cultural:</strong> Valorização e preservação da cultura e do modo de vida rural
          </li>
          <li>
            <strong>Desenvolvimento sustentável:</strong> Estímulo a práticas sustentáveis e agroecológicas
          </li>
          <li>
            <strong>Organização associativa:</strong> Incentivo à organização dos produtores em associações
            e cooperativas
          </li>
        </ul>
      </div>

      <div className="card">
        <h2>Recomendações para Produtores Rurais do Paraná</h2>
        <p>
          Se você é produtor rural no Paraná e deseja atuar no turismo rural:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Verifique se sua propriedade atende aos critérios de Agricultura Familiar estabelecidos na Lei Nº 15.143/2006
          </li>
          <li>
            Identifique quais atividades turísticas você pode desenvolver em sua propriedade, de acordo com
            as categorias previstas na lei
          </li>
          <li>
            Busque orientação junto à Secretaria de Turismo do Paraná, Emater ou outras entidades de apoio
            ao turismo rural
          </li>
          <li>
            Considere a possibilidade de se associar a outros produtores rurais para fortalecer a oferta
            turística da região
          </li>
          <li>
            Invista na qualificação e na melhoria da infraestrutura da propriedade para receber turistas
          </li>
        </ol>
      </div>

      <div className="card">
        <h2>Referências Legais</h2>
        <ul className="space-y-2">
          <li>
            <a 
              href="https://www.jusbrasil.com.br/legislacao/2756313210/lei-15143-06-pr" 
              target="_blank" 
              className="text-blue-600 hover:underline"
            >
              Lei Nº 15.143, de 31 de maio de 2006, do Paraná
            </a>
          </li>
        </ul>
      </div>

      <div className="flex justify-between mt-8">
        <Link href="/legislacoes/bloco-produtor" className="btn btn-secondary">
          Anterior: Bloco do Produtor
        </Link>
        <Link href="/legislacoes/lei-geral-turismo" className="btn btn-primary">
          Próximo: Lei Geral do Turismo
        </Link>
      </div>
    </div>
  );
}
