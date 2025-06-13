interface PortfolioSectionProps {
  user: {
    name: string
    email: string
    image: string
    isPremium: boolean
  }
}

export function PortfolioSection({ user }: PortfolioSectionProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Portfolio</h2>
        <p className="text-gray-500 mt-1">Personaliza tu perfil y URL de portfolio</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">URL personalizada</h3>
          {!user.isPremium && (
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs">
              ✦
            </span>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="custom-url" className="block text-sm font-medium text-gray-700 mb-1">
              URL personalizada
            </label>
            <div className="flex items-center">
              <span className="bg-gray-50 text-gray-500 px-4 py-3 rounded-l-xl border border-r-0 border-gray-200">
                my-portfolio.li/
              </span>
              <input
                id="custom-url"
                type="text"
                placeholder="tu-nombre"
                disabled={!user.isPremium}
                className={`rounded-l-none w-full px-4 py-3 rounded-r-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200 ${
                  !user.isPremium ? "opacity-50" : ""
                }`}
              />
            </div>
            {!user.isPremium && (
              <p className="text-sm text-gray-500 mt-2 flex items-center">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-white text-[10px] mr-2">
                  ✦
                </span>
                Esta función está disponible solo para usuarios Premium
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            className={`px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 ${
              !user.isPremium ? "opacity-50 cursor-not-allowed" : "hover:from-purple-700 hover:to-blue-600 hover:shadow"
            }`}
            disabled={!user.isPremium}
          >
            Guardar URL
          </button>

          {!user.isPremium && (
            <button className="px-6 py-3 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-white text-[10px]">
                ✦
              </span>
              Actualizar a Premium
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
