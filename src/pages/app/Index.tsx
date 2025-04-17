import MainMenu from "@components/ui/MainMenu"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <MainMenu />

      <main className="flex-1 md:ml-64 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Bienvenido a Myportfolio</h1>

          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Crea tu portfolio profesional</h2>
            <p className="text-gray-600 mb-4">
              Elige entre nuestras plantillas profesionales, personalízalas a tu gusto e importa tu información de
              LinkedIn para crear un portfolio impresionante en minutos.
            </p>
            <div className="flex gap-3 mt-6">
              <button className="px-4 py-2 bg-gray-900 text-white rounded-lg font-medium">Explorar plantillas</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium">Ver ejemplos</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Plantillas personalizables</h3>
              <p className="text-gray-600">
                Elige entre una variedad de diseños profesionales y personalízalos según tus preferencias.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Importación de LinkedIn</h3>
              <p className="text-gray-600">
                Importa automáticamente tu experiencia, habilidades y educación desde tu perfil de LinkedIn.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Editor intuitivo</h3>
              <p className="text-gray-600">
                Modifica tu portfolio con nuestro editor fácil de usar, sin necesidad de conocimientos técnicos.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Curriculum descargable</h3>
              <p className="text-gray-600">
                Genera un CV profesional a partir de tu portfolio y descárgalo en formato PDF.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
