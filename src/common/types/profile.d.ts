export interface Profile {
	id?: string
	firstName: string
	lastName: string
	publicId: string
	headline?: string
	summary?: string
	profilePictureUrl?: string
	backgroundPictureUrl?: string

	userImportedImage?: string

	birthDay?: number
	birthMonth?: number
	industryName?: string
	student: boolean
	locationName?: string
	geoCountryName?: string
	geoLocationName?: string

	experiences: Experience[]
	education: Education[]
	languages: Language[]
	publications: Publication[]
	certifications: Certification[]
	volunteer: Volunteer[]
	honors: Honor[]
	projects: Project[]
	skills: Skill[]

	// createdAt: Date;
	// updatedAt: Date;
}

export interface Experience {
	id?: string
	title: string
	description?: string
	startDate?: Date
	endDate?: Date

	locationName?: string
	geoLocationName?: string
	companyName?: string
	companyLogoUrl?: string
	companyEmployees?: string
	companyIndustries: string[]
}

export interface Education {
	id?: string
	schoolName: string
	schoolLogoUrl?: string
	degreeName?: string
	grade?: string
	fieldOfStudy?: string
	startYear?: number
	endYear?: number
	activities?: string
	description?: string
}

export interface Language {
	id?: string
	name: string
	proficiency: string
}

export interface Publication {
	id?: string
	name: string
	publisher: string
	description?: string
	url: string
}

export interface Certification {
	id?: string
	authority: string
	name: string
	url: string
	startDate?: Date
	endDate?: Date
	companyName?: string
	companyLogoUrl?: string
}

export interface Volunteer {
	id?: string
	role: string
	description?: string
	cause?: string
	startDate?: Date
	endDate?: Date
	companyName?: string
	companyLogoUrl?: string
}

export interface Honor {
	id?: string
	title: string
	description?: string
	issueDate?: Date
	issuer?: string
}

export interface Project {
	id?: string
	title: string
	importedImage?: string

	description?: string
	startDate?: Date
	endDate?: Date
}

export interface Skill {
	id?: string
	name: string
}
