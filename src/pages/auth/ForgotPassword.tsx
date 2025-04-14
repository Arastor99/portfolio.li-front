import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import ForgotPasswordForm from "@features/auth/components/ForgotPasswordForm"
import { useTranslation } from "react-i18next"

export default function ForgotPassword() {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg"
      >
        <div>
          <Link to="/login" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("forgotPassword.backToLogin")}
          </Link>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
          >
            {t("forgotPassword.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-2 text-center text-sm text-gray-600"
          >
            {t("forgotPassword.description")}
          </motion.p>
        </div>

        <ForgotPasswordForm />
      </motion.div>
    </div>
  )
}
