export const projects = [
  {
    id: 1,
    title: "Visionary — AI Art Studio",
    description: "A multi-agent AI-powered creative studio for generating cohesive visual and motion-based artwork from high-level creative briefs.",
    detailedDescription: "Visionary is an advanced generative media studio built using a hierarchical multi-agent architecture. A central Director agent interprets abstract creative briefs and orchestrates specialized agents for image and motion generation. The system integrates Google’s Agent Development Kit with state-of-the-art generative models such as Gemini, Imagen, and Veo to produce consistent, high-quality multimedia outputs. This approach abstracts prompt engineering complexity and enables scalable, autonomous creative workflows.",
    skillsLearned: [
      "Multi-Agent System Design",
      "Generative AI Pipelines",
      "Google Agent Development Kit (ADK)",
      "Prompt Orchestration",
      "Full-Stack Development with TypeScript"
    ],
    challengesFaced: "Coordinating multiple AI agents while maintaining shared context and creative consistency across static and motion outputs was the primary challenge.",
    solution: "Designed a hierarchical agent workflow with a Director agent responsible for task decomposition and context management, enabling smooth handoff between specialized generative agents.",
    githubLink: "https://github.com/rahul0304-tech/Visionary-The-AI-Art-Studio",
    demoLink: "https://visionary-rho-nine.vercel.app",
    techStack: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Google ADK",
      "Gemini",
      "Imagen",
      "Veo"
    ],
    category: "AI",
    thumbnail: "https://images.unsplash.com/photo-1599585795426-3390ee964f96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENyZWF0aXZlJTIwU3R1ZGlvfGVufDB8fDB8fHww",
    gallery: [
      "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1612832021290-f1f1252d039d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ],
    featured: true
  },
  {
    id: 2,
    title: "MerchMaster — AI Product Design Studio",
    description: "An AI-powered web application for generating photorealistic merchandise mockups using custom assets and generative models.",
    detailedDescription: "MerchMaster is a professional-grade design studio that allows users to create realistic merchandise mockups by embedding logos and graphics into real-world product scenes. The application features an interactive canvas with drag-and-drop controls, layering, alignment, and perspective adjustments. It integrates Google GenAI image models to generate context-aware, high-resolution mockups suitable for marketing and product previews.",
    skillsLearned: [
      "Interactive UI Design",
      "Generative AI Integration",
      "Canvas State Management",
      "Prompt Engineering for Image Models",
      "Frontend Architecture with React"
    ],
    challengesFaced: "Building a responsive, feature-rich canvas editor while maintaining performance and seamless AI generation was the core challenge.",
    solution: "Implemented modular React components with custom hooks for canvas state, and integrated Google GenAI SDK to generate photorealistic outputs based on structured prompt inputs.",
    githubLink: "https://github.com/rahul0304-tech/merch-master",
    demoLink: "https://merch-master.vercel.app",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Google GenAI SDK",
      "Vite"
    ],
    category: "AI",
    thumbnail: "https://images.unsplash.com/photo-1579664531470-ac357f8f8e2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVyY2hhbmRpc2V8ZW58MHx8MHx8fDA%3D",
    gallery: [
      "https://images.unsplash.com/photo-1526403228230-2a5719c289f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1616627980530-683f1f75746d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ],
    featured: false
  },
  {
    id: 3,
    title: "F1 Analysis Dashboard",
    description: "A full-stack analytics dashboard for exploring and comparing Formula 1 race and driver performance data.",
    detailedDescription: "The F1 Analysis Dashboard is a data-driven web application that enables in-depth analysis of Formula 1 races, sessions, and driver performance. Built with a Next.js frontend and a Flask backend backed by MongoDB, the platform offers interactive charts, lap-time comparisons, and season-level insights. The application is designed for both enthusiasts and analysts seeking detailed motorsport analytics.",
    skillsLearned: [
      "Full-Stack Development",
      "REST API Design",
      "Data Visualization",
      "Database Modeling",
      "Performance Optimization"
    ],
    challengesFaced: "Efficiently querying and visualizing large volumes of motorsport data while maintaining a smooth user experience.",
    solution: "Designed optimized API endpoints and leveraged client-side data visualization libraries with structured backend responses to minimize latency.",
    githubLink: "https://github.com/rahul0304-tech/F1-Analysis-Dashboard",
    demoLink: "https://f1-analysis-dashboard.vercel.app",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Flask",
      "MongoDB"
    ],
    category: "Web Application / Data Analytics",
    thumbnail: "https://images.unsplash.com/photo-1631392426516-affff6b1d41c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fEZvcm11bGElMjAxfGVufDB8fDB8fHww",
    gallery: [
      "https://images.unsplash.com/photo-1534100968270-53a10ff3a03f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ],
    featured: false
  },
  {
    id: 4,
    title: "AI SQL Assistant",
    description: "An AI-powered SQL assistant that generates optimized SQL queries from natural language prompts.",
    detailedDescription: "Built a Streamlit-based data assistant that allows users to interact with structured datasets using natural language queries. The system dynamically converts user prompts into SQL, executes queries on uploaded CSV or Excel files, and returns insights. It includes intelligent column detection, schema awareness, and prompt constraints to ensure accurate and efficient SQL generation.",
    skillsLearned: [
      "Natural Language Processing",
      "LLMs",
      "Prompt Engineering",
      "Streamlit",
      "SQL Optimization"
    ],
    challengesFaced: "Preventing hallucinated or inefficient SQL queries while maintaining flexibility for diverse datasets.",
    solution: "Implemented a context-aware prompting strategy with schema constraints and validation logic to ensure syntactically correct and performant SQL output.",
    githubLink: "https://github.com/rahul0304-tech/AI-SQL-ASSISTANT-USING-LLM",
    demoLink: "https://connect-with-data.streamlit.app/",
    techStack: [
      "Python",
      "Streamlit",
      "Large Language Models"
    ],
    category: "AI",
    thumbnail: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ],
    featured: true
  },
  {
    id: 5,
    title: "Legal Text Classification App",
    description: "A machine learning web application that classifies legal text into predefined categories using a fine-tuned BERT model.",
    detailedDescription: "This application is deployed as a Hugging Face Space and provides an interface for classifying legal case text using a fine-tuned BERT-based model. Users can input legal content and receive predicted labels with confidence scores. The backend is implemented in Flask and leverages Hugging Face Transformers with safetensors for efficient inference.",
    skillsLearned: [
      "Natural Language Processing",
      "Transformer Models",
      "Model Deployment",
      "Flask API Development",
      "PyTorch"
    ],
    challengesFaced: "Deploying a transformer-based model in a constrained environment while ensuring fast and reliable inference.",
    solution: "Optimized model loading using safetensors and streamlined the inference pipeline for deployment within Hugging Face Spaces.",
    githubLink: "https://huggingface.co/spaces/me-rahulabhi/legal-text-classification-app",
    demoLink: "https://huggingface.co/spaces/me-rahulabhi/legal-text-classification-app",
    techStack: [
      "Python",
      "Flask",
      "PyTorch",
      "Hugging Face Transformers"
    ],
    category: "Machine Learning",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fE1hY2hpbmUlMjBMZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1537432376769-00a6241da9c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1581091012184-7d28a1a5f7b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ],
    featured: false
  },
  {
    id: 6,
    title: "Coordinate App",
    description: "A lightweight web application for visualizing and managing Cartesian coordinate points interactively.",
    detailedDescription: "Coordinate App is a frontend-focused web application that allows users to input, visualize, and manipulate points on a 2D Cartesian plane. The application emphasizes clarity and interactivity, enabling users to understand coordinate geometry concepts through real-time plotting and updates. It is designed as an educational and utility tool, showcasing clean UI design, state management, and mathematical visualization in the browser.",
    skillsLearned: [
      "Frontend Development",
      "Coordinate Geometry Visualization",
      "State Management in React",
      "UI Design for Educational Tools",
      "Event Handling and Data Binding"
    ],
    challengesFaced: "Ensuring accurate plotting and smooth real-time updates of coordinates while keeping the UI intuitive and responsive was the main challenge.",
    solution: "Implemented a structured coordinate system with controlled inputs and reactive state updates, allowing points to be rendered dynamically while maintaining mathematical accuracy.",
    githubLink: "https://github.com/rahul0304-tech/Coordinate_App",
    demoLink: "#",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React"
    ],
    category: "Web Application",
    thumbnail: "https://plus.unsplash.com/premium_photo-1683977922495-3ab3ce7ba4e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U29jaWFsJTIwTWVkaWF8ZW58MHx8MHx8fDA%3D",
    gallery: [
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ],
    featured: false
  }
];

export const certifications = [
  {
    id: 1,
    name: "5-Day AI Agents Intensive Course",
    issuedBy: "Google × Kaggle",
    date: "2025-12-18",
    description: "An intensive hands-on program focused on designing, building, and orchestrating AI agents using modern LLM-based agent frameworks and Google AI tooling.",
    skillsAcquired: [
      "AI Agent Design",
      "Multi-Agent Systems",
      "LLM Orchestration",
      "Prompt Engineering",
      "Applied Generative AI"
    ],
    credentialLink: "#",
    certificateImage: "/certificates/ai-agents-google.png",
    icon: "fab fa-google"
  },
  {
    id: 2,
    name: "Google Advanced Data Analytics Professional Certificate",
    issuedBy: "Google (Coursera)",
    date: "2024-07-20",
    description: "A professional certificate covering advanced data analytics concepts including statistics, regression, machine learning, and predictive modeling with hands-on assessments.",
    skillsAcquired: [
      "Advanced Data Analytics",
      "Python for Data Science",
      "Statistical Analysis",
      "Regression Analysis",
      "Machine Learning Fundamentals",
      "Predictive Modeling"
    ],
    credentialLink: "https://coursera.org/verify/professional-cert/DYBATPKGKG6A",
    certificateImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    icon: "fab fa-google"
  },
  {
    id: 3,
    name: "Introduction to Career Skills in Data Analytics",
    issuedBy: "LinkedIn Learning",
    date: "2025-07-08",
    description: "A foundational course focused on career-oriented skills required for data analytics roles, including analytical thinking and industry expectations.",
    skillsAcquired: [
      "Data Analytics Fundamentals",
      "Analytical Thinking",
      "Tech Career Skills"
    ],
    credentialLink: "#",
    certificateImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    icon: "fab fa-linkedin"
  },
  {
    id: 4,
    name: "MongoDB Data Modeling",
    issuedBy: "MongoDB University",
    date: "2024-05-15",
    description: "A specialized certification focused on designing scalable and performant document schemas in MongoDB based on real-world access patterns.",
    skillsAcquired: [
      "MongoDB Schema Design",
      "Index Optimization",
      "Embedding vs Referencing",
      "Data Modeling Best Practices"
    ],
    credentialLink: "#",
    certificateImage: "https://images.unsplash.com/photo-1603126857599-74a804ac6e53?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    icon: "fas fa-database"
  },
  {
    id: 5,
    name: "SQL for Data Science",
    issuedBy: "Great Learning Academy",
    date: "2024-09",
    description: "A hands-on course covering SQL concepts required for data science, including joins, aggregations, subqueries, and analytical queries.",
    skillsAcquired: [
      "SQL Queries",
      "Joins and Subqueries",
      "Aggregations",
      "Data Analysis with SQL"
    ],
    credentialLink: "https://www.mygreatlearning.com/certificate/LBTMBKPG",
    certificateImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    icon: "fas fa-database"
  },
  {
    id: 6,
    name: "Introduction to Microsoft Excel",
    issuedBy: "Coursera Project Network",
    date: "2024-12-10",
    description: "A practical project-based certification covering Excel fundamentals for data analysis and reporting.",
    skillsAcquired: [
      "Excel Formulas",
      "Data Analysis",
      "Spreadsheets",
      "Data Visualization"
    ],
    credentialLink: "https://coursera.org/verify/W9WGG9TDP92U",
    certificateImage: "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    icon: "fas fa-file-excel"
  }
];

export const internships = [
  {
    id: 1,
    role: "Data Analyst Intern",
    company: "Indo Euro Synchronization",
    duration: "Feb 2024 - May 2024",
    description: [
      "Completed a 3-month internship as a Data Analyst",
      "Worked with structured datasets using Excel, SQL, and Power BI",
      "Focused on reporting, automation, and data-driven insights"
    ],
    responsibilities: [
      "Analyzed datasets to identify trends and patterns",
      "Created automated reports using Excel macros",
      "Built interactive Power BI dashboards",
      "Wrote SQL queries for data extraction and transformation",
      "Presented insights to stakeholders"
    ],
    achievements: [
      "Improved reporting efficiency through automation",
      "Delivered actionable insights for business decisions"
    ],
    skillsGained: [
      "Advanced Excel",
      "Power BI",
      "SQL",
      "Data Visualization",
      "Data Analysis"
    ],
    companyLogo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    role: "Salesforce Developer Intern",
    company: "SmartInternz × Salesforce",
    duration: "May 2024 - Jun 2024",
    description: [
      "Completed an 8-week Salesforce Developer virtual internship",
      "Worked on Salesforce fundamentals, automation, and Apex",
      "Developed a CRM application as a capstone project"
    ],
    responsibilities: [
      "Built custom objects, fields, and validation rules",
      "Developed automation using flows and process builders",
      "Worked with Apex and Lightning Web Components",
      "Collaborated on CRM design and deployment"
    ],
    achievements: [
      "Completed multiple Salesforce Super Badges",
      "Successfully deployed a CRM application"
    ],
    skillsGained: [
      "Salesforce Development",
      "Apex Programming",
      "Lightning Web Components",
      "SOQL",
      "Process Automation"
    ],
    companyLogo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    role: "Data Science Intern",
    company: "CODTECH IT SOLUTIONS",
    duration: "Apr 2025 - Jul 2025",
    description: [
      "Completed a 3-month Data Science internship",
      "Actively participated in applied data science tasks",
      "Worked on analytics and model-based problem solving"
    ],
    responsibilities: [
      "Performed data preprocessing and analysis",
      "Worked on data-driven problem statements",
      "Applied Python-based data science techniques"
    ],
    achievements: [
      "Successfully completed internship with strong evaluations"
    ],
    skillsGained: [
      "Data Science",
      "Python",
      "Data Analysis",
      "Problem Solving"
    ],
    companyLogo: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    role: "Data Science Intern",
    company: "OASIS INFOBYTE (AICTE OIB-SIP)",
    duration: "Mar 2025 - Apr 2025",
    description: [
      "Completed a 1-month AICTE OIB-SIP internship in Data Science",
      "Focused on practical exposure to data science workflows"
    ],
    responsibilities: [
      "Worked on data analysis tasks",
      "Applied foundational data science concepts",
      "Completed assigned internship modules"
    ],
    achievements: [
      "Received completion certificate with positive remarks"
    ],
    skillsGained: [
      "Data Science Fundamentals",
      "Data Analysis",
      "Analytical Thinking"
    ],
    companyLogo: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];


