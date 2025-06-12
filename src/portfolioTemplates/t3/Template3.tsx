import { Colors, PortfolioProps } from "@common/types/portfolio"
import { Profile } from "@common/types/profile"
import About from "./sections/About"
import Hero from "./sections/Hero"
import Experience from "./sections/Experience"
import Education from "./sections/Education"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

const Template3 = ({
	profile = defaultProfile,
	colors = defaultColors,
}: PortfolioProps) => {
	return (
		<>
			<Hero profile={profile} />
			<About profile={profile} />
			<Experience profile={profile} />
			<Education profile={profile} />
			<Projects profile={profile} />
			<Contact profile={profile} />
			<Footer profile={profile} />
		</>
	)
}

const defaultColors: Colors = {
	primary: "#b054fc",
	secondary: "#54f8a6",
	primaryText: "#e4e4e4",
	secondaryText: "#403fa5",
	primaryBg: "#000636",
	secondaryBg: "#15214b",
	primaryBorder: "#17132e",
	secondaryBorder: "#251844",
}

const defaultProfile: Profile = {
	id: "1",
	firstName: "Ana",
	lastName: "Gómez",
	publicId: "ana.gomez",
	headline: "Desarrolladora Full Stack",
	summary:
		"Apasionada por la tecnología y el desarrollo de soluciones innovadoras.",
	profilePictureUrl: "https://example.com/profile.jpg",
	backgroundPictureUrl: "https://example.com/background.jpg",
	userImportedImage: "https://example.com/user-image.jpg",
	birthDay: 15,
	birthMonth: 6,
	industryName: "Tecnología de la información",
	student: false,
	locationName: "Ciudad de México",
	geoCountryName: "México",
	geoLocationName: "Ciudad de México, México",

	experiences: [
		{
			id: "exp1",
			title: "Desarrolladora Web",
			description: "Desarrollo de aplicaciones web con React y Node.js",
			startDate: new Date("2021-01-01"),
			endDate: new Date("2023-06-01"),
			locationName: "Remoto",
			companyName: "Tech Solutions",
			companyLogoUrl: "https://example.com/logo-tech.png",
			companyEmployees: "51-200",
			companyIndustries: ["Software", "Servicios TI"],
		},
	],

	education: [
		{
			id: "edu1",
			schoolName: "Universidad Nacional Autónoma de México",
			degreeName: "Licenciatura en Ciencias de la Computación",
			fieldOfStudy: "Computación",
			startYear: 2016,
			endYear: 2020,
			grade: "9.1",
			activities: "Club de programación, hackathons",
			description: "Participación activa en proyectos de software libre.",
		},
	],

	languages: [
		{
			id: "lang1",
			name: "Español",
			proficiency: "Nativo",
		},
		{
			id: "lang2",
			name: "Inglés",
			proficiency: "Avanzado",
		},
	],

	publications: [
		{
			id: "pub1",
			name: "Optimización de algoritmos en JS",
			publisher: "TechBlog",
			url: "https://techblog.com/ana-gomez-articulo",
		},
	],

	certifications: [
		{
			id: "cert1",
			authority: "Coursera",
			name: "Full-Stack Web Development",
			url: "https://coursera.org/cert/fullstack123",
			startDate: new Date("2022-01-01"),
			endDate: new Date("2022-06-01"),
			companyName: "Coursera",
			companyLogoUrl: "https://example.com/coursera-logo.png",
		},
	],

	volunteer: [
		{
			id: "vol1",
			role: "Mentora de programación",
			description: "Asesoramiento a estudiantes de nivel medio superior",
			cause: "Educación",
			startDate: new Date("2021-08-01"),
			endDate: new Date("2022-08-01"),
			companyName: "Code4Change",
			companyLogoUrl: "https://example.com/code4change-logo.png",
		},
	],

	honors: [
		{
			id: "hon1",
			title: "Reconocimiento al Mérito Académico",
			description: "Otorgado por desempeño sobresaliente en la universidad",
			issueDate: new Date("2020-12-01"),
			issuer: "UNAM",
		},
	],

	projects: [
		{
			id: "proj1",
			title: "Gestor de tareas colaborativo",
			description: "Aplicación web desarrollada con React, Node y MongoDB",
			startDate: new Date("2022-03-01"),
			endDate: new Date("2022-10-01"),
			importedImage: "https://example.com/project-image.jpg",
		},
	],

	skills: [
		{ id: "skill1", name: "JavaScript" },
		{ id: "skill2", name: "React" },
		{ id: "skill3", name: "Node.js" },
		{ id: "skill4", name: "MongoDB" },
	],
}

export default Template3
