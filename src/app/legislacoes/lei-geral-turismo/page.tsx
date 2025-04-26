import Link from 'next/link';

export default function LeiGeralTurismo() {
  return (
    <div className="space-y-8">
      <div className="card bg-green-50">
        <h1>Lei Geral do Turismo e Cadastur</h1>
        <p>
          A Lei Geral do Turismo estabelece as normas sobre a Política Nacional de Turismo, define as atribuições 
          do Governo Federal quanto ao planejamento, desenvolvimento e estímulo ao setor turístico, além de 
          disciplinar a prestação de serviços turísticos e o cadastro, qualificação e fiscalização dos prestadores 
          de serviços turísticos.
        </p>
      </div>

      <div className="card">
        <h2>Lei Geral do Turismo</h2>
        <p>
          A Lei Geral do Turismo no Brasil é regulamentada pela Lei nº 11.771/2008, recentemente atualizada pela 
          Lei nº 14.978, de 18 de setembro de 2024. Esta legislação é fundamental para o desenvolvimento do setor 
          turístico no país, incluindo o turismo rural.
        </p>
        <p>
          A lei define o turismo como "o fenômeno social, cultural e econômico que envolve as atividades realizadas 
          por pessoas físicas durante viagens e estadas em lugares diferentes do seu entorno habitual, por um período 
          inferior a 1 (um) ano, com finalidade de lazer, negócios, comparecimento a eventos, entre outros."
        </p>
      </div>

      <div className="card bg-yellow-50">
        <h2>Principais objetivos da Política Nacional de Turismo</h2>
        <p>
          De acordo com a Lei nº 14.978/2024, a Política Nacional de Turismo tem como objetivos:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Contribuir para a redução das disparidades sociais e econômicas de ordem regional</li>
          <li>Promover a inclusão social por meio do crescimento da oferta de trabalho e da melhor distribuição de renda</li>
          <li>Promover, descentralizar e regionalizar o turismo</li>
          <li>Estimular a implantação de empreendimentos destinados às atividades de expressão cultural, animação turística, entretenimento e lazer</li>
          <li>Estimular a participação e o envolvimento das comunidades e populações tradicionais no desenvolvimento sustentável da atividade turística</li>
          <li>Apoiar a prevenção e o enfrentamento da exploração sexual de crianças e adolescentes</li>
          <li>Estimular a integração do setor privado como agente complementar de financiamento</li>
          <li>Propiciar a competitividade, a melhoria do ambiente de negócios, a inovação, a desburocratização, a qualidade, a eficiência e a segurança na prestação dos serviços</li>
          <li>Estabelecer padrões e normas de qualidade, de eficiência e de segurança na prestação de serviços turísticos</li>
          <li>Promover a formação, o aperfeiçoamento, a qualificação e a capacitação de recursos humanos para o setor do turismo</li>
        </ol>
      </div>

      <div className="card">
        <h2>Relevância para o Turismo Rural</h2>
        <p>
          A Lei Geral do Turismo é especialmente relevante para o turismo rural pelos seguintes aspectos:
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Reconhecimento da diversidade:</strong> Reconhece a importância da diversificação da oferta turística, 
            incluindo o turismo rural como um segmento relevante
          </li>
          <li>
            <strong>Desenvolvimento regional:</strong> Estimula o desenvolvimento de atividades turísticas em áreas rurais, 
            contribuindo para a redução das disparidades regionais
          </li>
          <li>
            <strong>Valorização cultural:</strong> Promove a valorização do patrimônio cultural e natural, elementos 
            fundamentais do turismo rural
          </li>
          <li>
            <strong>Participação comunitária:</strong> Incentiva a participação das comunidades locais no desenvolvimento 
            turístico, fortalecendo o turismo de base comunitária
          </li>
          <li>
            <strong>Formalização:</strong> Estabelece diretrizes para a formalização e regularização dos prestadores de 
            serviços turísticos, incluindo aqueles que atuam no meio rural
          </li>
        </ul>
      </div>

      <div className="card bg-blue-50">
        <h2>Novidades da Lei nº 14.978/2024</h2>
        <p>
          A recente atualização da Lei Geral do Turismo trouxe importantes novidades para o setor, com impactos 
          significativos para o turismo rural:
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Inclusão de agricultores familiares:</strong> A nova lei permite que produtores rurais e agricultores 
            familiares sejam reconhecidos como parte do setor turístico
          </li>
          <li>
            <strong>Mapa do Turismo Brasileiro:</strong> Instituição do Mapa do Turismo Brasileiro como instrumento para 
            facilitar o alcance dos objetivos da Política e do Sistema Nacional de Turismo
          </li>
          <li>
            <strong>Ampliação do Cadastur:</strong> Expansão do Cadastro de Prestadores de Serviços Turísticos para incluir 
            novos segmentos, como microempreendedores individuais
          </li>
          <li>
            <strong>Modernização do turismo:</strong> Disposições para promover a modernização do turismo, com foco na 
            inovação e na melhoria do ambiente de negócios
          </li>
        </ul>
      </div>

      <div className="card">
        <h2>Cadastur</h2>
        <p>
          O Cadastro de Prestadores de Serviços Turísticos (Cadastur) é o sistema oficial de cadastro do Ministério 
          do Turismo para pessoas físicas e jurídicas que atuam no setor turístico.
        </p>
        
        <h3>Obrigatoriedade do Cadastur</h3>
        <p>
          O cadastro é obrigatório para:
        </p>
        <ul className="space-y-1">
          <li>Meios de Hospedagem</li>
          <li>Agências de Turismo</li>
          <li>Transportadoras Turísticas</li>
          <li>Organizadoras de Eventos</li>
          <li>Parques Temáticos</li>
          <li>Acampamentos Turísticos</li>
          <li>Guias de Turismo-MEI (Microempreendedor Individual)</li>
        </ul>
        <p className="mt-4">
          Outras atividades podem ser cadastradas em caráter opcional, incluindo empreendimentos de turismo rural.
        </p>
      </div>

      <div className="card bg-green-50">
        <h2>Benefícios do Cadastur</h2>
        <p>
          O cadastro no Cadastur oferece diversos benefícios aos prestadores de serviços turísticos:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Benefícios Legais</h3>
            <ul className="space-y-1">
              <li>Legalização da atividade conforme a Lei do Turismo</li>
              <li>Emissão do Certificado Cadastur</li>
              <li>Segurança jurídica para a operação</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Benefícios Financeiros</h3>
            <ul className="space-y-1">
              <li>Acesso a financiamentos em bancos oficiais</li>
              <li>Condições especiais em linhas de crédito</li>
              <li>Possibilidade de participação em editais e programas de incentivo</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Benefícios de Capacitação</h3>
            <ul className="space-y-1">
              <li>Participação em programas de qualificação promovidos pelo Ministério do Turismo</li>
              <li>Acesso a cursos e treinamentos específicos</li>
              <li>Suporte técnico para melhoria dos serviços</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Benefícios de Visibilidade</h3>
            <ul className="space-y-1">
              <li>Maior visibilidade no mercado turístico</li>
              <li>Inclusão no portal do Cadastur</li>
              <li>Participação em eventos, feiras e ações promovidas pelo Ministério do Turismo</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Cadastur e o Turismo Rural</h2>
        <p>
          Para empreendimentos de turismo rural, o Cadastur representa uma importante ferramenta de formalização 
          e reconhecimento oficial da atividade. Embora não seja obrigatório para todas as modalidades de turismo 
          rural, o cadastro confere legitimidade ao negócio e facilita o acesso a políticas públicas de fomento ao setor.
        </p>
        <p>
          Com as recentes mudanças na legislação, há uma tendência de inclusão cada vez maior dos produtores rurais 
          e agricultores familiares no sistema oficial de turismo, o que deve facilitar o cadastro e ampliar os 
          benefícios para este segmento.
        </p>
      </div>

      <div className="card">
        <h2>Como se cadastrar no Cadastur</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Acesse o site oficial do Cadastur: <a href="https://cadastur.turismo.gov.br" target="_blank" className="text-blue-600 hover:underline">cadastur.turismo.gov.br</a></li>
          <li>Clique em "Entrar com gov.br" e faça login com sua conta gov.br</li>
          <li>Selecione a opção "Sou prestador" e siga as instruções para o cadastro</li>
          <li>Preencha todos os dados solicitados e envie a documentação necessária</li>
          <li>Aguarde a análise e aprovação do cadastro</li>
        </ol>
        <p className="mt-4">
          <strong>Importante:</strong> Os requisitos específicos podem variar de acordo com o tipo de atividade 
          turística. Consulte o site oficial do Cadastur para obter informações atualizadas.
        </p>
      </div>

      <div className="card">
        <h2>Referências Legais</h2>
        <ul className="space-y-2">
          <li>
            <a 
              href="https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/L14978.htm" 
              target="_blank" 
              className="text-blue-600 hover:underline"
            >
              Lei nº 14.978, de 18 de setembro de 2024
            </a>
          </li>
          <li>
            <a 
              href="https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11771.htm" 
              target="_blank" 
              className="text-blue-600 hover:underline"
            >
              Lei nº 11.771, de 17 de setembro de 2008 (Lei Geral do Turismo)
            </a>
          </li>
          <li>
            <a 
              href="https://cadastur.turismo.gov.br/hotsite/" 
              target="_blank" 
              className="text-blue-600 hover:underline"
            >
              Cadastur - Ministério do Turismo
            </a>
          </li>
        </ul>
      </div>

      <div className="flex justify-between mt-8">
        <Link href="/legislacoes/traf-parana" className="btn btn-secondary">
          Anterior: TRAF Paraná
        </Link>
        <Link href="/legislacoes/cadastur" className="btn btn-primary">
          Próximo: Cadastur
        </Link>
      </div>
    </div>
  );
}
