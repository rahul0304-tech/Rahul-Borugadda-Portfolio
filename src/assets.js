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
    category: "AI / Generative Media",
    thumbnail: "https://images.unsplash.com/photo-1618773928121-c3223b6ce2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
    category: "Web Application / AI",
    thumbnail: "https://images.unsplash.com/photo-1581093588401-6510d38ad1ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
    thumbnail: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
    category: "AI / Data",
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
    category: "Machine Learning / NLP",
    thumbnail: "https://images.unsplash.com/photo-1600172451381-2546a4a4f9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
    category: "Web Application / Visualization",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
    name: "Google Advanced Data Analytics",
    issuedBy: "Google",
    date: "2024-01-10",
    description: "A comprehensive program covering advanced data analytics techniques, statistical analysis, and machine learning fundamentals using Google's tools and platforms.",
    skillsAcquired: ["Data Cleaning", "Exploratory Data Analysis", "Statistical Analysis", "Python for Data Science", "Machine Learning Basics"],
    credentialLink: "https://www.coursera.org/account/accomplishments/professional-cert/reference-id",
    certificateImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    icon: "fab fa-google"
  },
  {
    id: 2,
    name: "AWS Data Engineering",
    issuedBy: "Amazon Web Services",
    date: "2023",
    description: "Certification focused on designing, building, and maintaining data processing systems on AWS, covering data ingestion, transformation, and storage solutions.",
    skillsAcquired: ["ETL Pipeline Design", "AWS Glue", "Amazon Redshift", "AWS Lambda", "Data Lake Architecture"],
    credentialLink: "https://www.credly.com/badges/example-id",
    certificateImage: "https://images.unsplash.com/photo-1573164574001-518958d9baa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    icon: "fab fa-aws"
  },
  {
    id: 3,
    name: "AWS Data Analytics",
    issuedBy: "Amazon Web Services",
    date: "2023",
    description: "Certification validating expertise in AWS data analytics services for extracting valuable insights from data, including storage, processing, and visualization.",
    skillsAcquired: ["Amazon Athena", "AWS Kinesis", "Amazon QuickSight", "AWS Data Pipeline", "Amazon EMR"],
    credentialLink: "https://www.credly.com/badges/example-id-2",
    certificateImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    icon: "fab fa-aws"
  },
  {
    id: 4,
    name: "AWS AI-ML Virtual Internship",
    issuedBy: "Amazon Web Services",
    date: "2023",
    description: "A virtual internship program focusing on applying AWS's AI and machine learning services to real-world business problems and use cases.",
    skillsAcquired: ["Amazon SageMaker", "AWS Comprehend", "Amazon Rekognition", "AWS Forecast", "AI Model Deployment"],
    credentialLink: "https://www.credly.com/badges/example-id-3",
    certificateImage: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    icon: "fab fa-aws"
  },
  {
    id: 5,
    name: "AWS Solutions Architecture",
    issuedBy: "Amazon Web Services",
    date: "2023",
    description: "Certification validating the ability to design and deploy secure, robust, and scalable applications on AWS infrastructure following best practices.",
    skillsAcquired: ["Cloud Architecture", "AWS Security", "High Availability Design", "Cost Optimization", "Migration Planning"],
    credentialLink: "https://www.credly.com/badges/example-id-4",
    certificateImage: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    icon: "fab fa-aws"
  },
  {
    id: 6,
    name: "SQL for Data Science",
    issuedBy: "Coursera",
    date: "2023",
    description: "A course focused on using SQL for data manipulation, extraction, and analysis specifically tailored for data science applications.",
    skillsAcquired: ["Advanced SQL Queries", "Data Filtering", "Aggregations", "Joins and Subqueries", "Window Functions"],
    credentialLink: "https://www.coursera.org/account/accomplishments/verify/example-id",
    certificateImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    icon: "fas fa-database"
  },
  {
    id: 7,
    name: "MongoDB Modelling",
    issuedBy: "MongoDB University",
    date: "2023",
    description: "A specialized course on designing efficient, scalable document data models for MongoDB that follow best practices for performance and functionality.",
    skillsAcquired: ["Document Schema Design", "Embedding vs. Referencing", "Index Optimization", "Data Access Patterns", "Schema Versioning"],
    credentialLink: "https://university.mongodb.com/course_completion/example-id",
    certificateImage: "https://images.unsplash.com/photo-1603126957599-74a804ac6e53?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    icon: "fas fa-database"
  },
  {
    id: 8,
    name: "Microsoft Excel",
    issuedBy: "Microsoft",
    date: "2023",
    description: "Certification demonstrating proficiency in using Microsoft Excel for data analysis, visualization, and business intelligence applications.",
    skillsAcquired: ["Advanced Formulas", "Pivot Tables", "Data Visualization", "Power Query", "Macros and VBA"],
    credentialLink: "https://www.microsoft.com/en-us/learning/certification-example-id",
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
      "Completed a 3-month virtual internship as a Data Analyst",
      "Acquired skills in Data Analysis using MS Excel Macros",
      "Used Power BI and SQL for data-driven solutions"
    ],
    responsibilities: [
      "Analyzed large datasets to identify patterns and trends",
      "Created automated reports using Excel Macros",
      "Developed interactive dashboards in Power BI",
      "Wrote SQL queries to extract and transform data",
      "Presented findings to stakeholders"
    ],
    achievements: [
      "Reduced reporting time by 40% through automation",
      "Identified cost-saving opportunities worth $15,000 annually",
      "Received commendation for exceptional analytical skills"
    ],
    skillsGained: [
      "Advanced Excel",
      "Power BI",
      "SQL",
      "Data Visualization",
      "Statistical Analysis"
    ],
    companyLogo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    role: "Salesforce Developer Intern",
    company: "Salesforce",
    duration: "Feb 2024 - May 2024",
    description: [
      "Gained knowledge in Salesforce Fundamentals",
      "Learned Relationships and Process Automation",
      "Built a CRM application for Laptop Rentals as a group project"
    ],
    responsibilities: [
      "Developed custom objects and fields in Salesforce",
      "Created process builders and flows for automation",
      "Designed user interfaces using Lightning components",
      "Implemented validation rules and security settings",
      "Collaborated with team members on CRM project"
    ],
    achievements: [
      "Successfully deployed laptop rental CRM application",
      "Awarded 'Best Project Implementation' in the program",
      "Completed all Salesforce Trailhead modules with 100% score"
    ],
    skillsGained: [
      "Salesforce Administration",
      "Apex Programming",
      "Lightning Web Components",
      "SOQL",
      "Process Automation"
    ],
    companyLogo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    role: "Event Organizer",
    company: "Extracurricular Activity",
    duration: "2023",
    description: [
      "Organized a communication workshop",
      "Enhanced skills among participants",
      "Fostered personal growth through leadership"
    ],
    responsibilities: [
      "Coordinated all aspects of a communication workshop for 50+ students",
      "Managed a team of 5 volunteers",
      "Created promotional materials and handled registration",
      "Secured sponsorships and managed budget",
      "Facilitated workshop sessions"
    ],
    achievements: [
      "Received 4.8/5 satisfaction rating from participants",
      "Completed the event under budget while meeting all objectives",
      "Featured in college newsletter for exceptional organization"
    ],
    skillsGained: [
      "Event Management",
      "Leadership",
      "Team Coordination",
      "Budget Planning",
      "Public Speaking"
    ],
    companyLogo: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    role: "Social Media Management",
    company: "College Association",
    duration: "2022 - 2023",
    description: [
      "Volunteered in college social media association",
      "Responsible for content creation",
      "Designed graphics for various college events"
    ],
    responsibilities: [
      "Managed social media accounts across multiple platforms",
      "Created engaging content for daily posts",
      "Designed graphics and visual assets for events",
      "Analyzed engagement metrics and adjusted strategy",
      "Collaborated with event committees for promotional campaigns"
    ],
    achievements: [
      "Increased social media engagement by 75% over one year",
      "Grew follower count from 500 to 2000+ across platforms",
      "Designed award-winning campaign for annual college festival"
    ],
    skillsGained: [
      "Social Media Strategy",
      "Graphic Design",
      "Content Creation",
      "Analytics",
      "Digital Marketing"
    ],
    companyLogo: "https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 5,
    role: "Content Creator",
    company: "The Lavenders",
    duration: "Mar 2024 - Present",
    description: [
      "Created and managed content",
      "Focused on photography and videography",
      "Developed creative visual storytelling skills"
    ],
    responsibilities: [
      "Produce high-quality photography and videography content",
      "Develop creative concepts for visual storytelling",
      "Edit and optimize content for various platforms",
      "Manage posting schedule and audience engagement",
      "Collaborate with other creators for special projects"
    ],
    achievements: [
      "Featured content reached over 50,000 views",
      "Selected for collaboration with regional brands",
      "Received recognition for innovative visual storytelling"
    ],
    skillsGained: [
      "Photography",
      "Videography",
      "Adobe Creative Suite",
      "Visual Storytelling",
      "Content Strategy"
    ],
    companyLogo: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];
