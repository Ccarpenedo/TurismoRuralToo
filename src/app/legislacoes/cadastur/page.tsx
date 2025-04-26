import Link from 'next/link';

export default function Cadastur() {
  return (
    <div className="space-y-8">
      <div className="card bg-green-50">
        <h1>Cadastur - Cadastro de Prestadores de Serviços Turísticos</h1>
        <p>
          O Cadastur é o sistema oficial de cadastro do Ministério do Turismo para pessoas físicas e jurídicas 
          que atuam no setor turístico. Esta página apresenta informações detalhadas sobre o Cadastur e sua 
          importância para os empreendimentos de turismo rural.
        </p>
      </div>

      <div className="card">
        <h2>O que é o Cadastur?</h2>
        <p>
          O Cadastro de Prestadores de Serviços Turísticos (Cadastur) é um sistema do Ministério do Turismo que 
          permite o cadastro e a legalização dos prestadores de serviços turísticos no Brasil. Criado pela Lei 
          Geral do Turismo (Lei nº 11.771/2008), o Cadastur é uma importante ferramenta de formalização e 
          reconhecimento oficial das atividades turísticas.
        </p>
        <p>
          O cadastro garante diversas vantagens e oportunidades aos seus cadastrados, além de ser um mecanismo 
          de comunicação entre o governo, os empresários, os profissionais do setor e os turistas.
        </p>
      </div>

      <div className="card bg-yellow-50">
        <h2>Obrigatoriedade do Cadastur</h2>
        <p>
          De acordo com a Lei Geral do Turismo, o cadastro é obrigatório para as seguintes categorias:
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Meios de Hospedagem:</strong> Hotéis, resorts, pousadas, hospedarias rurais, etc.
          </li>
          <li>
            <strong>Agências de Turismo:</strong> Empresas que organizam e comercializam pacotes turísticos
          </li>
          <li>
            <strong>Transportadoras Turísticas:</strong> Empresas que realizam transporte de turistas
          </li>
          <li>
            <strong>Organizadoras de Eventos:</strong> Empresas que organizam congressos, convenções e eventos similares
          </li>
          <li>
            <strong>Parques Temáticos:</strong> Empreendimentos com finalidade turística que oferecem entretenimento
          </li>
          <li>
            <strong>Acampamentos Turísticos:</strong> Áreas destinadas à instalação de barracas e equipamentos de camping
          </li>
          <li>
            <strong>Guias de Turismo-MEI:</strong> Guias de turismo registrados como Microempreendedores Individuais
          </li>
        </ul>
        <p className="mt-4">
          Outras atividades podem ser cadastradas em caráter opcional, incluindo empreendimentos de turismo rural, 
          restaurantes, cafeterias, centros de convenções, casas de espetáculos, parques aquáticos, entre outros.
        </p>
      </div>

      <div className="card">
        <h2>Benefícios do Cadastur</h2>
        <p>
          O cadastro no Cadastur oferece diversos benefícios aos prestadores de serviços turísticos:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Benefícios Legais</h3>
            <ul className="space-y-1">
              <li>Legalização da atividade conforme a Lei do Turismo</li>
              <li>Emissão do Certificado Cadastur</li>
              <li>Segurança jurídica para a operação</li>
              <li>Reconhecimento oficial pelo Ministério do Turismo</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Benefícios Financeiros</h3>
            <ul className="space-y-1">
              <li>Acesso a financiamentos em bancos oficiais</li>
              <li>Condições especiais em linhas de crédito</li>
              <li>Possibilidade de participação em editais e programas de incentivo</li>
              <li>Acesso a recursos do Fungetur (Fundo Geral do Turismo)</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Benefícios de Capacitação</h3>
            <ul className="space-y-1">
              <li>Participação em programas de qualificação promovidos pelo Ministério do Turismo</li>
              <li>Acesso a cursos e treinamentos específicos</li>
              <li>Suporte técnico para melhoria dos serviços</li>
              <li>Acesso a materiais informativos e educativos</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Benefícios de Visibilidade</h3>
            <ul className="space-y-1">
              <li>Maior visibilidade no mercado turístico</li>
              <li>Inclusão no portal do Cadastur</li>
              <li>Participação em eventos, feiras e ações promovidas pelo Ministério do Turismo</li>
              <li>Possibilidade de participar de campanhas promocionais oficiais</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card bg-green-50">
        <h2>Cadastur e o Turismo Rural</h2>
        <p>
          Para empreendimentos de turismo rural, o Cadastur representa uma importante ferramenta de formalização 
          e reconhecimento oficial da atividade. Embora não seja obrigatório para todas as modalidades de turismo 
          rural, o cadastro confere legitimidade ao negócio e facilita o acesso a políticas públicas de fomento ao setor.
        </p>
        <p>
          Com as recentes mudanças na Lei Geral do Turismo (Lei nº 14.978/2024), há uma tendência de inclusão cada 
          vez maior dos produtores rurais e agricultores familiares no sistema oficial de turismo, o que deve 
          facilitar o cadastro e ampliar os benefícios para este segmento.
        </p>
        <div className="bg-white p-4 rounded-lg border border-green-300 my-4">
          <h3 className="text-lg font-semibold text-green-700 mb-2">Categorias de cadastro para Turismo Rural</h3>
          <p>
            Dependendo das atividades oferecidas, um empreendimento de turismo rural pode se cadastrar nas seguintes categorias:
          </p>
          <ul className="space-y-1 mt-2">
            <li><strong>Meio de Hospedagem:</strong> Se oferecer serviços de hospedagem (pousadas rurais, fazendas-hotel, etc.)</li>
            <li><strong>Restaurante, Cafeteria e Bar:</strong> Se oferecer serviços de alimentação (restaurantes rurais, cafés coloniais, etc.)</li>
            <li><strong>Parque Temático:</strong> Se oferecer atrações e entretenimento em ambiente rural</li>
            <li><strong>Centro de Convenções:</strong> Se realizar eventos em ambiente rural</li>
            <li><strong>Prestador Especializado em Segmentos Turísticos:</strong> Categoria que pode abranger diversas atividades de turismo rural</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <h2>Como se cadastrar no Cadastur</h2>
        <p>
          O processo de cadastro no Cadastur é relativamente simples e pode ser realizado online:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Acesse o site oficial do Cadastur: <a href="https://cadastur.turismo.gov.br" target="_blank" className="text-blue-600 hover:underline">cadastur.turismo.gov.br</a></li>
          <li>Clique em "Entrar com gov.br" e faça login com sua conta gov.br</li>
          <li>Selecione a opção "Sou prestador" e siga as instruções para o cadastro</li>
          <li>Escolha a categoria de prestador de serviço turístico que melhor se adequa à sua atividade</li>
          <li>Preencha todos os dados solicitados e envie a documentação necessária</li>
          <li>Aguarde a análise e aprovação do cadastro</li>
        </ol>
        <p className="mt-4">
          <strong>Importante:</strong> Os requisitos específicos podem variar de acordo com o tipo de atividade 
          turística. Consulte o site oficial do Cadastur para obter informações atualizadas.
        </p>
      </div>

      <div className="card">
        <h2>Documentação necessária</h2>
        <p>
          A documentação básica necessária para o cadastro inclui:
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Para Pessoa Jurídica:</strong>
            <ul className="pl-6 mt-2">
              <li>CNPJ ativo</li>
              <li>Contrato social ou estatuto</li>
              <li>Documento de identidade e CPF do responsável legal</li>
              <li>Alvará de funcionamento</li>
              <li>Documentos específicos da categoria escolhida</li>
            </ul>
          </li>
          <li className="mt-4">
            <strong>Para Pessoa Física (aplicável a algumas categorias):</strong>
            <ul className="pl-6 mt-2">
              <li>Documento de identidade e CPF</li>
              <li>Comprovante de residência</li>
              <li>Documentos específicos da categoria escolhida</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="card bg-blue-50">
        <h2>Recomendações para Empreendimentos de Turismo Rural</h2>
        <p>
          Se você possui ou deseja iniciar um empreendimento de turismo rural:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Verifique se sua atividade se enquadra nas categorias obrigatórias ou opcionais do Cadastur
          </li>
          <li>
            Regularize sua situação fiscal e obtenha os documentos necessários para o cadastro
          </li>
          <li>
            Realize o cadastro no Cadastur, mesmo que sua atividade não seja de cadastro obrigatório, 
            para usufruir dos benefícios oferecidos
          </li>
          <li>
            Mantenha seu cadastro atualizado, realizando a renovação dentro do prazo estabelecido
          </li>
          <li>
            Aproveite os programas de capacitação e qualificação oferecidos pelo Ministério do Turismo
          </li>
          <li>
            Utilize o selo do Cadastur em seu material promocional para agregar credibilidade ao seu negócio
          </li>
        </ol>
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
          <li>
            <a 
              href="https://www.gov.br/pt-br/servicos/cadastrar-prestadora-de-servico-turistico" 
              target="_blank" 
              className="text-blue-600 hover:underline"
            >
              Cadastrar prestador de serviços turísticos - Portal Gov.br
            </a>
          </li>
        </ul>
      </div>

      <div className="flex justify-between mt-8">
        <Link href="/legislacoes/lei-geral-turismo" className="btn btn-secondary">
          Anterior: Lei Geral do Turismo
        </Link>
        <Link href="/requisitos" className="btn btn-primary">
          Próximo: Requisitos PF vs CNPJ
        </Link>
      </div>
    </div>
  );
}
