import { EducationSection } from "../interfaces/education.interface";
import { ExternalSite } from "../interfaces/external-site.interface"
import { ProjectSection } from "../interfaces/project.interface";
import { SkillSection } from "../interfaces/skill-section.interface";
import { ExperienceSection } from "../interfaces/work-experience.interface";
import { AssetPaths } from "./asset-paths.enum";

// Social media links to show
const SocialMediaLinks: ExternalSite[] = [
    {
        name: "Github",
        link: "https://github.com/morrisdev",
        simpleIconName: "GitHub",
        backgroundColor: "#181717",
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/morrisdev/",
        simpleIconName: "LinkedIn", // this icon is not available in simple icon v14
        backgroundColor: "#0066c8", // manually checked
    },
    // {
    //     name: "LeetCode",
    //     link: "https://leetcode.com/dhruvilrathod/",
    //     simpleIconName: "LeetCode",
    //     backgroundColor: "#FFA116",
    // },
    {
        name: "Gmail",
        link: "mailto:dmorris@morrisdev.com",
        simpleIconName: "Gmail",
        backgroundColor: "#EA4335",
    },
    // {
    //     name: "Instagram",
    //     link: "https://www.instagram.com/dhruvil.rthd/",
    //     simpleIconName: "Instagram",
    //     backgroundColor: "#FF0069",
    // }
]

// Fullstack skills
const FullstackSkills: ExternalSite[] = [
    {
        name: "Angular",
        link: "https://angular.dev/",
        simpleIconName: "Angular",
        backgroundColor: "#ea2848",
    },
    {
        name: "HTML5",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        simpleIconName: "HTML5",
        backgroundColor: "#E34F26",
    },
    {
        name: "CSS3",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        simpleIconName: "CSS3",
        backgroundColor: "#1572B6",
    },
    {
        name: "Sass",
        link: "https://sass-lang.com/",
        simpleIconName: "Sass",
        backgroundColor: "#CC6699",
    },
    {
        name: "NodeJS",
        link: "https://nodejs.org/",
        simpleIconName: "Node.js",
        backgroundColor: "#5FA04E",
    },
    {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        simpleIconName: "JavaScript",
        backgroundColor: "#F7DF1E",
    },
    {
        name: "ExpressJS",
        link: "https://expressjs.com/",
        simpleIconName: "Express",
        backgroundColor: "#000000",
    },
    {
        name: "ThreeJS",
        link: "https://threejs.org/",
        simpleIconName: "Three.js",
        backgroundColor: "#000000",
    },
    {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
        simpleIconName: "Tailwind CSS",
        backgroundColor: "#06B6D4",
    },
    {
        name: "Bootstrap",
        link: "https://getbootstrap.com/",
        simpleIconName: "Bootstrap",
        backgroundColor: "#7952B3",
    },
    {
        name: "PrimeNG",
        link: "https://primeng.org/",
        simpleIconName: "PrimeNG",
        backgroundColor: "#DD0031",
    },
];

// Fullstack section
const FullstackSection: SkillSection = {
    sectionTitle: "Fullstack Development",
    imagePath: AssetPaths.FULL_STACK_DEVELOPMENT_SVG,
    skillLinks: FullstackSkills,
    skillsList: [
        "Building a comprehensive UI around your business",
        "A database structure that is flexible to grow with you",
        "Integrating with storage, email, accounting and more",
        
    ]
}

// Could skills
const CloudSkills: ExternalSite[] = [
    {
        name: "GCP",
        link: "https://cloud.google.com/",
        simpleIconName: "Google Cloud",
        backgroundColor: "#4285F4",
    },
    {
        name: "AWS",
        link: "https://aws.amazon.com/",
        simpleIconName: "Amazon Web Services",
        backgroundColor: "#232F3E",
    },
    {
        name: "Firebase",
        link: "https://firebase.google.com/",
        simpleIconName: "Firebase",
        backgroundColor: "#FFCA28",
    },
    {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
        simpleIconName: "PostgreSQL",
        backgroundColor: "#336791",
    },
    {
        name: "MongoDB",
        link: "https://www.mongodb.com/",
        simpleIconName: "MongoDB",
        backgroundColor: "#47A248",
    },
    {
        name: "Docker",
        link: "https://www.docker.com/",
        simpleIconName: "Docker",
        backgroundColor: "#1488C6",
    },
    {
        name: "Render",
        link: "https://render.com/",
        simpleIconName: "Render",
        backgroundColor: "#000000",
    },
    {
        name: "Heroku",
        link: "https://www.heroku.com/",
        simpleIconName: "Heroku",
        backgroundColor: "#430098",
    },
];

// Could section
const CloudSection: SkillSection = {
    sectionTitle: "Cloud Infra-Architecture",
    imagePath: AssetPaths.CLOUD_INFRASTRUCTURE_SVG,
    skillLinks: CloudSkills,
    skillsList: [
        "Working with Azure, Amazon and Google Cloud Services",
        "Both outsourced hosting and colocated services on site",
        "Integrations from custom databases into Quickbooks, Penta, QuickBase, Hubspot and more",
    ]
}

// Design skills
const DesignSkills: ExternalSite[] = [
    {
        name: "Adobe XD",
        link: "https://adobexdplatform.com/",
        simpleIconName: "Adobe XD",
        backgroundColor: "#FF2BC2",
    },
    {
        name: "Figma",
        link: "https://figma.com/",
        simpleIconName: "Figma",
        backgroundColor: "#F24E1E",
    },
    {
        name: "Adobe Illustrator",
        link: "https://www.adobe.com/au/products/illustrator.html/",
        simpleIconName: "Adobe Illustrator",
        backgroundColor: "#FF7C00",
    },
    {
        name: "Adobe Photoshop",
        link: "https://www.adobe.com/products/photoshop.html/",
        simpleIconName: "Adobe Photoshop",
        backgroundColor: "#001e36",
    },
];

// Design section
const DesignSection: SkillSection = {
    sectionTitle: "UI/UX Design",
    imagePath: AssetPaths.UI_UX_DESIGN_SVG,
    skillLinks: DesignSkills,
    skillsList: [
        "Designing for fast and efficient use by staff",
        "Custom process flows that run smoothly using background updates",
        "Optimize user experience with integrated security and user data",
    ]
}

// Design skills
const DigitalSolutionSkills: ExternalSite[] = [

];

// Design section
const DigitalSolutionSection: SkillSection = {
    sectionTitle: "Digital Solutions & Consultancy",
    imagePath: AssetPaths.DIGITAL_SOLUTIONS_SVG,
    skillLinks: DigitalSolutionSkills,
    skillsList: [
        "Streamlining business operations with tools like Jira, offering automated workflows, and data-driven insights.",
        "Centralizing business data within secure, interconnected platforms to facilitate informed decision-making",
        "Helping local businesses enable real-time communication and task coordination through MS Teams and Outlook",
    ]
}

// Apps associated with projects
const IntegratedApps: ProjectSection = {
    sectionTitle: "Integrated Apps for Field Workers",
    sectionSubtitle: "Field workers can access the tools they need and keep office staff updated in real-time.",
    entities: [
        // {
        //     title: "Full ERP System for Event Industry",
        //     coverImagePath: AssetPaths.PROJECT_THREEJS_IFC_VIEWER,
        //     liveLink: "/projects/erp",
        //     githubLink: "https://github.com/dhruvilrathod/three_ifc_angular",
        //     description: "This is the enterprise version of the well known Intellievent system (which we also built). From bid to billing, this system handles everything an event company needs.",
        //     techStack: ["Angular", "ThreeJS", "ExpressJS", "Heroku"],
        //     year: 2022
        // },
        {
            title: "Job Management App",
            coverImagePath: AssetPaths.PROJECT_SITE_REVIEW,
            githubLink: "/projects/site-review",
            description: "Fully off-line capable system designed for field workers to review job sites, capture photos, automate field reports and sign off on work completed.",
            techStack: ["Angular", "IndexedDB", "Ionic"],
            year: 2023,
            branch: "resource-tree-utility"
        },
        {
            title: "Pinnacle Fleet",
            coverImagePath: AssetPaths.PROJECT_FLEET,
            githubLink: "/projects/pinnacle-fleet",
            description: "An add-on app to handle the fleet management of the Pinnacle Power Services vehicles, integrating multiple systems for tracking, maintenance and depreciation.",
            techStack: ["Ionic", "MSSQL", "IndexedDB", "Google Cloud"],
            year: 2023
        },
        {
            title: "Field Time Sheet",
            coverImagePath: AssetPaths.PROJECT_TIME_SHEET,
            githubLink: "/projects/field-time-sheet",
            description: "Used by over 100 crews in the field, this app allows workers to log hours and automatically calculates overtime, missed meals and subsidies based upon union rules",
            techStack: ["Angular", "Ionic", "MSSQL", "Penta"],
            year: 2023
        },
        // {
        //     title: "Hospital Management System Dashboard",
        //     coverImagePath: AssetPaths.PROJECT_HMS_APP,
        //     githubLink: "https://github.com/freelancer-dhruvil/hms-demo",
        //     description: "🏥 Transformed Figma designs into a fully functional, user-friendly dashboard for a Hospital Management System, ensuring precision and intuitive interface.",
        //     techStack: ["Angular", "PrimeNG", "PrimeFlex", "Figma"],
        //     year: 2024
        // },
        // {
        //     title: "Cross-Platform Music Player",
        //     coverImagePath: AssetPaths.PROJECT_MUSIC_PLAYER,
        //     githubLink: "https://github.com/dhruvilrathod/music_player",
        //     description: "🎵 Developed with Angular and NestJS, this music player evolved into a fullstack app and was wrapped with ElectronJS for a seamless desktop experience.",
        //     techStack: ["Angular", "NestJS", "ElectronJS", "ExpressJS"],
        //     year: 2023
        // }
    ]
}

// Active Projects
const ActiveProjects: ProjectSection = {
    sectionTitle: "Active Projects",
    sectionSubtitle: "Our systems are built for the long term, with maintainability and scalability in mind. Development continues as your business grows.",
    entities: [
        {
            title: "Pinnacle Power ERP",
            coverImagePath: AssetPaths.PROJECT_PINNACLE_POWER,
            liveLink: "/projects/dash",
            description: "Designed to completely automate the process flow of contstruction from bid to invoice. Integrated with Fleet.io, Google Cloud Storage,  BigQuery and PENTA Accounting.",
            techStack: ["Angular 20", "MSSQL", "Google Drive", "Ionic"],
            year: "2020 - Present"
        },
        {
            title: "DC Electric",
            coverImagePath: AssetPaths.PROJECT_DC_ELECTRIC,
            liveLink: "https://dcelectricgroup.com/",
            description: "Internal Billing System, linking their Quickbooks Enterprise system to custom project management and invoicing system, storing generated invoices and documents in Azure Storage",
            techStack: ["Angular", "MSSQL", "Azure Storage"],
            year: "2012 - Present"
        },
        {
            title: "Accessibility Online",
            coverImagePath: AssetPaths.PROJECT_ACCESSONLINE,
            liveLink: "https://beta.accessibilityonline.org/",
            description: "A fully accessible system designed for screen-readers, allowing users to sign up for classes, generated certifications in both and admin and public sites",
            techStack: ["Angular", "MySQL", ".Net", "C#", "AWS"],
            year: "2005 - Present"
        },
        
    ]
}


// Job experience
const JobExperience: ExperienceSection = {
    experienceSectionTitle: "",
    experiences: [
        {
            orgLink: "/samples/embedding",
            orgLogoPath: "/assets/articles/How-Embeddings-Work.jpg",
            orgName: "AI Vector Embeddings Explained and Demonstrated",
            positions: [
                {
                    positionName: "AI Vector Embeddings Explained and Demonstrated",
                    duration: "May 2025 - Present",
                    location: "Pinnacle Power Services",
                     
                    jobType: "OpenAI,Qdrant,Vector Databases",
                    workPoints: [
                        "Working Sample of AI Vector Embeddings",
                        "Learning what a Vector Embedding is and how it works",
                        "How to write the code to generate embeddings",
                        "Understanding the full process of using this with AI",
                    ]
                }
            ]
        },
        {
            orgLink: "/articles/vector-db",
            orgLogoPath: "https://morrisdev.com/wp-content/uploads/2025/09/header-1024x352.jpg",
            orgName: "Leveraging AI to search corporate documents",
            positions: [
                {
                    positionName: "Leveraging AI to search corporate documents",
                    duration: "Apr 2024 - Present",
                    location: "Pinnacle Power Services",
                     
                    jobType: "AI,Vector Databases, MPC",
                    workPoints: [
                        "Built system to break +100k PDF documents into Chunks",
                        "Cross Referenced and automated vector embedding",
                        "Populated Qdrant hosted Vector Database",
                        "Used Google VectorAI to link to production search service",
                    ]
                }
            ]
        },
        {
            orgLink: "/articles/google-cache",
            orgLogoPath: AssetPaths.WORK_GOOGLE_CLOUD_CACHE,
            orgName: "Bulk JSON Cache System",
            positions: [
                {
                    positionName: "Cloud Storage JSON Cache integrated with IndexedDB ",
                    duration: "Jun 2023 - Present",
                    location: "Pinnacle Power Services",
                     jobType: "Google Storage, C#, Angular",
                    workPoints: [
                        "Automated a daily JSON build of all active jobs and their properties",
                        "Pushed to google storage and then into BigQuery using JSONL",
                        "Setup UI to call for signed link directly from Google Storage as initial load for data",
                    ]
                }
            ]
        },
         {
            orgLink: "articles/microsites",
            orgLogoPath: AssetPaths.WORK_ASITE_LOGO,
            orgName: "Integrating Angular Microsites with .Net",
            positions: [
                {
                    positionName: "Integrating Angular Microsite with .Net",
                    duration: "Feb 2023 - May 2025",
                 
                     jobType: "IIS, C#, Angular",
                    workPoints: [
                        "Configuring SSH Servers on Windows Servers",
                        "Setting up continous integration in Azure DevOps",
                        "Multi-Server configurations with Azure Front-Door",
                    ]
                } 
            ]
        },
         {
            orgLink: " ",
            orgLogoPath: AssetPaths.WORK_WORKXMATE_LOGO,
            orgName: "Quickbase Integration and REST API",
            positions: [
                {
                    positionName: "Quickbase Integration and REST API",
                    duration: "Feb 2022 — Mar 2022",
                     locationType: "Remote",
                    jobType: "Part-time",
                    workPoints: [
                        "Designed and implemented an optimized, cross-browser-compatible Attendance Management Module. 🌐✔️",
                        "Built a RESTful Node.js server integrated with Oracle DB for seamless code migration. 🚀📊",
                        "Developed intuitive web forms with robust validation and error handling for a smooth user experience. 🖋️⚙️✨",
                    ]
                }
            ]
        }
    ]
}


// Freenacing Experience
const FreelancingExperience: ExperienceSection = {
    experienceSectionTitle: "Project Development",
    experiences: [
        // {
        //     orgLink: "https://southaustraliatiling.com.au/",
        //     orgLogoPath: AssetPaths.WORK_SA_TILING_LOGO,
        //     orgName: "South Australia Tiling",
        //     positions: [
        //         {
        //             positionName: "Professional Freelancer",
        //             duration: "2025",
        //             location: "Adelaide, WA",
        //             locationType: "Remote",
        //             jobType: "Contract",
        //             workPoints: [
        //                 "Designed and developed a visually appealing website to highlight the high-quality work of a South Australian tiling and bathroom renovation business, improving their online presence.📊",
        //                 "Utilized Server-Side Rendering (SSR) and Static Site Generation (SSG) to enhance search engine visibility and drive organic traffic to the website. 🚀",
        //             ]
        //         }
        //     ]
        // },
        // {
        //     orgLink: "https://kiwifinance.com.au/",
        //     orgLogoPath: AssetPaths.WORK_KIWI_LOGO,
        //     orgName: "Kiwi Finance",
        //     positions: [
        //         {
        //             positionName: "Professional Freelancer",
        //             duration: "2025",
        //             location: "Perth, WA",
        //             locationType: "Remote",
        //             jobType: "Contract",
        //             workPoints: [
        //                 "Designed and developed an SEO-friendly website with financial calculators, and a custom contact form tailored to Astute Financial's requirements. 🌐📊",
        //                 "Streamlined data collection and client inquiries by integrating the contact form with Google Sheets and Gmail. 📋",
        //             ]
        //         }
        //     ]
        // },
        // {
        //     orgLink: "https://rasfinance.com.au/",
        //     orgLogoPath: AssetPaths.WORK_RAS_LOGO,
        //     orgName: "RAS Finance",
        //     positions: [
        //         {
        //             positionName: "Professional Freelancer",
        //             duration: "2024",
        //             location: "Adelaide, SA",
        //             locationType: "Hybrid",
        //             jobType: "Contract",
        //             workPoints: [
        //                 "Built a dynamic website featuring financial calculators, a CMS for articles, and a sleek contact form. 📊📝",
        //                 "Streamlined client inquiries by integrating the contact form with Google Sheets and Gmail. 📧📋✨",
        //             ]
        //         }
        //     ]
        // },
        // {
        //     orgLink: "https://acquireconveyancing.com.au/",
        //     orgLogoPath: AssetPaths.WORK_ACQUIRE_LOGO,
        //     orgName: "Acquire Conveyancing",
        //     positions: [
        //         {
        //             positionName: "Professional Freelancer",
        //             duration: "2023",
        //             location: "Adelaide, SA",
        //             locationType: "Remote",
        //             jobType: "Contract",
        //             workPoints: [
        //                 "Crafted a professional logo, business cards, and responsive website using Illustrator. 🎨💼",
        //                 "Set up a custom domain email and Office 365 with SharePoint for seamless operations. 📧🔗",
        //                 "Developed and hosted an SEO-friendly website with a contact form to boost online presence. 🌐📈",
        //             ]
        //         }
        //     ]
        // },
    ]
}

// Articles
const InternshipExperience: ExperienceSection = {
    experienceSectionTitle: "",
    experiences: [
        
       
    ]
}

// Community Involvement
const CommunityInvolvement: ProjectSection = {
    sectionTitle: "Community Involvement",
    entities: [
        // {
        //     liveLink: "https://adventofcode.com/",
        //     coverImagePath: AssetPaths.ACHIEVEMENT_AOC_PIC,
        //     techStack: ["Python"],
        //     title: "Advent of Code 2024",
        //     description: "📅 Completed all Advent of Code 2024 problems within a personal deadline of 1 day each, showcasing strong DSA and problem-solving skills.🎯",
        //     year: 2024,
        //     githubLink: "https://github.com/dhruvilrathod/RSP/tree/master/advent_of_code",
        // },
    ]
}

// Achievement
const AchievementInvolvement: ProjectSection = {
    sectionTitle: "Achievements",
    entities: [
        // {
        //     liveLink: "https://www.linkedin.com/posts/dhruvilrathod_competitiveprogramming-codingchallenges-teamwork-activity-7291965632684695553-CTqM?utm_source=share&utm_medium=member_desktop&rcm=ACoAADi05s0B8nMLyX_mC2aovn2P6w6tNr-b3AA",
        //     coverImagePath: AssetPaths.ACHIEVEMENT_CPC_RSP_WIN_PIC,
        //     techStack: ["C++", "Python"],
        //     title: "CPC X RSP 2025",
        //     description: "🏆 Secured 3rd place in a high-stakes coding competition, tackling complex algorithms under pressure! Grateful for an incredible team and experience at CPC X RSP competition.",
        //     year: 2025,
        // },
        // {
        //     coverImagePath: AssetPaths.ACHIEVEMENT_UNISA_CHANCELLORS_LETTER_2024_PIC,
        //     liveLink: "unisa-chancellors-letter-of-commandation-2024.html",
        //     // liveLink: "public/unisa-chancellors-letter-of-commandation-2024.html",
        //     techStack: ["Cisco", "FortiGate", "ISO 270001"],
        //     title: "Chancellor's Commendation Letter (2024)",
        //     description: "🚀 Awarded for academic excellence with a cumulative program GPA in the TOP 5% of all students, and invited to join the Golden Key International Honour Society.",
        //     year: 2024,
        // },
    ]
}

// Degrees
const BachelorsDegree: EducationSection = {
    degreeName: "Bachelor of Engineering",
    majorName: "Computer Engineering",
    duration: "Jul 2019 - May 2023",
    universityName: "Gujarat Technological University (GTU)",
    campusName: "VGEC",
    logoImagePath: AssetPaths.EDUCATION_GTU_LOGO,
    gpa: "6.9 / 7.0",
    websiteLink: "https://www.gtu.ac.in/",
    studyPoints: [
        "Studied foundational subjects like Data Structures, Database Management Systems, Discrete Mathematics, and Operating Systems, building a strong base in computer science. 🧠💻",
        "Explored Object-Oriented Programming, Software Engineering, Computer Networks, and Microprocessor & Interfacing, bridging software development with hardware understanding. ⚙️",
        "Gained insights into Big Data Analytics, Artificial Intelligence, Data Mining, and Data Visualization, equipping skills for modern computing challenges. 🚀📊",
    ]
}

const MastersDegree: EducationSection = {
    degreeName: "Master of Information Technology",
    majorName: "Cyber Security",
    duration: "Feb 2024 - Dec 2025",
    universityName: "University of South Australia (UniSA)",
    campusName: "Mawson Lakes",
    logoImagePath: AssetPaths.EDUCATION_UNISA_LOGO,
    gpa: "6.7 / 7.0",
    websiteLink: "https://i.unisa.edu.au/students/",
    studyPoints: [
        "Built expertise in Security Principles, Network Infrastructure, and Risk Management, laying a solid foundation in cybersecurity fundamentals. 🔐",
        "Gained deep knowledge in Security Architecture, Network Security, and Critical Infrastructure Protection, alongside insights into Cyber Criminal Behavior and Australian Cyber Law. ⚙️🛡️",
        "Developed strategic skills through Consultancy, Enterprise Security, and hands-on labs experience with tech-giants including Cisco and FortiGate. 🚀",
    ]
}


export const AppConfig = {
    loaderSplashAnimation: true,        // enable or disable splash screen at the initialization of website
    logoName: "morrisdevelopment",         // Signature font logo name in header
    name: "Custom ERP",             // your name
    emailId: "dmorris@morrisdevelopment.com",  // your email id

 

    // Home page
    professionalTitle: "When you need to get it done right",
    professionalSummary: "Design your business database around your business processes",
    githubProfile: "https://github.com/morrisdev",              // Your github profile link
    portfolioRepository: "https://github.com/danielcmorris/morrisdev",        // Your portfolio repository link
    socialMedia: SocialMediaLinks,      // use from above
    aboutMe: [                          // all the sections you want to show under "What I do?". 
        FullstackSection,
        CloudSection,
        DesignSection,
        DigitalSolutionSection,
    ],

    // Projects page
    projectsPageTitle: "Projects",    // Title of projects page
    projectsPageDescription: "We specialize in developing web-based applications for logistics and ERP systems",
    projectSections: [                  // Define and add a custom section if needed
        ActiveProjects,
        IntegratedApps,
    ],

    // Blog pages
    experiencePageTitle: "Technical Articles",
    experiencePageDescription: "💼 We've had to come up with some creative solutions. We publish the more recent ones here so others can benefit",
    experienceSections: [               // Define and add a custom section if needed
        JobExperience,
        InternshipExperience,
       // FreelancingExperience,
    ],

    // Education page
    educationPageTitle: "Degrees and Qualifications",
    educationPageDescription: "🎓 A Journey of Continuous Learning: Building Skills, Solving Problems, and Shaping the Future 🌟",
    educationSections: [
        MastersDegree,
        BachelorsDegree,
    ],


    // Achievements Page
    achievementsPageTitle: "Achievements, Participation and Community Involvement",
    achievementsPageDescription: "🚀 Milestones, Contributions & Impact: Driving Innovation, Engaging Communities, and Making a Difference 🌍",
    achievementsSections: [
        AchievementInvolvement,
        CommunityInvolvement,
    ],
 }















