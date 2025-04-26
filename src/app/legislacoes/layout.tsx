export default function LegislacoesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <aside className="lg:col-span-1">
        <div className="bg-green-50 p-4 rounded-lg shadow-sm sticky top-4">
          <h3 className="text-xl font-semibold text-green-700 mb-4">Legislações</h3>
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="/legislacoes" className="block p-2 hover:bg-green-100 rounded text-green-800 font-medium">
                  Visão Geral
                </a>
              </li>
              <li>
                <a href="/legislacoes/segurado-especial" className="block p-2 hover:bg-green-100 rounded text-green-800">
                  Segurado Especial
                </a>
              </li>
              <li>
                <a href="/legislacoes/bloco-produtor" className="block p-2 hover:bg-green-100 rounded text-green-800">
                  Bloco do Produtor
                </a>
              </li>
              <li>
                <a href="/legislacoes/traf-parana" className="block p-2 hover:bg-green-100 rounded text-green-800">
                  TRAF Paraná
                </a>
              </li>
              <li>
                <a href="/legislacoes/lei-geral-turismo" className="block p-2 hover:bg-green-100 rounded text-green-800">
                  Lei Geral do Turismo
                </a>
              </li>
              <li>
                <a href="/legislacoes/cadastur" className="block p-2 hover:bg-green-100 rounded text-green-800">
                  Cadastur
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <main className="lg:col-span-3">
        {children}
      </main>
    </div>
  );
}
