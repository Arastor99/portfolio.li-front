import { useEffect, useRef } from "react"

interface Particle {
	x: number
	y: number
	size: number
	speedX: number
	speedY: number
	color: string
}

export default function BackgroundParticles() {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const particles = useRef<Particle[]>([])
	const animationFrameId = useRef<number>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext("2d")
		if (!ctx) return

		// Obtener variables CSS
		const getCSSVariable = (name: string) => {
			return getComputedStyle(document.documentElement)
				.getPropertyValue(name)
				.trim()
		}

		const resizeCanvas = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
			initParticles()
		}

		const initParticles = () => {
			particles.current = []
			const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100)

			for (let i = 0; i < particleCount; i++) {
				const size = Math.random() * 3 + 1
				particles.current.push({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					size,
					speedX: (Math.random() - 0.5) * 0.5,
					speedY: (Math.random() - 0.5) * 0.5,
					color: getRandomColor(),
				})
			}
		}

		const getRandomColor = () => {
			const primaryRGB = getCSSVariable("--color-primary-rgb")
			const primaryLightRGB = getCSSVariable("--color-primary-light-rgb")
			const secondaryRGB = getCSSVariable("--color-secondary-rgb")
			const secondaryLightRGB = getCSSVariable("--color-secondary-light-rgb")

			const colors = [
				`rgba(${primaryRGB}, 0.5)`,
				`rgba(${primaryLightRGB}, 0.5)`,
				`rgba(${secondaryRGB}, 0.5)`,
				`rgba(${secondaryLightRGB}, 0.5)`,
			]
			return colors[Math.floor(Math.random() * colors.length)]
		}

		const drawParticles = () => {
			if (!ctx || !canvas) return

			ctx.clearRect(0, 0, canvas.width, canvas.height)

			particles.current.forEach((particle) => {
				ctx.beginPath()
				ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
				ctx.fillStyle = particle.color
				ctx.fill()

				// Update position
				particle.x += particle.speedX
				particle.y += particle.speedY

				// Bounce off edges
				if (particle.x < 0 || particle.x > canvas.width) {
					particle.speedX *= -1
				}

				if (particle.y < 0 || particle.y > canvas.height) {
					particle.speedY *= -1
				}
			})

			// Draw connections
			const primaryLightRGB = getCSSVariable("--color-primary-light-rgb")
			ctx.strokeStyle = `rgba(${primaryLightRGB}, 0.1)`
			ctx.lineWidth = 0.5

			for (let i = 0; i < particles.current.length; i++) {
				for (let j = i + 1; j < particles.current.length; j++) {
					const dx = particles.current[i].x - particles.current[j].x
					const dy = particles.current[i].y - particles.current[j].y
					const distance = Math.sqrt(dx * dx + dy * dy)

					if (distance < 100) {
						ctx.beginPath()
						ctx.moveTo(particles.current[i].x, particles.current[i].y)
						ctx.lineTo(particles.current[j].x, particles.current[j].y)
						ctx.stroke()
					}
				}
			}

			animationFrameId.current = requestAnimationFrame(drawParticles)
		}

		window.addEventListener("resize", resizeCanvas)
		resizeCanvas()
		drawParticles()

		return () => {
			window.removeEventListener("resize", resizeCanvas)
			if (animationFrameId.current) {
				cancelAnimationFrame(animationFrameId.current)
			}
		}
	}, [])

	return (
		<canvas
			ref={canvasRef}
			className="fixed inset-0 w-full h-full pointer-events-none -z-0"
		/>
	)
}
