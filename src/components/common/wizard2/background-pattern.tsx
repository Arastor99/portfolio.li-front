"use client"

import { useEffect, useRef } from "react"

export default function BackgroundPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Función para dibujar un patrón geométrico moderno
    const drawPattern = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Colores para el patrón
      const colors = [
        "rgba(26, 95, 122, 0.1)", // primary
        "rgba(87, 197, 182, 0.1)", // primary-light
        "rgba(123, 44, 191, 0.1)", // secondary
        "rgba(157, 78, 221, 0.1)", // secondary-light
      ]

      // Dibujar formas geométricas aleatorias
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 100 + 50
        const color = colors[Math.floor(Math.random() * colors.length)]

        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(Math.random() * Math.PI * 2)

        // Alternar entre diferentes formas
        const shapeType = Math.floor(Math.random() * 3)

        ctx.fillStyle = color
        ctx.strokeStyle = color
        ctx.lineWidth = 2

        if (shapeType === 0) {
          // Rectángulo
          ctx.fillRect(-size / 2, -size / 2, size, size)
        } else if (shapeType === 1) {
          // Círculo
          ctx.beginPath()
          ctx.arc(0, 0, size / 2, 0, Math.PI * 2)
          ctx.fill()
        } else {
          // Triángulo
          ctx.beginPath()
          ctx.moveTo(0, -size / 2)
          ctx.lineTo(size / 2, size / 2)
          ctx.lineTo(-size / 2, size / 2)
          ctx.closePath()
          ctx.fill()
        }

        ctx.restore()
      }
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    drawPattern()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />
}
