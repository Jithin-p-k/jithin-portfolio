/**
 * PORTFOLIO CONFIGURATION FILE - JITHIN P K
 * -------------------------------------------------------------
 * Strictly containing Jithin P K's resume data:
 * - 3 Resume Projects: Insomnia Detection, Music Genre Classification, Multi-Lingual Chatbot
 * - Resume Technical Skills: Languages, AI/ML Frameworks, Web/APIs, Databases, Data Viz
 * - Resume Internships: SuprMentr, MindMatrix, EduBridge (Capgemini)
 * - Resume Education: VTU Bangalore (B.E AIML, CGPA 7.8), KHMHS School (86% & 99%)
 * - Resume Certifications: Microsoft, Kodr Gen AI, Nasscom, Infosys
 * 
 * Enhanced with superior UI/UX, Bento layout, interactive terminal, and deep dive modal.
 */

export const personalInfo = {
  name: "Jithin P K",
  role: "AI & Machine Learning Engineer | Software Developer",
  tagline: "BTech graduate in AI & ML with hands-on experience in Python, machine learning, data analysis, and web application development.",
  bio: "BTech graduate in Artificial Intelligence and Machine Learning with hands-on experience in Python, machine learning, data analysis, and web application development. Skilled in developing machine learning models, NLP-based applications, and data-driven solutions using Python and modern AI/ML frameworks. Familiar with REST API development, databases, and software development practices. Passionate about building practical, scalable solutions and continuously improving technical skills in Software Development, Data Science, and AI/ML.",
  location: "Kerala, India",
  timezone: "Asia/Kolkata",
  email: "pkjithin383@gmail.com",
  phone: "+91 9747310383",
  status: "Available for AI/ML & Software Development Roles",
  avatarUrl: "",
  
  socials: {
    linkedin: "https://linkedin.com/in/jithin-",
    github: "https://github.com/Jithin-p-k",
    twitter: "https://twitter.com",
    leetcode: "https://leetcode.com",
  },

  ribbon: [
    { value: "7.8 CGPA", label: "B.E in AI & ML, VTU", highlight: "Academic Record" },
    { value: "3 Internships", label: "AI, Gen AI & Cloud", highlight: "Industry Track" },
    { value: "5 Certifications", label: "Microsoft, Infosys, Nasscom", highlight: "Verified Skills" },
    { value: "99% Score", label: "Secondary School (10th)", highlight: "Top Performer" },
  ],

  stats: [
    { label: "B.E AIML Score", value: "7.8 CGPA", description: "Visvesvaraya Technological University" },
    { label: "Internships Completed", value: "3", description: "SuprMentr, MindMatrix & EduBridge / Capgemini" },
    { label: "Core Competency", value: "AI & ML", description: "Python, Machine Learning, NLP & Deep Learning" },
    { label: "Academic Record", value: "99%", description: "Secondary School score (10th Standard)" },
  ],
};

export const skillsData = {
  categories: [
    { id: "all", name: "All Technologies" },
    { id: "aiml", name: "AI/ML & Frameworks" },
    { id: "programming", name: "Programming Languages" },
    { id: "web", name: "Web & Deployment" },
    { id: "database", name: "Databases" },
    { id: "visualization", name: "Data & Visualization" },
  ],
  skills: [
    // Programming Languages (from resume)
    { name: "Python", category: "programming", level: "Expert", years: "Proficient", color: "from-amber-400 to-yellow-500" },
    { name: "SQL", category: "programming", level: "Advanced", years: "Proficient", color: "from-blue-600 to-indigo-600" },
    { name: "Java", category: "programming", level: "Intermediate", years: "Proficient", color: "from-red-500 to-orange-500" },
    { name: "C++", category: "programming", level: "Intermediate", years: "Proficient", color: "from-sky-500 to-blue-700" },

    // AI/ML Frameworks & Concepts (from resume)
    { name: "Scikit-learn", category: "aiml", level: "Expert", years: "Proficient", color: "from-orange-500 to-amber-600" },
    { name: "TensorFlow", category: "aiml", level: "Advanced", years: "Proficient", color: "from-orange-600 to-red-600" },
    { name: "NumPy", category: "aiml", level: "Expert", years: "Proficient", color: "from-blue-500 to-cyan-500" },
    { name: "Pandas", category: "aiml", level: "Expert", years: "Proficient", color: "from-indigo-500 to-blue-600" },
    { name: "Deep Learning", category: "aiml", level: "Advanced", years: "Core Area", color: "from-indigo-500 to-purple-600" },
    { name: "Natural Language Processing (NLP)", category: "aiml", level: "Advanced", years: "Core Area", color: "from-purple-500 to-pink-500" },
    { name: "Model Development", category: "aiml", level: "Expert", years: "Core Area", color: "from-emerald-400 to-green-600" },

    // Web / Deployment (from resume)
    { name: "Flask", category: "web", level: "Advanced", years: "Proficient", color: "from-slate-400 to-slate-200" },
    { name: "REST APIs", category: "web", level: "Advanced", years: "Proficient", color: "from-pink-500 to-rose-500" },
    { name: "HTML", category: "web", level: "Advanced", years: "Proficient", color: "from-orange-400 to-amber-500" },
    { name: "CSS", category: "web", level: "Advanced", years: "Proficient", color: "from-blue-400 to-cyan-500" },
    { name: "JavaScript", category: "web", level: "Intermediate", years: "Proficient", color: "from-yellow-400 to-amber-400" },

    // Databases (from resume)
    { name: "MySQL", category: "database", level: "Advanced", years: "Proficient", color: "from-blue-500 to-cyan-600" },
    { name: "PostgreSQL", category: "database", level: "Intermediate", years: "Proficient", color: "from-indigo-500 to-blue-600" },
    { name: "MongoDB", category: "database", level: "Intermediate", years: "Proficient", color: "from-green-500 to-emerald-600" },
    { name: "Firebase", category: "database", level: "Intermediate", years: "Proficient", color: "from-amber-500 to-yellow-600" },
    { name: "NoSQL", category: "database", level: "Intermediate", years: "Proficient", color: "from-teal-500 to-emerald-600" },

    // Data & Visualization (from resume)
    { name: "Power BI", category: "visualization", level: "Advanced", years: "Proficient", color: "from-yellow-500 to-amber-600" },
    { name: "Tableau", category: "visualization", level: "Advanced", years: "Proficient", color: "from-blue-500 to-indigo-600" },
    { name: "Matplotlib", category: "visualization", level: "Expert", years: "Proficient", color: "from-teal-400 to-emerald-500" },
    { name: "Seaborn", category: "visualization", level: "Expert", years: "Proficient", color: "from-cyan-400 to-blue-500" },
  ],
};

export const projectsData = [
  {
    id: "insomnia-detection",
    title: "Advanced Classifiers and Feature Reduction for Accurate Insomnia Detection",
    subtitle: "Sleep Patterns & Behavioral Data Analysis for Health Monitoring",
    category: "AI & Machine Learning",
    featured: true,
    year: "2026",
    badge: "Health AI",
    metric: "Early Diagnosis",
    metricLabel: "Sleep Pattern Analysis",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2060&auto=format&fit=crop",
    description:
      "An Insomnia Detection project that uses machine learning to analyze sleep patterns and behavioral data to identify signs of insomnia: It helps in early diagnosis and monitoring of sleep disorders for better health management.",
    longDescription:
      "This project focuses on early diagnosis and health management of sleep disorders. Using machine learning algorithms, the system processes behavioral and sleep cycle data, applies feature reduction techniques to isolate critical biomarkers, and trains advanced classification models for accurate detection.",
    features: [
      "Machine learning analysis of sleep patterns and behavioral telemetry",
      "Feature reduction techniques to isolate salient sleep metrics and eliminate noise",
      "Model training with advanced classifiers for precise early diagnosis",
      "Data visualization of sleep disorder indicators for health monitoring",
    ],
    highlights: [
      "Analyzes sleep patterns and behavioral data using machine learning algorithms",
      "Applies feature reduction techniques to optimize classifier accuracy",
      "Assists in early diagnosis and monitoring of sleep disorders for health management",
      "Generates clear data visualization graphs using Matplotlib and Seaborn",
    ],
    tech: ["Python", "Machine Learning", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    architecture: "Sleep & Behavioral Data -> Data Preprocessing & Cleaning -> Feature Reduction -> Advanced Classifiers -> Early Diagnosis & Monitoring Output",
  },
  {
    id: "music-genre-classification",
    title: "Artificial Intelligence With Cloud Computing - Music Genre Classification",
    subtitle: "Audio Feature Extraction & Machine Learning Classification",
    category: "AI & Cloud Computing",
    featured: true,
    year: "2026",
    badge: "Audio & Cloud",
    metric: "Audio Extraction",
    metricLabel: "Intelligent Classification",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
    description:
      "Built an intelligent music genre classification system using machine learning and audio feature extraction techniques, coupled with cloud computing concepts.",
    longDescription:
      "Constructed an intelligent audio classification system that extracts acoustic feature representations from audio signals. Utilizes machine learning models and signal processing to classify music tracks into respective genres, integrated with cloud computing deployment principles.",
    features: [
      "Audio feature extraction techniques to extract acoustic representations",
      "Machine learning model training for multi-class genre classification",
      "Integration with cloud computing concepts for scalable execution",
      "Flask REST API backend for prediction and evaluation workflows",
    ],
    highlights: [
      "Built an intelligent music genre classification system using machine learning",
      "Applied audio feature extraction techniques to capture acoustic properties",
      "Explored cloud computing fundamentals for intelligent system deployment",
      "Evaluated model performance and classification accuracy",
    ],
    tech: ["Python", "Machine Learning", "TensorFlow", "Scikit-learn", "Flask", "REST APIs", "Cloud Computing"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    architecture: "Raw Audio Data -> Audio Feature Extraction -> Feature Vector Processing -> ML Classification Models -> Predicted Genre Output",
  },
  {
    id: "multilingual-chatbot",
    title: "Multi-Lingual Chatbot (ML)",
    subtitle: "Conversational Support Across Multiple Languages",
    category: "NLP & Conversational AI",
    featured: true,
    year: "2025",
    badge: "NLP & ML",
    metric: "Cross-Lingual",
    metricLabel: "Conversational Support",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop",
    description:
      "Design and implementation of chatbot using machine learning algorithms, aimed at providing effective and intelligent conversational support across various languages.",
    longDescription:
      "Designed and developed a multilingual conversational chatbot driven by machine learning and natural language processing. Processes user inputs in diverse languages, identifies intent, and generates intelligent conversational responses to deliver accessible multi-language assistance.",
    features: [
      "Natural language understanding and intent classification across languages",
      "Machine learning algorithms powering conversational response logic",
      "Effective and intelligent support for multilingual users",
      "Modular backend architecture with REST API endpoints",
    ],
    highlights: [
      "Designed and implemented chatbot using machine learning algorithms",
      "Aimed at providing effective and intelligent conversational support across various languages",
      "Integrated NLP preprocessing, text tokenization, and intent mapping",
      "Built with Flask REST APIs for interactive web integration",
    ],
    tech: ["Python", "Machine Learning", "NLP", "Flask", "REST APIs", "JavaScript", "HTML/CSS"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    architecture: "Multilingual User Query -> NLP Text Preprocessing & Tokenization -> ML Intent Classifier -> Response Handler -> Interactive Web Interface",
  },
];

export const experienceData = [
  {
    period: "01/2026 – 05/2026",
    role: "Artificial Intelligence with Cloud Computing Intern",
    company: "SuprMentr Technologies Pvt Ltd",
    location: "Remote / Hybrid",
    description:
      "Engaged in training and project work focused on Artificial Intelligence and Cloud Computing concepts.",
    achievements: [
      "Engaged in training and project work focused on Artificial Intelligence and Cloud Computing concepts",
      "Applying machine learning and cloud fundamentals through assessments, live training, and capstone activities",
      "Strengthening knowledge in intelligent systems, deployment concepts, and industry-oriented AI applications",
    ],
    skills: ["Python", "Machine Learning", "Cloud Fundamentals", "Intelligent Systems", "AI Applications"],
  },
  {
    period: "01/2026 – 05/2026",
    role: "Android App Development using Gen AI Intern",
    company: "MindMatrix.io",
    location: "Remote / Hybrid",
    description:
      "Contributing to Android application development using Generative AI concepts and product-based learning modules.",
    achievements: [
      "Contributing to Android application development using Generative AI concepts and product-based learning modules",
      "Supporting feature implementation, application testing, and technical documentation in collaborative development tasks",
      "Working on practical projects involving AI-driven application development and cross-functional problem solving",
    ],
    skills: ["Generative AI", "Android Application Development", "AI-Driven Development", "Feature Testing"],
  },
  {
    period: "10/2025 – 01/2026",
    role: "Capgemini Intern",
    company: "EduBridge",
    location: "Remote",
    description:
      "Engaged in practical training on AI/ML concepts, Python development, and data-driven application building.",
    achievements: [
      "Engaged in practical training on AI/ML concepts, Python development, and data-driven application building",
      "Working on project assignments involving machine learning workflows, preprocessing, and model experimentation",
    ],
    skills: ["Python Development", "AI/ML Concepts", "Data Preprocessing", "Model Experimentation", "Workflows"],
  },
];

export const educationData = [
  {
    degree: "B.E in Artificial Intelligence And Machine Learning",
    institution: "Visvesvaraya Technological University",
    location: "Bangalore, Karnataka",
    period: "2022 – 2026",
    score: "CGPA 7.8",
    status: "Graduated",
  },
  {
    degree: "12th Standard",
    institution: "KHMHS School",
    location: "Malappuram, Kerala",
    period: "2020 – 2022",
    score: "86%",
    status: "Completed",
  },
  {
    degree: "10th Standard",
    institution: "KHMHS School",
    location: "Malappuram, Kerala",
    period: "2019 – 2020",
    score: "99%",
    status: "Completed",
  },
];

export const certificationsData = [
  { title: "Project Completion Certificate", issuer: "Microsoft", badge: "Microsoft" },
  { title: "Completion Of Skill Development Workshop On Generative AI", issuer: "Kodr", badge: "Kodr" },
  { title: "Digital 101 Journey Certificate", issuer: "Nasscom", badge: "Nasscom" },
  { title: "Time Management Course Completion Certificate", issuer: "Infosys", badge: "Infosys" },
  { title: "Business English Course Completion Certificate", issuer: "Infosys", badge: "Infosys" },
];

export const achievementsData = [
  {
    title: "Secondary School Academic Distinction",
    organization: "KHMHS School, Malappuram",
    description: "Secured an exceptional 99% score in 10th standard secondary board examinations.",
    badge: "99% Score",
  },
  {
    title: "Higher Secondary Academic Excellence",
    organization: "KHMHS School, Malappuram",
    description: "Achieved 86% score in 12th standard higher secondary examinations.",
    badge: "86% Score",
  },
  {
    title: "B.E in Artificial Intelligence and Machine Learning",
    organization: "Visvesvaraya Technological University, Bangalore",
    description: "Successfully maintained a strong 7.8 CGPA across rigorous engineering coursework in AI & ML.",
    badge: "7.8 CGPA",
  },
  {
    title: "Triple Industry Internship Experience",
    organization: "SuprMentr, MindMatrix & EduBridge",
    description: "Completed three hands-on industry internships focused on AI with Cloud, Gen AI Android Dev, and Python ML.",
    badge: "3 Internships",
  },
];

export const philosophyData = [
  {
    icon: "Cpu",
    title: "Data-Driven Modeling",
    description: "Developing machine learning and NLP models backed by systematic preprocessing, feature reduction, and model evaluation.",
  },
  {
    icon: "ShieldCheck",
    title: "Intelligent Systems",
    description: "Applying machine learning, deep learning, and cloud computing fundamentals to build practical, scalable software solutions.",
  },
  {
    icon: "Layers",
    title: "Modern AI Frameworks",
    description: "Utilizing Python, Scikit-learn, TensorFlow, NumPy, and Pandas to create high-accuracy predictive pipelines.",
  },
  {
    icon: "Sparkles",
    title: "Continuous Improvement",
    description: "Passionate about building scalable solutions and continuously upgrading technical skills across Software Development, Data Science, and AI/ML.",
  },
];

export const terminalCommands = {
  help: [
    "Available commands:",
    "  • about          - Read summary & background of Jithin P K",
    "  • skills         - Display technical capabilities in AI/ML & Dev",
    "  • projects       - List the 3 major resume machine learning projects",
    "  • experience     - Display internships & work history",
    "  • education      - View academic background (VTU, CGPA 7.8)",
    "  • certifications - List certificates from Microsoft, Infosys, etc.",
    "  • achievements   - View academic & internship milestones",
    "  • contact        - Get direct email, phone, and LinkedIn",
    "  • hire           - Trigger confetti celebration & hire details",
    "  • clear          - Clear terminal output",
  ],
  about: [
    "Jithin P K - AI & Machine Learning Engineer | Software Developer",
    "📍 Kerala, India",
    "🎓 B.E in Artificial Intelligence and Machine Learning (VTU Bangalore, CGPA 7.8)",
    "🚀 Hands-on experience across 3 internships in AI, Cloud Computing, and Gen AI.",
    "💡 Passionate about building practical, scalable solutions in AI/ML and software.",
  ],
  skills: [
    "Programming Languages : Python, SQL, Java, C++",
    "AI/ML Frameworks      : NumPy, Pandas, Scikit-learn, TensorFlow",
    "Web / Deployment      : HTML, CSS, JavaScript, Flask, REST APIs",
    "Machine Learning      : Deep Learning, NLP, Model Development",
    "Databases             : MySQL, PostgreSQL, MongoDB, Firebase, NoSQL",
    "Data & Visualization  : Power BI, Tableau, Matplotlib, Seaborn",
  ],
  projects: [
    "1. Advanced Classifiers and Feature Reduction For Accurate Insomnia Detection",
    "   Stack: Python, Scikit-learn, NumPy, Pandas, Matplotlib, Seaborn",
    "2. AI With Cloud Computing - Music Genre Classification Using ML",
    "   Stack: Python, Machine Learning, TensorFlow, Scikit-learn, Flask, Cloud",
    "3. Multi-Lingual Chatbot (ML)",
    "   Stack: Python, Machine Learning, NLP, Flask, REST APIs, JavaScript",
  ],
  experience: [
    "• SuprMentr Technologies (01/2026 – 05/2026) : AI with Cloud Computing Intern",
    "• MindMatrix.io           (01/2026 – 05/2026) : Android App Dev using Gen AI Intern",
    "• EduBridge / Capgemini   (10/2025 – 01/2026) : Capgemini Intern (AI/ML & Python)",
  ],
  education: [
    "• B.E in AI & ML, Visvesvaraya Technological University (2022-2026) - CGPA 7.8",
    "• 12th KHMHS School, Malappuram, Kerala (2020-2022)                - 86%",
    "• 10th KHMHS School, Malappuram, Kerala (2019-2020)                - 99%",
  ],
  certifications: [
    "• Project Completion Certificate - Microsoft",
    "• Completion Of Skill Development Workshop On Generative AI - Kodr",
    "• Digital 101 Journey Certificate - Nasscom",
    "• Time Management Course Completion Certificate - Infosys",
    "• Business English Course Completion Certificate - Infosys",
  ],
  achievements: [
    "• 99% in 10th Standard Secondary Examination (Top Academic Distinction)",
    "• 86% in 12th Standard Higher Secondary Examination",
    "• 7.8 CGPA in B.E in Artificial Intelligence and Machine Learning (VTU)",
    "• 3 Completed Industry Internships (SuprMentr, MindMatrix, EduBridge)",
  ],
  contact: [
    "📧 Email    : pkjithin383@gmail.com",
    "📱 Phone    : +91 9747310383",
    "📍 Location : Kerala, India",
    "💼 LinkedIn : https://linkedin.com/in/jithin-",
  ],
  hire: [
    "🎉 Awesome! Jithin is open to AI/ML and Software Engineering roles.",
    "📧 Direct Email: pkjithin383@gmail.com",
    "📱 Direct Phone: +91 9747310383",
  ],
};
