import type { ProfileData } from "@/types"

// Función para obtener los datos del perfil desde la API
export async function fetchProfileData(): Promise<ProfileData> {
  try {
    // En un entorno real, aquí harías una llamada a tu API privada
    // const response = await fetch('https://tu-api.com/profile', {
    //   headers: {
    //     'Authorization': `Bearer ${process.env.API_TOKEN}`
    //   }
    // });
    // return await response.json();

    // Para este ejemplo, usamos datos de muestra
    // En producción, reemplaza esto con tu llamada a la API real
    return getMockProfileData()
  } catch (error) {
    console.error("Error fetching profile data:", error)
    throw error
  }
}

// Datos de muestra para desarrollo
function getMockProfileData(): ProfileData {
  // Aquí puedes usar los datos proporcionados en el archivo adjunto
  // o cualquier estructura de datos que coincida con tu API
  return {
    firstName: "Federico",
    lastName: "Tiersen",
    headline: "Head of Product at Mindstep · Founder of Spur",
    summary: "I design, build, and grow impactful products.\n\nBased in London and Berlin.",
    locationName: "London, England, United Kingdom",
    industryName: "Technology, Information and Internet",
    displayPictureUrl: "https://media.licdn.com/dms/image/v2/D4E03AQEaoZFTtBGPNA/profile-displayphoto-shrink_",
    img_400_400:
      "400_400/profile-displayphoto-shrink_400_400/0/1698068603208?e=1750291200&v=beta&t=Dkk2fqyUPFxT29Gx6-1migsJyKUj-_Ro5PCc0JHJlds",
    experience: [
      {
        locationName: "City Of London, England, United Kingdom",
        geoUrn: "urn:li:fs_geo:110652431",
        companyName: "Mindstep",
        description:
          "• Leading teams of designers, engineers, product managers, researchers, and doctors to build iOS and web apps that support the mental health of 750k people. \n• Overseeing the design and development of B2B apps for health insurers and the NHS that generated £700k in revenue and £2.5M in capital.\n• Directing Mindstep's product strategy and heading the development of the first AI agent to provide complete mental health support, from therapeutic conversations to practical skills and clinical referrals.",
        title: "Head of Product",
        companyUrn: "urn:li:fs_miniCompany:18740300",
        honors: [
          "urn:li:fs_honor:(ACoAACJrZtEBJ4Z5qG7pO_WYv0EnV64bi2wz6ks,1557623334)",
          "urn:li:fs_honor:(ACoAACJrZtEBJ4Z5qG7pO_WYv0EnV64bi2wz6ks,692943164)",
        ],
        entityUrn: "urn:li:fs_position:(ACoAACJrZtEBJ4Z5qG7pO_WYv0EnV64bi2wz6ks,2174053766)",
        geoLocationName: "City Of London, England, United Kingdom",
        timePeriod: { startDate: { month: 5, year: 2023 } },
        company: {
          employeeCountRange: { start: 11, end: 50 },
          industries: ["Mental Health Care"],
        },
        region: "urn:li:fs_region:(gb,4583)",
        companyLogoUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQFc3gaWTUQHFg/company-logo_",
      },
      {
        locationName: "City Of London, England, United Kingdom",
        entityUrn: "urn:li:fs_position:(ACoAACJrZtEBJ4Z5qG7pO_WYv0EnV64bi2wz6ks,2615789368)",
        geoLocationName: "City Of London, England, United Kingdom",
        geoUrn: "urn:li:fs_geo:110652431",
        companyName: "Spur Technologies Ltd",
        timePeriod: { startDate: { month: 8, year: 2024 } },
        description:
          "- Helping musicians get their music heard by promoting their tracks on social media content.\n- Launched www.spur.promo and achieved a 3:1 LTV to CAC ratio through Google Search Ads and TikTok content.\n- Connected an audience of over 3 million listeners to emerging musicians.",
        company: {
          employeeCountRange: { start: 2, end: 10 },
          industries: ["Computer Software"],
        },
        title: "Founder & CEO",
        region: "urn:li:fs_region:(gb,4583)",
        companyUrn: "urn:li:fs_miniCompany:105821880",
        companyLogoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQG2bSM8JpPoog/company-logo_",
      },
    ],
    education: [
      {
        entityUrn: "urn:li:fs_education:(ACoAACJrZtEBJ4Z5qG7pO_WYv0EnV64bi2wz6ks,418216389)",
        school: {
          objectUrn: "urn:li:school:12598",
          entityUrn: "urn:li:fs_miniSchool:12598",
          active: true,
          schoolName: "Imperial College London",
          trackingId: "rn5gtGI4RVCz3cS3fvlcyg==",
          logoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQGOM2ioD3Ym6w/company-logo_",
        },
        grade: "First Class Honours",
        timePeriod: {
          endDate: { month: 6, year: 2020 },
          startDate: { month: 10, year: 2016 },
        },
        description:
          "•\tDesigned and built digital and physical products including a mixed reality navigation app, a sports wearable that optimises recovery, a stick blender for the blind, a dancing segway, and a flying roller coaster.\n•\tCombined design thinking with engineering knowledge and practice to create innovative products and systems at the intersection of computing, mechanics, and electronics. \n•\tDeveloped design and engineering skills, with an emphasis on creativity, computer-aided engineering, optimisation, human factors and the design process.\n•\tLearned to bring new innovations to market through manufacturing techniques, product development, technical design and rapid prototyping.\n•\tAchieved the highest Thesis marks of the cohort and won 3 awards for my work on Holdable Devices: phone cases that detect phone addiction from hand movements and nudge users to be on their phone more mindfully. Read more at https://link.springer.com/chapter/10.1007/978-3-030-78465-2_35",
        degreeName: "Master of Engineering - MEng",
        schoolName: "Imperial College London",
        fieldOfStudy: "Design Engineering",
        honors: [
          "urn:li:fs_honor:(ACoAACJrZtEBJ4Z5qG7pO_WYv0EnV64bi2wz6ks,525464186)",
          "urn:li:fs_honor:(ACoAACJrZtEBJ4Z5qG7pO_WYv0EnV64bi2wz6ks,525566678)",
          "urn:li:fs_honor:(ACoAACJrZtEBJ4Z5qG7pO_WYv0EnV64bi2wz6ks,2090279223)",
        ],
        degreeUrn: "urn:li:fs_degree:551",
        schoolUrn: "urn:li:fs_miniSchool:12598",
      },
      {
        entityUrn: "urn:li:fs_education:(ACoAACJrZtEBJ4Z5qG7pO_WYv0EnV64bi2wz6ks,706302664)",
        school: {
          objectUrn: "urn:li:school:4152024",
          entityUrn: "urn:li:fs_miniSchool:4152024",
          active: true,
          schoolName: "AiCore",
          trackingId: "dvR1yZrwRkGvjlpQtFOTow==",
          logoUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQFd1hpR6yzytg/company-logo_",
        },
        timePeriod: {
          endDate: { month: 7, year: 2021 },
          startDate: { month: 2, year: 2021 },
        },
        description:
          "Studying a Masters-equivalent intensive course on practical applications of AI to solving real world problems.\xa0Key topics include:\n\n- Web scraping\n- SQL\n- Data science (Data cleaning, visualization, A/B testing, recommendation systems, statistics, time series modelling)\n- Machine learning (Regression, random forest, SVMs, PCA, t-SNE )\n- Deep learning (Pytorch, neural networks, CNNs, RNNs, Autoencoders, GANs)\n- Natural Language Processing (LSTMs, transformers, attention mechanism, BERT, HuggingFace)\n- Training in the cloud (AWS EC2)\n- Deployment (Python Flask, Cron, API creation, AWS Lambda, Docker, ONNX, TensorFlow.JS, GCP AI services)",
        degreeName: "Data Science and Machine Learning",
        schoolName: "AiCore",
        schoolUrn: "urn:li:fs_miniSchool:4152024",
      },
      {
        entityUrn: "urn:li:fs_education:(ACoAACJrZtEBJ4Z5qG7pO_WYv0EnV64bi2wz6ks,438130581)",
        school: {
          objectUrn: "urn:li:school:21176",
          entityUrn: "urn:li:fs_miniSchool:21176",
          active: true,
          schoolName: "International School of Brussels",
          trackingId: "j7rvO9sQRT2ckzmS/PRmCA==",
          logoUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQHwAd3gNDfvzg/company-logo_",
        },
        activities: "Sports Management, Football, Rock Climbing, Strings Orchestra",
        timePeriod: { endDate: { year: 2016 }, startDate: { year: 2009 } },
        description:
          "Higher Level Mathematics, Physics, Visual Arts. Standard Level Business Management, English A Language and Literature, French A Language and Literature",
        degreeName: "International Baccalaureate",
        schoolName: "International School of Brussels",
        schoolUrn: "urn:li:fs_miniSchool:21176",
      },
    ],
    skills: [
      { name: "Entrepreneurship" },
      { name: "Marketing" },
      { name: "Product Strategy" },
      { name: "Large Language Models (LLM)" },
      { name: "UX Design" },
      { name: "Product Management" },
      { name: "AI" },
      { name: "Leadership" },
    ],
    projects: [
      {
        title: "WoF",
        description:
          "📎 https://wof-project.vercel.app/\n\nWoF es una plataforma innovadora que conecta dueños de animales con cuidadores profesionales de manera eficiente. En el front-end, se utiliza React para una interfaz dinámica, SCSS para estilos atractivos y Redux para gestionar el estado. La seguridad se basa en JWT y un sistema de login de terceros. El panel de administración permite supervisión y control seguros.",
        timePeriod: {
          endDate: { month: 12, year: 2023 },
          startDate: { month: 10, year: 2023 },
        },
        members: [
          {
            member: {
              firstName: "Jose Antonio",
              lastName: "Barba Rodríguez",
            },
          },
        ],
      },
      {
        title: "Portfolio",
        description: "Portfolio generated with Next.Js\nhttps://portfolio-esetoni.vercel.app/",
        members: [
          {
            member: {
              firstName: "Jose Antonio",
              lastName: "Barba Rodríguez",
            },
          },
        ],
      },
    ],
    publications: [
      {
        date: { month: 8, year: 2021, day: 11 },
        name: "Smart Home Sensing and Monitoring in Households With Dementia: User-Centered Design Approach",
        publisher: "JMIR Aging",
        description:
          "Designed and tested smart home devices for people living with Dementia and their carers. Cited by over 70 papers.",
        url: "https://pubmed.ncbi.nlm.nih.gov/34383672/",
        authors: [
          {
            member: {
              firstName: "Federico",
              lastName: "Tiersen",
            },
          },
        ],
      },
      {
        date: { month: 7, year: 2021, day: 3 },
        name: "Holdable Devices: Supporting Mindfulness, Psychological Autonomy and Self-Regulation During Smartphone Use",
        publisher: "Human-Computer Interaction: Interaction Techniques and Novel Applications",
        description:
          "Designed and built a phone case that senses phone addiction and helps people use their phone mindfully. Won the Best Paper Award at the Human Computer Interaction International Conference (HCII).",
        url: "https://link.springer.com/chapter/10.1007/978-3-030-78465-2_35",
        authors: [
          {
            member: {
              firstName: "Federico",
              lastName: "Tiersen",
            },
          },
        ],
      },
    ],
    certifications: [
      {
        authority: "AiCore",
        name: "Certified Software Engineer",
        timePeriod: {
          endDate: { month: 2, year: 2026 },
          startDate: { month: 2, year: 2024 },
        },
        company: {
          name: "AiCore",
          logo: {
            "com.linkedin.common.VectorImage": {
              rootUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQFd1hpR6yzytg/company-logo_",
            },
          },
        },
        displaySource: "theaicore.com",
        url: "https://portal.theaicore.com/showcase/certificate/2/3d17c9fd-2a9b-4680-90d8-ddd8cc24386e-4781f4cc-2a3a-420c-adb6-271ba141bf8a",
      },
      {
        authority: "AiCore",
        name: "Certified Data and Cloud Engineer",
        timePeriod: {
          endDate: { month: 7, year: 2026 },
          startDate: { month: 7, year: 2024 },
        },
        company: {
          name: "AiCore",
          logo: {
            "com.linkedin.common.VectorImage": {
              rootUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQFd1hpR6yzytg/company-logo_",
            },
          },
        },
        displaySource: "theaicore.com",
        url: "https://portal.theaicore.com/showcase/certificate/2/3d17c9fd-2a9b-4680-90d8-ddd8cc24386e-0da02867-91fb-44b8-bb59-52ca8efaa60c",
      },
    ],
    languages: [
      { name: "English", proficiency: "NATIVE_OR_BILINGUAL" },
      { name: "French", proficiency: "NATIVE_OR_BILINGUAL" },
      { name: "Italian", proficiency: "NATIVE_OR_BILINGUAL" },
      { name: "Spanish", proficiency: "FULL_PROFESSIONAL" },
    ],
  }
}
