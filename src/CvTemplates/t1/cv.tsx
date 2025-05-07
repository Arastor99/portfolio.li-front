
import { Document, Page, Text, View, StyleSheet, Image, Link, Svg, Path } from "@react-pdf/renderer"

// Register fonts - using TTF instead of WOFF2

// Define colors - simplified to just 2 colors
const colors = {
  primary: "#2563eb", // Blue
  primaryLight: "#93c5fd",
  dark: "#111827",
  gray: "#6b7280",
  lightGray: "#e5e7eb",
  background: "#ffffff",
  sidebarBg: "#f1f5f9", // Light blue-gray for sidebar
}

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.background,
    color: colors.dark,
  },
  header: {
    backgroundColor: colors.primary,
    padding: 30,
    color: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  headerLeft: {
    width: "70%",
  },
  headerRight: {
    width: "30%",
    alignItems: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    border: "4px solid white",
  },
  name: {
    fontSize: 28,

    fontWeight: 700,
    marginBottom: 5,
    color: "white",
  },
  headline: {
    fontSize: 12,
    fontWeight: 500,
    color: "white",
    marginBottom: 10,
    lineHeight: 1.4,
  },
  container: {
    flexDirection: "row",
    flex: 1,
  },
  leftColumn: {
    width: "30%",
    backgroundColor: colors.sidebarBg,
    padding: 20,
    borderRight: `1px solid ${colors.lightGray}`,
  },
  rightColumn: {
    width: "70%",
    padding: 20,
  },
  contactInfo: {
    marginBottom: 25,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    fontSize: 10,
    color: colors.dark,
  },
  contactIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  contactText: {
    fontSize: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 12,
    color: colors.primary,
    paddingBottom: 4,
    borderBottom: `2px solid ${colors.primary}`,
    textTransform: "uppercase",
  },
  leftSectionTitle: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 12,
    color: colors.primary,
    paddingBottom: 4,
    borderBottom: `2px solid ${colors.primary}`,
    textTransform: "uppercase",
  },
  sectionContent: {
    marginBottom: 25,
  },
  experienceItem: {
    marginBottom: 15,
    position: "relative",
    paddingLeft: 15,
    borderLeft: `2px solid ${colors.lightGray}`,
  },
  experienceDot: {
    position: "absolute",
    left: -5,
    top: 0,
    width: 10,
    height: 10,
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  companyName: {
    fontSize: 12,
    fontWeight: 600,
    marginBottom: 2,
    color: colors.dark,
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: 600,
    color: colors.primary,
    marginBottom: 2,
  },
  period: {
    fontSize: 9,
    color: colors.gray,
    marginBottom: 4,
    fontStyle: "italic",
  },
  description: {
    fontSize: 9,
    lineHeight: 1.5,
    color: colors.dark,
  },
  educationItem: {
    marginBottom: 12,
    position: "relative",
    paddingLeft: 15,
    borderLeft: `2px solid ${colors.lightGray}`,
  },
  educationDot: {
    position: "absolute",
    left: -5,
    top: 0,
    width: 10,
    height: 10,
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  schoolName: {
    fontSize: 11,
    fontWeight: 600,
    marginBottom: 2,
    color: colors.dark,
  },
  degree: {
    fontSize: 10,
    marginBottom: 2,
    color: colors.primary,
    fontWeight: 500,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
  skillBadge: {
    backgroundColor: colors.primary,
    color: "white",
    padding: "4 8",
    borderRadius: 12,
    fontSize: 8,
    margin: "0 6 6 0",
    fontWeight: 500,
  },
  awardItem: {
    marginBottom: 10,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 6,
    borderLeft: `3px solid ${colors.primary}`,
  },
  awardTitle: {
    fontSize: 10,
    fontWeight: 600,
    marginBottom: 2,
    color: colors.dark,
  },
  awardIssuer: {
    fontSize: 9,
    color: colors.gray,
    fontStyle: "italic",
  },
  summary: {
    fontSize: 10,
    lineHeight: 1.6,
    marginBottom: 15,
    color: colors.dark,
    backgroundColor: "#f8f9fa",
    padding: 10,
    borderRadius: 6,
    borderLeft: `3px solid ${colors.primary}`,
  },
  languageItem: {
    marginBottom: 8,
  },
  languageHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
  },
  languageIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  languageName: {
    fontSize: 10,
    fontWeight: 600,
  },
  languageBar: {
    height: 5,
    backgroundColor: "white",
    borderRadius: 3,
    marginTop: 3,
  },
  languageProgress: {
    height: 5,
    borderRadius: 3,
    backgroundColor: colors.primary,
  },
  projectItem: {
    marginBottom: 12,
    backgroundColor: "#f8f9fa",
    padding: 8,
    borderRadius: 6,
    borderLeft: `3px solid ${colors.primary}`,
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 600,
    marginBottom: 2,
    color: colors.dark,
  },
  link: {
    fontSize: 9,
    color: colors.primary,
    textDecoration: "none",
    marginTop: 3,
  },
  footer: {
    backgroundColor: colors.primary,
    padding: 10,
    color: "white",
    fontSize: 8,
    textAlign: "center",
  },
  sidebarSection: {
    marginBottom: 20,
    padding: 12,
    backgroundColor: "white",
    borderRadius: 8,
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
  },
})

// Format date
const formatDate = (month, year) => {
  const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]

  return `${monthNames[month - 1]} ${year}`
}

// Helper to format period
const formatPeriod = (startDate, endDate) => {
  const start = startDate ? formatDate(startDate.month || 1, startDate.year) : ""
  const end = endDate ? formatDate(endDate.month || 1, endDate.year) : "Presente"
  return `${start} - ${end}`
}

// Map proficiency to readable format and percentage
const mapProficiency = (proficiency) => {
  const proficiencyMap = {
    NATIVE_OR_BILINGUAL: { text: "Nativo", percent: 100 },
    FULL_PROFESSIONAL: { text: "Profesional", percent: 85 },
    PROFESSIONAL_WORKING: { text: "Profesional", percent: 70 },
  }
  return proficiencyMap[proficiency] || { text: proficiency, percent: 50 }
}

// SVG Icons as components
const LocationIcon = () => (
  <Svg width={12} height={12} viewBox="0 0 24 24" fill={colors.primary}>
    <Path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </Svg>
)

const EmailIcon = () => (
  <Svg width={12} height={12} viewBox="0 0 24 24" fill={colors.primary}>
    <Path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </Svg>
)

const WebIcon = () => (
  <Svg width={12} height={12} viewBox="0 0 24 24" fill={colors.primary}>
    <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </Svg>
)

const GithubIcon = () => (
  <Svg width={12} height={12} viewBox="0 0 24 24" fill={colors.primary}>
    <Path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
  </Svg>
)

const LinkedinIcon = () => (
  <Svg width={12} height={12} viewBox="0 0 24 24" fill={colors.primary}>
    <Path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </Svg>
)

const LanguageIcon = () => (
  <Svg width={12} height={12} viewBox="0 0 24 24" fill={colors.primary}>
    <Path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
  </Svg>
)

const ModernCV = () => {
  // Profile data
  const profile = {
    firstName: "Miguel Angel",
    lastName: "Durán García",
    headline:
      "Software Engineer and Web Developer. Awarded as GitHub Star, Microsoft MVP, and Google Developer Expert.",
    summary:
      "I was born on the 12th of February of 1985 in Barcelona. I'm a passionate about programming since a child. I started playing with Locomotive BASIC with an Amstrad CPC which give as a present to me my father. Since then to today I've used a lot of technologies and different programming languages.\n\nOne of my biggest motivations is learn. That's why I started to self-taught, reading books and seeking tutorials about computer science. Years later I completed a computer engineering at Open University of Catalonia. Since then I have not stopped to keep working as a developer and keep learning.\n\nI like assist to developer meetings, conferences, do workshops and share knowledge. The best place to work is where I can improve constantly.",
    location: "Spain",
    email: "midudev@gmail.com", // Assumed email based on username
    website: "midudev.com", // Assumed website based on username
    linkedin: "linkedin.com/in/midudev",
    github: "github.com/midudev",
    profileImage:
      "https://media.licdn.com/dms/image/v2/D4D03AQHigBNGVqRnOA/profile-displayphoto-shrink_400_400/0/1723639491706?e=1734566400&v=beta&t=EVSvZcB95zW1Xj9PHkPyUWbnmeN3OI5AkZ7MoYB1-PU",
    experience: [
      {
        companyName: "midudev",
        title: "Content Creator about Programming and Web Technologies",
        timePeriod: { startDate: { month: 1, year: 2021 } },
        description:
          "- Most-watched Spanish programming streamer on Twitch (https://twitch.tv/midudev)\n- I spread knowledge about Programming and Development on various social media platforms.\n- 2 YouTube channels with over 250,000 and 100,000 subscribers each.\n- +315,000 followers on Instagram.",
      },
      {
        companyName: "Adevinta Spain",
        title: "Lead Frontend Architect",
        timePeriod: {
          endDate: { month: 9, year: 2022 },
          startDate: { month: 6, year: 2016 },
        },
        description:
          "Soy parte del equipo Enablers Frontend en Adevinta Spain. Nuestra misión es conseguir que todos nuestros verticales (Fotocasa, MilAnuncios, Habitaclia, Coches.net, Infojobs) converjan tecnológicamente, tener una arquitectura moderna, flexible y optimizada, y la excelencia tecnológica de los desarrolladores, fomentando buenas prácticas y dando talleres para compartir conocimiento.",
      },
      {
        companyName: "Sublime Codes",
        title: "Co-Founder and Software Engineer",
        timePeriod: {
          endDate: { month: 2, year: 2022 },
          startDate: { month: 10, year: 2018 },
        },
        description:
          "Code consultancy studio. We help you creating your next MVP or project with care, focusing on quality and endurability. Best-in-class projects based on Javascript, ReactJS, GraphQL and Node.",
      },
      {
        companyName: "Typeform.com",
        title: "Front End Engineer",
        timePeriod: {
          endDate: { month: 1, year: 2017 },
          startDate: { month: 11, year: 2016 },
        },
      },
    ],
    education: [
      {
        schoolName: "Universitat Oberta de Catalunya",
        degreeName: "Ingeniería de Software",
        fieldOfStudy: "(Informática, Economía, Márketing, Física, Matemáticas)",
        timePeriod: { endDate: { year: 2009 }, startDate: { year: 2003 } },
      },
      {
        schoolName: "Universitat Politècnica de Catalunya",
        degreeName: "Ingeniero Técnico en Informática de Gestión",
        fieldOfStudy: "Director de proyectos TIC, Desarrollador de aplicaciones, Planificador de Productos",
        timePeriod: { endDate: { year: 2007 }, startDate: { year: 2004 } },
      },
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Frontend Development",
      "Web Development",
      "CSS",
      "HTML",
      "GraphQL",
      "SQL",
      "Git",
      "Docker",
    ],
    languages: [
      { name: "Español", proficiency: "NATIVE_OR_BILINGUAL" },
      { name: "Catalán", proficiency: "FULL_PROFESSIONAL" },
      { name: "Inglés", proficiency: "PROFESSIONAL_WORKING" },
    ],
    honors: [
      {
        title: "Microsoft MVP Developer Technologies",
        issuer: "Microsoft",
        issueDate: { month: 1, year: 2023 },
      },
      {
        title: "Google Developer Expert",
        issuer: "Google",
        issueDate: { month: 7, year: 2021 },
      },
      {
        title: "GitHub Star ⭐️",
        issuer: "GitHub",
        issueDate: { month: 8, year: 2020 },
      },
    ],
    projects: [
      {
        title: "Web Luces en La Oscuridad",
        description:
          "Página web desarrollada en Wordpress del programa de radio Luces en la Oscuridad, un programa líder de audiencia en las radios españolas y sudamericanas.",
        url: "http://lucesenlaosscuridad.es",
        timePeriod: {
          endDate: { month: 3, year: 2015 },
          startDate: { month: 3, year: 2015 },
        },
      },
      {
        title: "Web Xavi Santolaya",
        description:
          "Web del colorista Xavi Santolaya. Xavi tiene más de 12 años de experiencia creando y mejorando comerciales y vídeos musicales, entre otras piezas visuales, para sus clientes. Necesitaba una web rápida, sencilla y limpia para mostrar su trabajo.",
        url: "http://xavisantolaya.com/",
        timePeriod: {
          endDate: { month: 10, year: 2014 },
          startDate: { month: 10, year: 2014 },
        },
      },
    ],
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header with profile info */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.name}>
              {profile.firstName} {profile.lastName}
            </Text>
            <Text style={styles.headline}>{profile.headline}</Text>
          </View>
          <View style={styles.headerRight}>
            
            <Image src={profile.profileImage || "/placeholder.svg"} style={styles.profileImage} />
          </View>
        </View>

        <View style={styles.container}>
          {/* Left Column */}
          <View style={styles.leftColumn}>
            <View style={styles.sidebarSection}>
              <Text style={styles.leftSectionTitle}>Contacto</Text>

              <View style={styles.contactItem}>
                <View style={{ marginRight: 8 }}>
                  <LocationIcon />
                </View>
                <Text style={styles.contactText}>{profile.location}</Text>
              </View>

              <View style={styles.contactItem}>
                <View style={{ marginRight: 8 }}>
                  <EmailIcon />
                </View>
                <Text style={styles.contactText}>{profile.email}</Text>
              </View>

              <View style={styles.contactItem}>
                <View style={{ marginRight: 8 }}>
                  <WebIcon />
                </View>
                <Text style={styles.contactText}>{profile.website}</Text>
              </View>

              <View style={styles.contactItem}>
                <View style={{ marginRight: 8 }}>
                  <GithubIcon />
                </View>
                <Text style={styles.contactText}>{profile.github}</Text>
              </View>

              <View style={styles.contactItem}>
                <View style={{ marginRight: 8 }}>
                  <LinkedinIcon />
                </View>
                <Text style={styles.contactText}>{profile.linkedin}</Text>
              </View>
            </View>

            <View style={styles.sidebarSection}>
              <Text style={styles.leftSectionTitle}>Habilidades</Text>
              <View style={styles.skillsContainer}>
                {profile.skills.map((skill, index) => (
                  <Text key={index} style={styles.skillBadge}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>

            <View style={styles.sidebarSection}>
              <Text style={styles.leftSectionTitle}>Idiomas</Text>
              {profile.languages.map((language, index) => {
                const proficiency = mapProficiency(language.proficiency)
                return (
                  <View key={index} style={styles.languageItem}>
                    <View style={styles.languageHeader}>
                      <View style={{ marginRight: 5 }}>
                        <LanguageIcon />
                      </View>
                      <Text style={styles.languageName}>{language.name}</Text>
                      <Text style={{ fontSize: 8, marginLeft: 5, color: colors.gray }}>({proficiency.text})</Text>
                    </View>
                    <View style={styles.languageBar}>
                      <View
                        style={[
                          styles.languageProgress,
                          {
                            width: `${proficiency.percent}%`,
                          },
                        ]}
                      />
                    </View>
                  </View>
                )
              })}
            </View>

            <View style={styles.sidebarSection}>
              <Text style={styles.leftSectionTitle}>Reconocimientos</Text>
              {profile.honors.map((award, index) => (
                <View key={index} style={styles.awardItem}>
                  <Text style={styles.awardTitle}>{award.title}</Text>
                  <Text style={styles.awardIssuer}>
                    {award.issuer} • {formatDate(award.issueDate.month, award.issueDate.year)}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Right Column */}
          <View style={styles.rightColumn}>
            <View style={styles.sectionContent}>
              <Text style={styles.sectionTitle}>Sobre Mí</Text>
              <Text style={styles.summary}>{profile.summary}</Text>
            </View>

            <View style={styles.sectionContent}>
              <Text style={styles.sectionTitle}>Experiencia</Text>
              {profile.experience.map((exp, index) => (
                <View key={index} style={styles.experienceItem}>
                  <View style={styles.experienceDot} />
                  <Text style={styles.companyName}>{exp.companyName}</Text>
                  <Text style={styles.jobTitle}>{exp.title}</Text>
                  <Text style={styles.period}>{formatPeriod(exp.timePeriod.startDate, exp.timePeriod.endDate)}</Text>
                  {exp.description && <Text style={styles.description}>{exp.description}</Text>}
                </View>
              ))}
            </View>

            <View style={styles.sectionContent}>
              <Text style={styles.sectionTitle}>Educación</Text>
              {profile.education.map((edu, index) => (
                <View key={index} style={styles.educationItem}>
                  <View style={styles.educationDot} />
                  <Text style={styles.schoolName}>{edu.schoolName}</Text>
                  <Text style={styles.degree}>{edu.degreeName}</Text>
                  <Text style={styles.period}>{formatPeriod(edu.timePeriod.startDate, edu.timePeriod.endDate)}</Text>
                  {edu.fieldOfStudy && <Text style={styles.description}>{edu.fieldOfStudy}</Text>}
                </View>
              ))}
            </View>

            <View style={styles.sectionContent}>
              <Text style={styles.sectionTitle}>Proyectos</Text>
              {profile.projects.map((project, index) => (
                <View key={index} style={styles.projectItem}>
                  <Text style={styles.projectTitle}>{project.title}</Text>
                  <Text style={styles.period}>
                    {formatPeriod(project.timePeriod.startDate, project.timePeriod.endDate)}
                  </Text>
                  <Text style={styles.description}>{project.description}</Text>
                  {project.url && (
                    <Link src={project.url} style={styles.link}>
                      {project.url}
                    </Link>
                  )}
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>CV creado por Miguel Angel Durán García • {new Date().toLocaleDateString()}</Text>
        </View>
      </Page>
    </Document>
  )
}

export default ModernCV
