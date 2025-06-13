interface SecuritySectionProps {
  user: {
    name: string
    email: string
    image: string
    isPremium: boolean
  }
}

export function SecuritySection({ user }: SecuritySectionProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Seguridad</h2>
        <p className="text-gray-500 mt-1">Administra tu contraseña, correo electrónico y cuenta</p>
      </div>

      <div className="bg-white card-shine-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Cambiar contraseña</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña actual
              </label>
              <input
                id="current-password"
                type="password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
                Nueva contraseña
              </label>
              <input
                id="new-password"
                type="password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                Confirmar contraseña
              </label>
              <input
                id="confirm-password"
                type="password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200"
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:from-purple-700 hover:to-blue-600 transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-purple-300">
              Actualizar contraseña
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Cambiar correo electrónico</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="current-email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico actual
              </label>
              <input
                id="current-email"
                type="email"
                value={user.email}
                disabled
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label htmlFor="new-email" className="block text-sm font-medium text-gray-700 mb-1">
                Nuevo correo electrónico
              </label>
              <input
                id="new-email"
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200"
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:from-purple-700 hover:to-blue-600 transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-purple-300">
              Actualizar correo electrónico
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-red-500 mb-4">Eliminar cuenta</h3>
          <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Advertencia</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>
                    Esta acción no se puede deshacer. Se eliminarán permanentemente todos tus datos y no podrás
                    recuperarlos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium hover:from-red-600 hover:to-pink-600 transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-red-300">
            Eliminar cuenta
          </button>
        </div>
      </div>
    </div>
  )
}
