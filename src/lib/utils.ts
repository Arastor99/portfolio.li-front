import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Función para formatear fechas
export function formatDate(date: { month?: number; year: number; day?: number }) {
  if (!date) return ""

  const month = date.month ? date.month : 1
  const year = date.year

  return `${month}/${year}`
}
