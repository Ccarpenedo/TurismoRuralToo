import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Turismo Rural - Legislação e Orientações",
  description: "Informações sobre a regularidade da atividade de Turismo Rural, quando atuar como pessoa física e quando é necessário CNPJ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header className="bg-green-700 text-white shadow-md">
          <div className="container-custom py-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <h1 className="text-2xl font-bold text-white m-0">Turismo Rural</h1>
                <p className="ml-2 text-yellow-300 hidden md:block">Legislação e Orientações</p>
              </div>
              <nav>
                <ul className="flex space-x-1 md:space-x-4">
                  <li><a href="/" className="nav-link-active">Início</a></li>
                  <li><a href="/legislacoes" className="nav-link">Legislações</a></li>
                  <li><a href="/requisitos" className="nav-link">Requisitos</a></li>
                  <li><a href="/calculadora" className="nav-link">Calculadora</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="container-custom py-8">
          {children}
        </main>
        <footer className="footer">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Turismo Rural</h3>
                <p className="text-gray-300">Informações sobre a regularidade da atividade de Turismo Rural, quando atuar como pessoa física e quando é necessário CNPJ.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Links Úteis</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="https://www.gov.br/turismo" className="hover:text-yellow-300">Ministério do Turismo</a></li>
                  <li><a href="https://cadastur.turismo.gov.br" className="hover:text-yellow-300">Cadastur</a></li>
                  <li><a href="https://www.gov.br/inss" className="hover:text-yellow-300">INSS</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contato</h3>
                <p className="text-gray-300">Para mais informações, entre em contato com os órgãos responsáveis pelo turismo em sua região.</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-green-600 text-center text-gray-300">
              <p>&copy; {new Date().getFullYear()} - Turismo Rural - Todos os direitos reservados</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
