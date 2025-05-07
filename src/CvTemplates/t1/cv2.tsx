
import { Document, Page, Text, View, StyleSheet, Image, Link, Svg, Path } from "@react-pdf/renderer"

// Define colors - minimalist palette
const colors = {
  primary: "#0f172a", // Dark blue/slate
  accent: "#3b82f6", // Blue
  dark: "#1e293b",
  gray: "#64748b",
  lightGray: "#e2e8f0",
  background: "#ffffff",
  sidebarBg: "#f8fafc", // Very light blue-gray
}

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.background,
    color: colors.dark,
  },
  container: {
    flexDirection: "row",
    flex: 1,
  },
  leftColumn: {
    width: "32%",
    backgroundColor: colors.sidebarBg,
    padding: 0,
  },
  rightColumn: {
    width: "68%",
    padding: "40 30 30 30",
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
    paddingTop: 40,
    paddingBottom: 25,
    borderBottom: `1px solid ${colors.lightGray}`,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 4,
    color: colors.primary,
    textAlign: "center",
  },
  headline: {
    fontSize: 9,
    fontWeight: 400,
    color: colors.gray,
    marginBottom: 5,
    textAlign: "center",
    lineHeight: 1.4,
    paddingHorizontal: 15,
  },
  sidebarContent: {
    padding: "0 20 20 20",
  },
  contactInfo: {
    marginBottom: 25,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    fontSize: 9,
    color: colors.dark,
  },
  contactText: {
    fontSize: 9,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 15,
    color: colors.primary,
    borderBottom: `2px solid ${colors.accent}`,
    paddingBottom: 5,
    textTransform: "uppercase",
  },
  leftSectionTitle: {
    fontSize: 12,
    fontWeight: 600,
    marginBottom: 12,
    color: colors.primary,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  sectionContent: {
    marginBottom: 25,
  },
  experienceItem: {
    marginBottom: 18,
    position: "relative",
  },
  companyName: {
    fontSize: 12,
    fontWeight: 600,
    marginBottom: 2,
    color: colors.primary,
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: 500,
    color: colors.accent,
    marginBottom: 3,
  },
  period: {
    fontSize: 9,
    color: colors.gray,
    marginBottom: 5,
  },
  description: {
    fontSize: 9,
    lineHeight: 1.5,
    color: colors.dark,
  },
  educationItem: {
    marginBottom: 15,
  },
  schoolName: {
    fontSize: 11,
    fontWeight: 600,
    marginBottom: 2,
    color: colors.primary,
  },
  degree: {
    fontSize: 10,
    marginBottom: 2,
    color: colors.accent,
    fontWeight: 500,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
  skillBadge: {
    backgroundColor: "white",
    color: colors.primary,
    padding: "3 8",
    borderRadius: 4,
    fontSize: 8,
    margin: "0 5 5 0",
    fontWeight: 500,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  awardItem: {
    marginBottom: 10,
  },
  awardTitle: {
    fontSize: 10,
    fontWeight: 600,
    marginBottom: 2,
    color: colors.primary,
  },
  awardIssuer: {
    fontSize: 9,
    color: colors.gray,
  },
  summary: {
    fontSize: 10,
    lineHeight: 1.6,
    marginBottom: 20,
    color: colors.dark,
  },
  languageItem: {
    marginBottom: 8,
  },
  languageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
  },
  languageName: {
    fontSize: 9,
    fontWeight: 500,
  },
  languageLevel: {
    fontSize: 8,
    color: colors.gray,
  },
  languageBar: {
    height: 3,
    backgroundColor: colors.lightGray,
    borderRadius: 2,
    marginTop: 3,
  },
  languageProgress: {
    height: 3,
    borderRadius: 2,
    backgroundColor: colors.accent,
  },
  projectItem: {
    marginBottom: 15,
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 600,
    marginBottom: 2,
    color: colors.primary,
  },
  link: {
    fontSize: 9,
    color: colors.accent,
    textDecoration: "none",
    marginTop: 3,
  },
  divider: {
    height: 1,
    backgroundColor: colors.lightGray,
    marginVertical: 15,
  },
  sidebarSection: {
    marginBottom: 20,
  },
  accentBar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: colors.accent,
    marginRight: 8,
  },
  experienceContent: {
    paddingLeft: 10,
  },
  nameHighlight: {
    color: colors.accent,
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
  <Svg width={10} height={10} viewBox="0 0 24 24" fill={colors.accent}>
    <Path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </Svg>
)

const EmailIcon = () => (
  <Svg width={10} height={10} viewBox="0 0 24 24" fill={colors.accent}>
    <Path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </Svg>
)

const WebIcon = () => (
  <Svg width={10} height={10} viewBox="0 0 24 24" fill={colors.accent}>
    <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </Svg>
)

const GithubIcon = () => (
  <Svg width={10} height={10} viewBox="0 0 24 24" fill={colors.accent}>
    <Path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
  </Svg>
)

const LinkedinIcon = () => (
  <Svg width={10} height={10} viewBox="0 0 24 24" fill={colors.accent}>
    <Path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
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
        <View style={styles.container}>
          {/* Left Column */}
          <View style={styles.leftColumn}>
            {/* Profile Section */}
            <View style={styles.profileSection}>
              <Image src={profile.profileImage || "/placeholder.svg"} style={styles.profileImage} />
              <Text style={styles.name}>
                {profile.firstName} <Text style={styles.nameHighlight}>{profile.lastName}</Text>
              </Text>
              <Text style={styles.headline}>{profile.headline}</Text>
            </View>

            <View style={styles.sidebarContent}>
              {/* Contact Section */}
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

              {/* Skills Section */}
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

              {/* Languages Section */}
              <View style={styles.sidebarSection}>
                <Text style={styles.leftSectionTitle}>Idiomas</Text>
                {profile.languages.map((language, index) => {
                  const proficiency = mapProficiency(language.proficiency)
                  return (
                    <View key={index} style={styles.languageItem}>
                      <View style={styles.languageHeader}>
                        <Text style={styles.languageName}>{language.name}</Text>
                        <Text style={styles.languageLevel}>{proficiency.text}</Text>
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

              {/* Awards Section */}
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
          </View>

          {/* Right Column */}
          <View style={styles.rightColumn}>
            {/* About Me Section */}
            <View style={styles.sectionContent}>
              <Text style={styles.sectionTitle}>Sobre Mí</Text>
              <Text style={styles.summary}>{profile.summary}</Text>
            </View>

            {/* Experience Section */}
            <View style={styles.sectionContent}>
              <Text style={styles.sectionTitle}>Experiencia</Text>
              {profile.experience.map((exp, index) => (
                <View key={index} style={styles.experienceItem}>
                  <View style={styles.accentBar} />
                  <View style={styles.experienceContent}>
                    <Text style={styles.companyName}>{exp.companyName}</Text>
                    <Text style={styles.jobTitle}>{exp.title}</Text>
                    <Text style={styles.period}>{formatPeriod(exp.timePeriod.startDate, exp.timePeriod.endDate)}</Text>
                    {exp.description && <Text style={styles.description}>{exp.description}</Text>}
                  </View>
                </View>
              ))}
            </View>

            {/* Education Section */}
            <View style={styles.sectionContent}>
              <Text style={styles.sectionTitle}>Educación</Text>
              {profile.education.map((edu, index) => (
                <View key={index} style={styles.educationItem}>
                  <Text style={styles.schoolName}>{edu.schoolName}</Text>
                  <Text style={styles.degree}>{edu.degreeName}</Text>
                  <Text style={styles.period}>{formatPeriod(edu.timePeriod.startDate, edu.timePeriod.endDate)}</Text>
                  {edu.fieldOfStudy && <Text style={styles.description}>{edu.fieldOfStudy}</Text>}
                </View>
              ))}
            </View>

            {/* Projects Section */}
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
      </Page>
    </Document>
  )
}

export default ModernCV
