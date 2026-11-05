import { Project, SkillCategory, Experience, HackathonAchievement, LeadershipRole, EducationItem, Certification } from '../types';

export const PERSONAL_INFO = {
  fullName: "Shreya Shantaram Walke",
  preferredName: "Shreya Walke",
  tagline: "Turning Ideas Into Digital Solutions.",
  location: "Chandwad, Maharashtra, India",
  college: "SNJB's K.B.J. College of Engineering, Chandwad",
  degree: "Third-Year B.Tech Computer Engineering Student",
  graduationYear: "2028",
  email: "shreyawalke060905@gmail.com",
  linkedin: "https://linkedin.com/in/shreya-walke",
  github: "https://github.com/shreyawalke77",
  titles: [
    "Frontend Developer",
    "Computer Engineering Student",
    "AI/ML Enthusiast",
    "Problem Solver",
    "Technology Explorer"
  ],
  bio: `I am a Third-Year B.Tech Computer Engineering student at SNJB's K.B.J. College of Engineering, Chandwad, with a strong interest in software development, frontend engineering, and Artificial Intelligence.

I enjoy building practical, user-focused applications and exploring how technology can solve real-world problems.

Through internships, academic projects, hackathons, and technical initiatives, I have gained hands-on exposure to web development, database management, and AI/ML fundamentals.

Beyond technology, I actively participate in leadership, student development, and community initiatives.

I believe in continuous learning, collaboration, problem-solving, and turning innovative ideas into meaningful solutions.`,
  avatarUrl: "./assets/shreya.jpg",
  resumeUrl: "#resume-modal",
  stats: [
    { label: "Technical Projects", value: "9+", detail: "Full-stack, AI/ML & databases" },
    { label: "Internship Experiences", value: "2", detail: "Frontend & AI/ML tracks" },
    { label: "Hackathon Standing", value: "Top 20", detail: "Out of 100 teams (Ecoverse)" },
    { label: "Domain Recognition", value: "Top 3", detail: "Transportation Tech Domain" },
    { label: "Leadership Role", value: "Chief Minister", detail: "Career Sansad 2026–27" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    icon: "Code2",
    description: "Core algorithmic foundations, object-oriented concepts, and computational problem solving.",
    skills: [
      { name: "C", level: "Academic & Systems Foundation", highlight: true, tags: ["Data Structures", "Pointers", "Core"] },
      { name: "Java", level: "Object Oriented Programming", highlight: true, tags: ["OOP", "Collections", "Classes"] },
      { name: "SQL", level: "Relational Queries & DDL/DML", highlight: true, tags: ["Complex Joins", "Indexing", "Aggregates"] },
      { name: "Python", level: "AI/ML & Automation Scripting", highlight: true, tags: ["Flask", "OpenCV", "Libraries"] }
    ]
  },
  {
    title: "Frontend Development",
    icon: "Layout",
    description: "Crafting responsive, accessible, high-performance user interfaces and modern web applications.",
    skills: [
      { name: "React.js", level: "Modern Component Architecture", highlight: true, tags: ["Hooks", "State", "Virtual DOM"] },
      { name: "JavaScript (ES6+)", level: "Modern Async & DOM Programming", highlight: true, tags: ["Promises", "Fetch API", "Event Loops"] },
      { name: "HTML5 & Semantic Web", level: "Structured Accessible Markup", highlight: false, tags: ["SEO", "Semantic Elements"] },
      { name: "CSS3 & Modern Styling", level: "Responsive Layouts & Motion", highlight: false, tags: ["Flexbox", "Grid", "Animations"] },
      { name: "Tailwind CSS", level: "Utility-First Styling Engine", highlight: true, tags: ["Custom Themes", "Responsive Design"] }
    ]
  },
  {
    title: "Backend & Systems",
    icon: "Server",
    description: "Developing lightweight REST APIs, request routing, and server-side logic.",
    skills: [
      { name: "Python", level: "Server-side Scripts & API Services", highlight: true, tags: ["REST APIs", "Microservices"] },
      { name: "Flask", level: "Lightweight Microframework", highlight: true, tags: ["Routing", "Endpoints", "Model Serving"] },
      { name: "PHP", level: "Server-side Web Architecture", highlight: false, tags: ["Sessions", "CRUD", "Form Processing"] }
    ]
  },
  {
    title: "Databases & Storage",
    icon: "Database",
    description: "Relational modeling, entity-relationship schemas, normalization, and ACID transactions.",
    skills: [
      { name: "MySQL", level: "Relational Database Management", highlight: true, tags: ["Stored Procedures", "Triggers", "Foreign Keys"] },
      { name: "DBMS Concepts", level: "Theoretical & Practical Systems", highlight: true, tags: ["Normalization", "Transactions", "ER Diagrams"] },
      { name: "Query Optimization", level: "Query Execution & Indexing", highlight: false, tags: ["Performance", "Indexes"] }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: "Cpu",
    description: "Real-time computer vision, object detection, edge deployment, and intelligent agent workflows.",
    skills: [
      { name: "YOLOv8 Nano", level: "Real-Time Object Detection", highlight: true, tags: ["Inference", "Vehicle Detection", "Edge ML"] },
      { name: "OpenCV", level: "Computer Vision & Video Processing", highlight: true, tags: ["Frame Manipulation", "Stream Capture"] },
      { name: "TensorFlow", level: "Neural Networks & Classification", highlight: true, tags: ["Deep Learning", "EduSkills Program"] },
      { name: "TensorFlow Lite", level: "Edge & Mobile ML Deployment", highlight: true, tags: ["Quantization", "Model Maker"] },
      { name: "Computer Vision (ByteTrack & Kalman)", level: "Object Tracking & Speed Estimation", highlight: true, tags: ["Motion Tracking", "Surveillance"] },
      { name: "IBM watsonx", level: "Generative AI & Agent Workflows", highlight: true, tags: ["Agent Studio", "Prompt Orchestration"] },
      { name: "Ollama & Llama 3", level: "Local LLM Execution & RAG", highlight: true, tags: ["Local Inference", "Vector Context"] }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: "Wrench",
    description: "Modern developer environment, version control, collaboration pipelines, and local servers.",
    skills: [
      { name: "Git", level: "Distributed Version Control", highlight: true, tags: ["Branching", "Merge", "CLI"] },
      { name: "GitHub", level: "Source Hosting & Collaboration", highlight: true, tags: ["PRs", "Code Review", "Repositories"] },
      { name: "VS Code", level: "Primary Development IDE", highlight: false, tags: ["Extensions", "Debugging", "Linters"] },
      { name: "Eclipse", level: "Java Application Environment", highlight: false, tags: ["Java Dev", "Build Tools"] },
      { name: "XAMPP", level: "Local Apache & MySQL Server Stack", highlight: false, tags: ["PHP Development", "Local Host"] },
      { name: "Streamlit", level: "Python AI Application Interfaces", highlight: false, tags: ["Rapid Prototyping", "Data Apps"] }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "athenura-frontend",
    role: "Frontend Developer Intern",
    company: "Athenura",
    period: "August 2026 – January 2027",
    type: "Internship",
    status: "Completed",
    location: "Remote / Hybrid",
    summary: "Worked as a frontend intern translating real-world UI/UX wireframes into responsive, high-performance web interfaces with modern web standards.",
    responsibilities: [
      "Developed modular, cross-browser responsive web interfaces utilizing HTML5, modern CSS3, and JavaScript.",
      "Translated high-fidelity UI/UX design specifications into pixel-perfect, accessible, and maintainable frontend code.",
      "Diagnosed and resolved subtle frontend rendering bottlenecks, CSS regressions, and layout inconsistencies across diverse viewport resolutions.",
      "Collaborated closely within an agile development workflow, managing feature branches, staging merges, and code reviews with Git."
    ],
    technologies: ["JavaScript (ES6+)", "HTML5", "CSS3", "Git", "Responsive UI", "Cross-Browser Compatibility"],
    certificateUrl: ""
  },
  {
    id: "google-aiml-eduskills",
    role: "Google AI-ML Virtual Intern",
    company: "AICTE EduSkills",
    period: "October 2026 – December 2026",
    type: "Virtual Internship Program",
    status: "Completed",
    location: "Virtual / India",
    summary: "Selected for an intensive 8-week structured engineering program focused on neural networks, computer vision, and TensorFlow Lite deployment.",
    responsibilities: [
      "Completed rigorous weekly theoretical modules, hands-on engineering labs, and structured project milestones.",
      "Built and evaluated Deep Neural Networks using TensorFlow for image classification and feature extraction tasks.",
      "Implemented object detection pipelines and learned edge-device model optimization techniques utilizing TensorFlow Lite and Model Maker.",
      "Successfully cleared periodic technical assessments and delivered evaluated end-of-internship capstone submissions."
    ],
    technologies: ["TensorFlow", "TensorFlow Lite", "Neural Networks", "Image Classification", "Object Detection", "Model Maker"],
    certificateUrl: ""
  }
];

export const PROJECTS: Project[] = [
  {
    id: "smart-traffic-surveillance",
    title: "Smart Traffic Surveillance System",
    subtitle: "AI Computer Vision & Intelligent Transportation Analytics",
    category: "AI/ML",
    featured: true,
    status: "Prototype",
    badge: "Smart Kopargaon Hackathon 2026",
    shortDescription: "A smart computer vision solution improving transportation management via real-time vehicle detection, tracking, speed calculation, and incident alerts.",
    fullDescription: "Engineered for urban intersections and high-density corridors, this system combines state-of-the-art computer vision models with real-time video streaming to automate traffic monitoring. It identifies vehicle classes, tracks paths through ByteTrack and Kalman filters to estimate approximate speeds, flags traffic violations, and computes instantaneous density scores to feed route optimization systems.",
    features: [
      "Real-Time Vehicle Detection and Classification using YOLOv8 Nano.",
      "Multi-Object Tracking & Vehicle Speed Estimation with ByteTrack and Kalman Filter algorithms.",
      "Dynamic Traffic Density Monitoring with congestion thresholds.",
      "Incident and Traffic Violation Monitoring (illegal stop, wrong-way detection).",
      "GPS-Based Traffic Visualization on interactive map overlays.",
      "Alternate Route Suggestions based on real-time corridor congestion index.",
      "Multi-Source Ingestion Support: CCTV, Drone feeds, Webcams, Local Video files, and IP Camera RTSP streams."
    ],
    technologies: ["React.js", "Python", "Flask", "YOLOv8 Nano", "OpenCV", "ByteTrack", "Kalman Filter", "MySQL"],
    myContribution: "Designed the frontend monitoring dashboard, integrated live detection stream previews, assisted with computer vision pipeline testing in Python/OpenCV, and structured the MySQL traffic event logging schema.",
    githubUrl: "https://github.com/shreyawalke77",
    liveDemoUrl: "",
    hackathonNote: "Presented at Smart Kopargaon Hackathon 2026 as part of Team Ecoverse (Top 20 Overall, Top 3 Transportation Domain).",
    metrics: [
      { label: "Stream Support", value: "CCTV/Drone/IP" },
      { label: "Vision Core", value: "YOLOv8 Nano" },
      { label: "Tracking", value: "ByteTrack + Kalman" }
    ]
  },
  {
    id: "smartyatra-bus-capacity",
    title: "SmartYatra – Smart Bus Capacity & Rural Logistics",
    subtitle: "Public Transportation & Rural Supply Chain Platform",
    category: "Hackathon",
    featured: true,
    status: "Prototype",
    badge: "Top 3 Transportation Domain",
    shortDescription: "A mobility and logistics platform designed to optimize public bus capacity utilization and solve rural connectivity bottlenecks.",
    fullDescription: "SmartYatra addresses the critical challenge of empty bus capacity on inter-district and rural routes by integrating passenger seat availability metrics with micro-logistics parcel dispatch. Farmers and rural vendors can utilize scheduled public buses to transport perishable goods and parcels reliably, with real-time capacity tracking.",
    features: [
      "Dynamic Seat and Luggage Capacity Tracking for rural transit buses.",
      "Rural Micro-Logistics Booking for agricultural produce and parcels.",
      "Route-Aware Bus Timetable and Capacity Utilization Visualizer.",
      "Crowd Density Estimation at intermediate rural halts.",
      "Low-bandwidth accessible interfaces tailored for regional connectivity."
    ],
    technologies: ["React.js", "Python", "Flask", "MySQL", "GPS Integration", "Tailwind CSS"],
    myContribution: "Led the UI design, structured the capacity monitoring views, and formulated the presentation pitch for the Smart Kopargaon Hackathon Grand Finale.",
    githubUrl: "https://github.com/shreyawalke77",
    liveDemoUrl: "",
    hackathonNote: "Recognized among the Top 3 Projects in the Transportation Domain at Smart Kopargaon Hackathon 2026.",
    metrics: [
      { label: "Hackathon Result", value: "Top 3 Domain" },
      { label: "Focus", value: "Rural Transit" },
      { label: "Impact", value: "Logistics Optimization" }
    ]
  },
  {
    id: "pdf-qa-chatbot",
    title: "PDF_QA_Chatbot",
    subtitle: "Local LLM Powered Document Intelligence System",
    category: "AI/ML",
    featured: true,
    status: "Completed",
    badge: "Local AI / RAG",
    shortDescription: "An intelligent question-answering assistant enabling users to upload documents and query them locally using Ollama and Llama 3.",
    fullDescription: "A privacy-focused document analysis application that runs inference entirely on local machines without transmitting confidential documentation to external cloud endpoints. The app extracts text, splits passages into context chunks, and prompts Meta's Llama 3 via Ollama to generate accurate, citation-backed answers.",
    features: [
      "Multi-page PDF parsing and structured text extraction.",
      "Local inference using Ollama running Meta Llama 3.",
      "Context-aware question answering with conversational memory.",
      "Clean, interactive chat user interface built with Streamlit.",
      "Zero external API subscription requirement with complete data privacy."
    ],
    technologies: ["Python", "Streamlit", "Ollama", "Llama 3", "PyPDF2"],
    myContribution: "Built the entire Streamlit interactive user interface, connected the local Ollama LLM endpoint, handled PDF upload parsing, and implemented prompt chaining for contextual answers.",
    githubUrl: "https://github.com/shreyawalke77",
    liveDemoUrl: "",
    metrics: [
      { label: "Engine", value: "Llama 3" },
      { label: "Runtime", value: "Ollama (Local)" },
      { label: "UI", value: "Streamlit" }
    ]
  },
  {
    id: "smart-study-generator",
    title: "Smart Study Generator Agent",
    subtitle: "Enterprise Generative AI Study Companion",
    category: "AI/ML",
    featured: true,
    status: "Deployed",
    badge: "IBM watsonx Agent #13",
    shortDescription: "An enterprise AI agent that automatically constructs customized study guides, summaries, and practice quizzes for complex technical curricula.",
    fullDescription: "Deployed on the IBM watsonx AI orchestration platform (designated Agent #13), this agent transforms syllabus syllabi, academic notes, and textbooks into structured, pedagogically sound revision material, flashcards, and conceptual quizzes.",
    features: [
      "Automated study timetable and curriculum topic decomposition.",
      "Concept summarization tailored to student comprehension levels.",
      "Automated question generator with explanatory solution keys.",
      "No-code agent workflow architecture configured in IBM watsonx Studio."
    ],
    technologies: ["IBM watsonx", "Foundation Models", "Prompt Engineering", "AI Orchestration"],
    myContribution: "Configured the agent instructions, tested few-shot prompt workflows, validated academic summary outputs, and deployed Agent #13 on IBM watsonx.",
    githubUrl: "https://github.com/shreyawalke77",
    liveDemoUrl: "",
    metrics: [
      { label: "Platform", value: "IBM watsonx" },
      { label: "Deployment", value: "Agent #13" },
      { label: "Type", value: "GenAI Assistant" }
    ]
  },
  {
    id: "blood-donation-system",
    title: "Blood Donation Management System",
    subtitle: "Relational Healthcare Donor & Inventory Portal",
    category: "Database",
    featured: false,
    status: "Completed",
    badge: "Database System",
    shortDescription: "A robust relational database application managing donor registries, blood group inventories, and critical emergency requests.",
    fullDescription: "Built to streamline life-saving blood bank operations, this system facilitates quick donor discovery by blood type and city location, tracks donation intervals to ensure medical eligibility, and generates real-time inventory level reports for hospitals.",
    features: [
      "Fast donor search filtering by exact blood group and geographic vicinity.",
      "Donor eligibility verification preventing premature repeat donations.",
      "Recipient emergency request dispatch and status monitoring.",
      "Structured MySQL schema with normalized tables, foreign keys, and referential integrity."
    ],
    technologies: ["MySQL", "DBMS", "SQL Queries", "PHP/HTML", "Relational Modeling"],
    myContribution: "Architected the relational database schema, authored complex SQL queries for donor-recipient matching, and implemented input validation routines.",
    githubUrl: "https://github.com/shreyawalke77",
    liveDemoUrl: "",
    metrics: [
      { label: "DB Engine", value: "MySQL" },
      { label: "Architecture", value: "Normalized 3NF" }
    ]
  },
  {
    id: "smart-classroom-system",
    title: "Smart Classroom System",
    subtitle: "Full-Stack Educational Operations & Engagement Hub",
    category: "Web Development",
    featured: false,
    status: "Completed",
    badge: "Full-Stack Web",
    shortDescription: "A centralized digital classroom management platform facilitating educator-student collaboration, attendance, and assignment workflows.",
    fullDescription: "Created to modernize daily academic operations within departmental classrooms. Offers distinct role-based access for instructors and students, digital assignment submissions, notice boards, and session scheduling.",
    features: [
      "Role-Based Access Control (Educators vs. Students).",
      "Digital coursework assignment distribution and submission portals.",
      "Dynamic notice board for announcements and timetable updates.",
      "Local server deployment configured via XAMPP with Apache and MySQL."
    ],
    technologies: ["PHP", "MySQL", "XAMPP", "HTML5", "CSS3", "JavaScript"],
    myContribution: "Developed the PHP backend modules, configured user authentication, and linked responsive front-end forms with the MySQL database.",
    githubUrl: "https://github.com/shreyawalke77",
    liveDemoUrl: "",
    metrics: [
      { label: "Stack", value: "PHP / MySQL" },
      { label: "Server", value: "XAMPP" }
    ]
  },
  {
    id: "student-dbms",
    title: "Student Database Management System",
    subtitle: "Relational Academic Record & Query System",
    category: "Database",
    featured: false,
    status: "Completed",
    badge: "SQL Core",
    shortDescription: "A comprehensive database project modeling academic student lifecycles with primary keys, complex joins, and transactional constraints.",
    fullDescription: "Demonstrates practical mastery of core relational database design. Models student enrollments, course catalogs, faculty assignments, and semester grade cards with strict integrity constraints and cascading rules.",
    features: [
      "Enforced Primary, Foreign, and Unique integrity constraints.",
      "Multi-table relational queries utilizing INNER, LEFT, and RIGHT joins.",
      "Aggregation pipelines for computing GPA, attendance averages, and course pass rates.",
      "Structured indexing for rapid multi-parameter searches."
    ],
    technologies: ["SQL", "MySQL", "Database Normalization", "Relational Schema"],
    myContribution: "Created the complete Entity-Relationship diagrams, wrote SQL DDL/DML scripts, and validated performance through test data suites.",
    githubUrl: "https://github.com/shreyawalke77",
    liveDemoUrl: "",
    metrics: [
      { label: "Design", value: "ER Modeling" },
      { label: "Queries", value: "Advanced SQL" }
    ]
  },
  {
    id: "solespace-ecommerce",
    title: "SoleSpace – Shoe E-Commerce Website",
    subtitle: "Collaborative Dynamic Product Showcase & Storefront",
    category: "Web Development",
    featured: false,
    status: "Completed",
    badge: "Collaborative Project",
    shortDescription: "An interactive footwear e-commerce application featuring dynamic product variations, responsive catalogs, and modern UI styling.",
    fullDescription: "A collaborative e-commerce project designed for sneaker enthusiasts. Users can explore curated shoe catalogs, toggle real-time color variations, inspect specifications, and experience smooth layout transitions.",
    features: [
      "Dynamic shoe color switcher rendering instant asset variations.",
      "Responsive grid product catalog with smooth hover elevation states.",
      "Intuitive navigation and shopping cart UI wireframes.",
      "Integration between React frontend components and backend endpoints."
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Git Collaboration"],
    myContribution: "Contributed to the frontend user interface, product card layouts, interactive color switcher components, and UI styling fixes. Collaborative repository maintained with project peers.",
    githubUrl: "https://github.com/anmolugale13/SoleSpace-Frontend",
    liveDemoUrl: "",
    metrics: [
      { label: "Frontend", value: "React.js" },
      { label: "Repo", value: "GitHub Collaboration" }
    ]
  },
  {
    id: "personal-portfolio-2026",
    title: "Personal Portfolio Website",
    subtitle: "Interactive Engineering Portfolio & Digital Resume",
    category: "Web Development",
    featured: false,
    status: "Completed",
    badge: "Personal Brand",
    shortDescription: "My personal developer portfolio showcasing verified technical projects, hackathon achievements, leadership records, and contact channels.",
    fullDescription: "Engineered with a high-performance modern web stack featuring deep charcoal aesthetics, smooth animations, interactive skill dashboards, live project filters, and verified professional documentation.",
    features: [
      "Sticky blurred navigation with active section indicator.",
      "Interactive project filtering with rich contextual modal breakdowns.",
      "Dynamic count-up metrics for hackathons and technical milestones.",
      "Accessible dark theme with violet and cyan futuristic accents.",
      "Downloadable and printable professional resume integration."
    ],
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Lucide React", "Vite"],
    myContribution: "Designed and developed the entire architecture, authored all component logic, and structured responsive mobile layouts.",
    githubUrl: "https://github.com/shreyawalke77",
    liveDemoUrl: "https://github.com/shreyawalke77",
    metrics: [
      { label: "Lighthouse", value: "Optimized" },
      { label: "Design", value: "Futuristic Minimal" }
    ]
  },
  {
    id: "transitsync-ai",
    title: "TransitSync AI – Smart Bus Application",
    subtitle: "Intelligent Transit Tracking & Passenger Flow Mini-System",
    category: "AI/ML",
    featured: false,
    status: "In Progress",
    badge: "Ongoing Research",
    shortDescription: "An exploratory transit intelligence project expanding upon rural bus tracking with predictive arrival times.",
    fullDescription: "Extends insights gained from Smart Kopargaon Hackathon to build predictive passenger flow modeling for semi-urban bus corridors.",
    features: [
      "Historical arrival delay modeling.",
      "Estimated crowd density predictions.",
      "Modular microservice integration."
    ],
    technologies: ["Python", "Flask", "Pandas", "Scikit-Learn"],
    myContribution: "Researched passenger transit datasets and conceptualized algorithm parameters.",
    githubUrl: "https://github.com/shreyawalke77",
    liveDemoUrl: ""
  },
  {
    id: "ai-log-writer",
    title: "AI Log Writer",
    subtitle: "Automated Developer Changelog & Engineering Journal",
    category: "AI/ML",
    featured: false,
    status: "Completed",
    badge: "Productivity Tool",
    shortDescription: "A developer utility generating clean markdown changelogs and daily standup summaries from commit history.",
    fullDescription: "Parses Git commit messages and ticket references to compile structured, human-readable release notes and engineering logs.",
    features: [
      "Git commit message parser.",
      "Automatic category sorting (feat, fix, chore, docs).",
      "Markdown export with timestamps."
    ],
    technologies: ["Python", "Git Hooks", "CLI"],
    myContribution: "Developed the core parsing script and formatting templates.",
    githubUrl: "https://github.com/shreyawalke77",
    liveDemoUrl: ""
  },
  {
    id: "networking-mini-project",
    title: "Computer Networks Protocol Simulator",
    subtitle: "Socket Programming & Packet Flow Demonstration",
    category: "Web Development",
    featured: false,
    status: "Completed",
    badge: "Academic Systems",
    shortDescription: "Academic exploration of TCP/IP communication, client-server socket messaging, and packet header analysis.",
    fullDescription: "Demonstrates core principles of computer networking including three-way handshakes, socket connections, and error detection checksums.",
    features: [
      "Multi-client chat socket demonstration.",
      "Packet transfer latency simulation.",
      "Socket state visualization."
    ],
    technologies: ["Java", "Socket Programming", "TCP/IP"],
    myContribution: "Wrote client and server socket listeners in Java and documented protocol exchanges.",
    githubUrl: "https://github.com/shreyawalke77",
    liveDemoUrl: ""
  }
];

export const HACKATHON_ACHIEVEMENTS: HackathonAchievement[] = [
  {
    title: "Smart Kopargaon Hackathon 2026",
    event: "National-Level Innovation Hackathon",
    year: "2026",
    team: "Team Ecoverse",
    ranks: [
      "Top 20 Overall out of 100 Teams",
      "Top 3 in Transportation Domain",
      "Grand Finale Finalist",
      "Top 20 GD / Pitch Round"
    ],
    highlights: [
      "Idea Screening Selection: Ranked in the initial top tier from among over 100 competitive engineering teams.",
      "PPT Selection & Evaluation: Successfully cleared technical review panel scrutiny.",
      "Prototype Submission: Delivered functional computer vision traffic monitoring and SmartYatra bus logistics prototypes.",
      "Grand Finale Pitch: Presented live to esteemed industry mentors, academic evaluators, and civic transportation leaders."
    ],
    impact: "Showcased high-throughput edge AI models for real-world transportation efficiency and rural accessibility.",
    verified: true
  }
];

export const LEADERSHIP_ROLES: LeadershipRole[] = [
  {
    role: "Chief Minister",
    organization: "Career Sansad 2026–27 (Career Katta)",
    period: "2026 – 2027",
    description: "Elected / selected as Chief Minister of Career Sansad, spearheading youth career development, organizing career guidance sessions, and coordinating student empowerment programs across campuses.",
    category: "Governance",
    badge: "Highest Student Honor"
  },
  {
    role: "Selected Ambassador",
    organization: "GirlScript Summer of Code (GSSoC)",
    period: "2026",
    description: "Represented GSSoC open-source initiatives, advocating for gender diversity in technology and mentoring new contributors in Git and open-source practices.",
    category: "Ambassador",
    badge: "Open Source"
  },
  {
    role: "Pitch Shortlisted Candidate",
    organization: "Google Flow Student Ambassador 2026",
    period: "2026",
    description: "Shortlisted during competitive national pitch evaluations for Google Flow Student Ambassador initiative representing technical leadership.",
    category: "Ambassador",
    badge: "Google Initiative"
  },
  {
    role: "President (One of Three)",
    organization: "Nature Club",
    period: "2025 – 2026",
    description: "Co-led student environmental conservation campaigns, sustainability drives, tree plantation initiatives, and campus green audits.",
    category: "Community",
    badge: "Eco Leadership"
  },
  {
    role: "NCC 'A' Certificate Holder & Sergeant",
    organization: "National Cadet Corps (NCC)",
    period: "2022 – 2024",
    description: "Earned NCC 'A' Certificate and elevated to the rank of Sergeant, cultivating rigorous discipline, team coordination, drills, and national service values.",
    category: "Extracurricular",
    badge: "Rank: Sergeant"
  },
  {
    role: "NSS Volunteer (1-Year Active Service)",
    organization: "National Service Scheme (NSS)",
    period: "2024 – 2025",
    description: "Completed one full year of community service, contributing to rural development camps, health awareness, and educational outreach.",
    category: "Community",
    badge: "Community Service"
  },
  {
    role: "SDG Health & Dignity Drive Participant",
    organization: "UNGA80 Health & Dignity Initiative",
    period: "2025",
    description: "Active participant in the UNGA80 Sustainable Development Goals drive focused on hygiene, health education, and dignity empowerment for 25 young girls.",
    category: "Community",
    badge: "UN SDG Action"
  },
  {
    role: "Event Anchor",
    organization: "Agentic AI Workshop",
    period: "2026",
    description: "Anchored and facilitated key technical sessions on Agentic AI frameworks, coordinating speakers, audience Q&A, and live demonstrations.",
    category: "Extracurricular",
    badge: "Technical MC"
  },
  {
    role: "Active Member & Speaker",
    organization: "Dipitani Elocution Club",
    period: "2024 – Present",
    description: "Regular speaker and debater, sharpening public speaking, articulation of complex ideas, and critical reasoning in elocution contests.",
    category: "Extracurricular",
    badge: "Public Speaking"
  }
];

export const OTHER_ACHIEVEMENTS = [
  {
    title: "SPPU QIP Group Discussion – First Prize",
    organization: "Savitribai Phule Pune University (SPPU) Quality Improvement Programme",
    prize: "₹3,000 Cash Prize & Certificate of Merit",
    description: "Secured 1st Place out of participants across multiple colleges in a competitive Group Discussion round evaluating problem analysis, leadership, logical articulation, and persuasive delivery.",
    badge: "1st Prize Winner"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "SNJB's K.B.J. College of Engineering, Chandwad",
    period: "2024 – 2028",
    location: "Chandwad, Nashik, Maharashtra",
    status: "Third Year (Current)",
    scorePlaceholder: "Grade: First Class with Distinction [CGPA Placeholder: Update in portfolioData.ts]",
    description: "Pursuing rigorous coursework in Data Structures, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Artificial Intelligence.",
    highlights: [
      "Active participant in departmental technical clubs, hackathons, and symposiums.",
      "Elected Chief Minister for Career Sansad 2026–27.",
      "Top 20 Finalist at Smart Kopargaon Hackathon 2026 representing college."
    ]
  },
  {
    degree: "Higher Secondary Certificate (12th Standard - Science)",
    institution: "R.G.B. Arts, Science & Commerce College, Dahiwad",
    period: "2022 – 2024",
    location: "Dahiwad, Maharashtra",
    status: "Completed (2024)",
    scorePlaceholder: "Percentage: [Score Placeholder: Update in portfolioData.ts]",
    description: "Completed Higher Secondary education with specialization in Physics, Chemistry, Mathematics, and Computer Science fundamentals.",
    highlights: [
      "Developed strong analytical foundations in mathematical problem solving.",
      "Prepared for competitive engineering entrance examinations."
    ]
  },
  {
    degree: "Secondary School Certificate (10th Standard)",
    institution: "S.N.J.B. Secondary & Higher Secondary School, Chandwad",
    period: "Completed 2022",
    location: "Chandwad, Maharashtra",
    status: "Completed (2022)",
    scorePlaceholder: "Percentage: [Score Placeholder: Update in portfolioData.ts]",
    description: "Excellence in academics, school leadership, and extracurricular elocution and sports competitions.",
    highlights: [
      "Active participant in cultural, speech, and state-level science exhibitions.",
      "Enrolled in NCC training earning Sergeant rank and 'A' Certificate."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-ai-ml",
    title: "AI & ML Green Skill Certification",
    issuer: "Authorized Technical Skill Program / EduSkills",
    date: "2026",
    skillsLearned: ["Machine Learning Foundations", "Sustainable AI Practices", "Model Training", "Data Ethics"],
    verified: true,
    credentialUrl: "https://github.com/shreyawalke77"
  },
  {
    id: "cert-java",
    title: "Java Programming Basics",
    issuer: "Technical Training & Academic Certification",
    date: "2025",
    skillsLearned: ["Core Java", "OOP Principles", "Exception Handling", "Collections Framework"],
    verified: true,
    credentialUrl: "https://github.com/shreyawalke77"
  },
  {
    id: "cert-ncc-a",
    title: "NCC 'A' Certificate",
    issuer: "National Cadet Corps (NCC) - Ministry of Defence",
    date: "2024",
    skillsLearned: ["Military Drill", "Leadership & Discipline", "First Aid", "Community Service"],
    verified: true,
    credentialUrl: ""
  }
];
