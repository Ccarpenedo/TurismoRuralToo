import Link from 'next/link';

export default function Legislacoes() {
  return (
    <div className="space-y-8">
      <div className="card bg-green-50">
        <h1>Legislações sobre Turismo Rural</h1>
        <p>
          Nesta seção, você encontrará informações detalhadas sobre as principais legislações 
          que regulamentam o turismo rural no Brasil, com foco especial nas regras que determinam 
          quando é possível atuar como pessoa física e quando é necessário constituir um CNPJ.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-green-700">Segurado Especial</h2>
          <p>
            Entenda quando o produtor rural pode manter a condição de segurado especial da 
            previdência social ao desenvolver atividades de turismo rural.
          </p>
          <Link href="/legislacoes/segurado-especial" className="btn btn-primary mt-4 inline-block">
            Saiba mais
          </Link>
        </div>

        <div className="card hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-green-700">Bloco do Produtor</h2>
          <p>
            Conheça as regras do bloco do produtor para o turismo rural e como emitir notas 
            fiscais para atividades relacionadas ao turismo em sua propriedade.
          </p>
          <Link href="/legislacoes/bloco-produtor" className="btn btn-primary mt-4 inline-block">
            Saiba mais
          </Link>
        </div>

        <div className="card hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-green-700">TRAF Paraná</h2>
          <p>
            Informações sobre a legislação específica do Paraná para o Turismo Rural na 
            Agricultura Familiar (TRAF) e suas implicações para os produtores rurais.
          </p>
          <Link href="/legislacoes/traf-parana" className="btn btn-primary mt-4 inline-block">
            Saiba mais
          </Link>
        </div>

        <div className="card hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-green-700">Lei Geral do Turismo</h2>
          <p>
            Conheça a Lei Geral do Turismo e suas disposições relevantes para as atividades 
            de turismo rural, incluindo as recentes atualizações.
          </p>
          <Link href="/legislacoes/lei-geral-turismo" className="btn btn-primary mt-4 inline-block">
            Saiba mais
          </Link>
        </div>

        <div className="card hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-green-700">Cadastur</h2>
          <p>
            Informações sobre o Cadastro de Prestadores de Serviços Turísticos (Cadastur) e 
            sua importância para a formalização das atividades de turismo rural.
          </p>
          <Link href="/legislacoes/cadastur" className="btn btn-primary mt-4 inline-block">
            Saiba mais
          </Link>
        </div>
      </div>

      <div className="card bg-blue-50">
        <h2 className="text-2xl font-semibold text-blue-700">Importância da Regularização</h2>
        <p>
          A regularização das atividades de turismo rural é fundamental para garantir a segurança 
          jurídica do empreendimento, o acesso a políticas públicas de fomento ao setor e a 
          qualidade dos serviços prestados aos turistas.
        </p>
        <p>
          Além disso, estar em conformidade com a legislação permite ao produtor rural:
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li>Emitir notas fiscais e comprovantes legais</li>
          <li>Acessar linhas de crédito específicas para o setor</li>
          <li>Participar de programas de capacitação e qualificação</li>
          <li>Divulgar seu empreendimento em canais oficiais de turismo</li>
          <li>Garantir a cobertura previdenciária adequada</li>
        </ul>
      </div>
    </div>
  );
}
