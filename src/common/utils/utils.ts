export const generateRandomString = (length: number): string => {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	let result = ""
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length))
	}
	return result
}

export function hexToRgba(hex: string, alpha: number): string {
	let r = 0,
		g = 0,
		b = 0
	if (hex.length === 4) {
		r = parseInt(hex[1] + hex[1], 16)
		g = parseInt(hex[2] + hex[2], 16)
		b = parseInt(hex[3] + hex[3], 16)
	} else if (hex.length === 7) {
		r = parseInt(hex.slice(1, 3), 16)
		g = parseInt(hex.slice(3, 5), 16)
		b = parseInt(hex.slice(5, 7), 16)
	}
	return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function validateLinkedinUrl(url: string): boolean {
	const expRegex = "^https?:\/\/([a-z]{2,3}\.)?linkedin\.com\/in\/[a-zA-Z0-9-_%]+\/?$"
	return !!url.match(expRegex)
}

export function extractPublicIdFromUrl(url: string): string | null {
	const regex = /linkedin\.com\/in\/([^/?]+)/
	const match = url.match(regex)
	return match ? match[1] : null
}
