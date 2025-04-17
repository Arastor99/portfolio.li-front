// Definición de tipos para los datos del perfil

export interface ProfileData {
  firstName: string
  lastName: string
  headline?: string
  summary?: string
  locationName?: string
  industryName?: string
  displayPictureUrl?: string
  img_100_100?: string
  img_200_200?: string
  img_400_400?: string
  img_800_800?: string
  experience?: Experience[]
  education?: Education[]
  skills?: Skill[]
  projects?: Project[]
  publications?: Publication[]
  certifications?: Certification[]
  languages?: Language[]
  volunteer?: Volunteer[]
  honors?: Honor[]
}

export interface DatePeriod {
  month?: number
  year: number
  day?: number
}

export interface TimePeriod {
  startDate?: DatePeriod
  endDate?: DatePeriod
}

export interface Experience {
  title?: string
  companyName?: string
  locationName?: string
  description?: string
  timePeriod?: TimePeriod
  companyLogoUrl?: string
  companyUrn?: string
  company?: {
    employeeCountRange?: {
      start?: number
      end?: number
    }
    industries?: string[]
    name?: string
    logo?: any
  }
}

export interface Education {
  schoolName?: string
  degreeName?: string
  fieldOfStudy?: string
  grade?: string
  description?: string
  timePeriod?: TimePeriod
  school?: {
    schoolName?: string
    logoUrl?: string
  }
}

export interface Skill {
  name: string
}

export interface Project {
  title?: string
  description?: string
  timePeriod?: TimePeriod
  members?: ProjectMember[]
}

export interface ProjectMember {
  member?: {
    firstName?: string
    lastName?: string
    publicIdentifier?: string
    picture?: any
  }
  profileUrn?: string
}

export interface Publication {
  name?: string
  publisher?: string
  description?: string
  url?: string
  date?: DatePeriod
  authors?: PublicationAuthor[]
}

export interface PublicationAuthor {
  member?: {
    firstName?: string
    lastName?: string
    publicIdentifier?: string
    picture?: any
  }
  profileUrn?: string
}

export interface Certification {
  name?: string
  authority?: string
  timePeriod?: TimePeriod
  url?: string
  company?: {
    name?: string
    logo?: any
  }
  companyUrn?: string
  displaySource?: string
}

export interface Language {
  name: string
  proficiency: string
}

export interface Volunteer {
  role?: string
  companyName?: string
  description?: string
  timePeriod?: TimePeriod
  cause?: string
}

export interface Honor {
  title?: string
  issuer?: string
  issueDate?: DatePeriod
  occupation?: string
}
