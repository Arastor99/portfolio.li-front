interface PremiumSectionProps {
  user: {
    name: string
    email: string
    image: string
    isPremium: boolean
  }
}

export function PremiumSection({ user }: PremiumSectionProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Premium</h2>
        <p className="text-gray-500 mt-1">Mejora tu experiencia con funciones exclusivas</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl rounded-2xl p-8 transition-all duration-300">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-500"></div>
          <div className="flex justify-between items-start mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl font-bold">Premium</h3>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs">
                  ✦
                </span>
              </div>
              <p className="text-gray-500">Desbloquea todas las funciones premium</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">2.49€</div>
              <div className="text-sm text-gray-500">por mes</div>
            </div>
          </div>

          <ul className="space-y-5 mb-8">
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <span className="font-medium">URL personalizada</span>
                <p className="text-sm text-gray-500">Personaliza la URL de tu portfolio</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <span className="font-medium">CV optimizado para ATS</span>
                <p className="text-sm text-gray-500">Mejora tus posibilidades de ser seleccionado</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <span className="font-medium">Sin anuncios</span>
                <p className="text-sm text-gray-500">Experiencia limpia sin distracciones</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <span className="font-medium">IA para mejorar tu perfil</span>
                <p className="text-sm text-gray-500">Sugerencias inteligentes para optimizar tu perfil</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <span className="font-medium">Estadísticas detalladas</span>
                <p className="text-sm text-gray-500">Analiza el rendimiento de tu portfolio</p>
              </div>
            </li>
          </ul>

          {user.isPremium ? (
            <div className="space-y-4">
              <button
                className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium opacity-50 cursor-not-allowed transition-all duration-200 shadow-sm"
                disabled
              >
                Ya eres Premium
              </button>
              <p className="text-center text-sm text-gray-500">Tu suscripción se renovará el 15 de julio de 2025</p>
            </div>
          ) : (
            <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:from-purple-700 hover:to-blue-600 transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-purple-300 flex items-center justify-center gap-2">
              <span className="text-white text-xs">✦</span>
              Actualizar a Premium
            </button>
          )}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-8">
          <h3 className="text-xl font-semibold mb-6">Preguntas frecuentes</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">¿Puedo cancelar en cualquier momento?</h4>
              <p className="text-gray-500 text-sm">
                Sí, puedes cancelar tu suscripción Premium en cualquier momento. Seguirás teniendo acceso a las
                funciones Premium hasta el final del período de facturación.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">¿Cómo funciona el CV optimizado para ATS?</h4>
              <p className="text-gray-500 text-sm">
                Nuestro sistema analiza tu CV y proporciona sugerencias para mejorar su visibilidad en los sistemas de
                seguimiento de candidatos utilizados por los reclutadores.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">¿Qué métodos de pago aceptan?</h4>
              <p className="text-gray-500 text-sm">
                Aceptamos tarjetas de crédito/débito, PayPal y transferencia bancaria.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">¿Ofrecen reembolsos?</h4>
              <p className="text-gray-500 text-sm">
                Si no estás satisfecho con tu suscripción Premium, puedes solicitar un reembolso dentro de los primeros
                14 días.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
