export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-extrabold text-orange-300">404</h1>
      <p className="text-xl font-semibold mt-4">Pagina não encontrada</p>
      <p className="text-gray-600 mt-2">
        Desculpa, a pagina que você está procurando não existe.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-teal-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all"
      >
        INICIO
      </a>
    </div>
  );
}
