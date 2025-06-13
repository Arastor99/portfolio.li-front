interface StatisticsSectionProps {
  user: {
    name: string
    email: string
    image: string
    isPremium: boolean
  }
}

export function StatisticsSection({ user }: StatisticsSectionProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Estadísticas</h2>
        <p className="text-gray-500 mt-1">Analiza el rendimiento de tu portfolio</p>
      </div>

      {user.isPremium ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="stat-card">
              <p className="text-sm font-medium text-gray-500 mb-1">Visitas totales</p>
              <p className="stat-value">1,234</p>
              <div className="flex items-center mt-2 text-sm text-green-600">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span>+12% desde el mes pasado</span>
              </div>
            </div>

            <div className="stat-card">
              <p className="text-sm font-medium text-gray-500 mb-1">Tiempo promedio</p>
              <p className="stat-value">2m 45s</p>
              <div className="flex items-center mt-2 text-sm text-green-600">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span>+5% desde el mes pasado</span>
              </div>
            </div>

            <div className="stat-card">
              <p className="text-sm font-medium text-gray-500 mb-1">Tasa de rebote</p>
              <p className="stat-value">42%</p>
              <div className="flex items-center mt-2 text-sm text-green-600">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span>-8% desde el mes pasado</span>
              </div>
            </div>
          </div>

          <div className="custom-card p-6">
            <h3 className="text-lg font-semibold mb-4">Visitas por día</h3>
            <div className="h-[300px] bg-gray-50 rounded-xl flex items-center justify-center">
              <div className="relative w-full h-full p-4">
                <div className="absolute bottom-0 left-0 right-0 h-[200px]">
                  <div className="relative h-full">
                    {[40, 65, 30, 70, 50, 90, 60].map((height, index) => (
                      <div
                        key={index}
                        className="absolute bottom-0 bg-gradient-to-t from-purple-600 to-blue-500 rounded-t-lg opacity-80 hover:opacity-100 transition-all duration-200"
                        style={{
                          height: `${height}%`,
                          width: "8%",
                          left: `${index * 14 + 2}%`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 pt-2 border-t border-gray-200">
                  <span>Lun</span>
                  <span>Mar</span>
                  <span>Mié</span>
                  <span>Jue</span>
                  <span>Vie</span>
                  <span>Sáb</span>
                  <span>Dom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="custom-card p-8">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center mb-4">
              <span className="text-white text-2xl">✦</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Función exclusiva para usuarios Premium</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Actualiza a Premium para acceder a estadísticas detalladas sobre las visitas a tu portfolio, tiempo de
              permanencia, ubicaciones y más.
            </p>
            <button className="custom-button-primary flex items-center gap-2 mx-auto">
              <span className="text-white text-xs">✦</span>
              Actualizar a Premium
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
