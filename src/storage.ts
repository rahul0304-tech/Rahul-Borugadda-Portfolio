import { 
  projects, certifications, internships,
  type Project, type InsertProject,
  type Certification, type InsertCertification,
  type Internship, type InsertInternship
} from "@shared/schema";

export interface IStorage {
  // Projects
  getProjects(): Promise<Project[]>;
  getProjectById(id: number): Promise<Project | undefined>;
  getProjectsByCategory(category: string): Promise<Project[]>;
  getFeaturedProject(): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: number): Promise<boolean>;

  // Certifications
  getCertifications(): Promise<Certification[]>;
  getCertificationById(id: number): Promise<Certification | undefined>;
  createCertification(certification: InsertCertification): Promise<Certification>;
  updateCertification(id: number, certification: Partial<InsertCertification>): Promise<Certification | undefined>;
  deleteCertification(id: number): Promise<boolean>;

  // Internships
  getInternships(): Promise<Internship[]>;
  getInternshipById(id: number): Promise<Internship | undefined>;
  createInternship(internship: InsertInternship): Promise<Internship>;
  updateInternship(id: number, internship: Partial<InsertInternship>): Promise<Internship | undefined>;
  deleteInternship(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private projects: Map<number, Project>;
  private certifications: Map<number, Certification>;
  private internships: Map<number, Internship>;
  private projectId: number;
  private certificationId: number;
  private internshipId: number;

  constructor() {
    this.projects = new Map();
    this.certifications = new Map();
    this.internships = new Map();
    this.projectId = 1;
    this.certificationId = 1;
    this.internshipId = 1;

    // Initialize with sample data from Rahul's resume
    this.initializeData();
  }

  private initializeData() {
    // Add initial projects
    this.createProject({
      title: "Legal Text Classification App",
      description: "A web application that uses a fine-tuned BERT model to classify legal text into predefined categories.",
      detailedDescription: "This Hugging Face Space implements a Flask-based web app that performs legal text classification using a custom fine-tuned BERT model. Users can enter legal text and receive the predicted class label, confidence score, and full probability distribution across legal categories. The backend loads a saved safetensors model and Fast Tokenizer to provide accurate and domain-specific classification results.",
      skillsLearned: [
        "Natural Language Processing (NLP)",
        "Text Classification with Transformers",
        "Model Deployment on Hugging Face Spaces",
        "Flask Web App Integration",
        "Using safetensors with PyTorch & Transformers"
      ],
      challengesFaced: "Integrating the NLP model with a responsive web interface in a lightweight environment while ensuring accurate tokenization, efficient inference, and model loading within a Hugging Face Space deployment.",
      solution: "Built a Flask backend serving a classification endpoint that loads a custom BERT model and tokenizer stored within the Space. Parsed user text input into model tokens, performed inference on the GPU when available, normalized logits to probabilities, and returned clear classification results.",
      githubLink: "https://huggingface.co/spaces/me-rahulabhi/legal-text-classification-app",
      demoLink: "https://huggingface.co/spaces/me-rahulabhi/legal-text-classification-app",
      techStack: [
        "Python",
        "Flask",
        "PyTorch",
        "Hugging Face Transformers",
        "BERT Model",
        "safetensors"
      ],
      category: "Machine Learning / NLP",
      thumbnail: "https://images.unsplash.com/photo-1581093588401-6510d38ad1ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      gallery: [
        "https://images.unsplash.com/photo-1600172451381-2546a4a4f9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1581091012184-7d28a1a5f7b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1537432376769-00a6241da9c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ],
      featured: false
    });

    this.createProject({
      title: "MerchMaster - AI Product Design Studio",
      description: "A professional-grade web application for generating photorealistic merchandise mockups using generative AI.",
      detailedDescription: "MerchMaster is a creative product marketing tool that enables users to embed logos, graphics, and imagery into merchandise like mugs, apparel, billboards, packaging, and more. It offers an interactive design studio with drag-and-drop canvas manipulation, smart alignment and layering controls, and AI-driven mockup generation using the Google GenAI Gemini models. Users can upload assets or generate them through prompts, design layouts on a customizable canvas, and render photorealistic high-resolution mockups using context-aware prompt construction.",
      skillsLearned: [
        "Full-stack React Development (TypeScript)",
        "Generative AI Integration with Google GenAI SDK",
        "Interactive UI/UX Design",
        "Canvas Manipulation and State Management",
        "Tailwind CSS for Responsive Design"
      ],
      challengesFaced: "Designing an interactive, visually intuitive canvas editor that supports drag-and-drop, layering, angle controls, and real-time AI-assisted mockup generation while maintaining responsiveness and performance presented significant UI/UX and architectural challenges.",
      solution: "Built a modular React application using TypeScript and Tailwind CSS with reusable UI components for canvas manipulation. Integrated the Google GenAI SDK (`gemini-3-pro-image-preview`) to generate context-aware, photorealistic mockups based on layout and prompt cues. Managed complex state within a canvas editor using custom hooks and services.",
      githubLink: "https://github.com/rahul0304-tech/merch-master",
      demoLink: "https://merch-master.vercel.app",
      techStack: [
        "React (TypeScript)",
        "Tailwind CSS",
        "Google GenAI SDK",
        "Vite",
        "Lucide Icons"
      ],
      category: "Web Application / Generative AI",
      thumbnail: "https://images.unsplash.com/photo-1581093588401-6510d38ad1ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      gallery: [
        "https://images.unsplash.com/photo-1616627980530-683f1f75746d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1526403228230-2a5719c289f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ],
      featured: false
    });
    
    this.createProject({
      title: "Visionary — AI Art Studio",
      description: "An autonomous multi-agent creative studio for generative media built on the Google Agent Development Kit and advanced generative models.",
      detailedDescription: "Visionary is an AI-oriented creativity studio that streamlines generative art production by abstracting the complexity of prompt engineering and multi-model workflows. Instead of manually crafting prompts for individual models, the system uses a hierarchical multi-agent pipeline where a Director agent interprets high-level briefs and orchestrates specialized workers to generate static and motion assets using state-of-the-art generative models such as Gemini 2.5 Pro, Imagen 4.0, and Veo 3.0. This approach enables cohesive storytelling and multimedia output with minimal manual overhead.",
      skillsLearned: [
        "Multi-agent System Design",
        "Generative AI Workflows",
        "Google Agent Development Kit (ADK)",
        "API Integration with Google Generative Models",
        "Full-stack TypeScript + React"
      ],
      challengesFaced: "Managing state and context across multiple specialized AI agents and ensuring smooth handoff between static image and motion generation were core architectural challenges. Balancing asynchronous model calls with session consistency also required careful orchestration.",
      solution: "Implemented a hierarchical agent system with a Director agent to decompose user briefs and delegate tasks to specialized Visual and Motion agents. Used custom tools to wrap generative model APIs and maintained session memory to tie outputs together for coherent multimedia results.",
      githubLink: "https://github.com/rahul0304-tech/Visionary-The-AI-Art-Studio",
      demoLink: "https://visionary-rho-nine.vercel.app",
      techStack: [
        "Google Agent Development Kit (ADK)",
        "Gemini 2.5 Pro",
        "Imagen 4.0",
        "Veo 3.0",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Vite"
      ],
      category: "AI / Generative Media",
      thumbnail: "https://images.unsplash.com/photo-1618773928121-c3223b6ce2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      gallery: [
        "https://images.unsplash.com/photo-1612832021290-f1f1252d039d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ],
      featured: true
    });

    this.createProject({
      title: "F1 Analysis Dashboard",
      description: "A comprehensive interactive Formula 1 performance and race analytics dashboard combining a modern frontend with a RESTful Python backend to visualize and compare F1 data.",
      detailedDescription: "The F1 Analysis Dashboard is a full-stack web application designed for Formula 1 fans, analysts, and data enthusiasts. It provides detailed, interactive visualizations and analytical tools to explore race meetings, sessions, driver statistics, lap performances, and tactical comparisons across seasons. Built with a decoupled architecture, the project uses a Next.js + TypeScript + Tailwind frontend that consumes data from a Flask backend connected to a MongoDB database. Users can browse high-level season summaries, analyze lap times, filter sessions, and overlay multiple drivers for side-by-side performance comparison.",
      skillsLearned: [
        "Full-stack Web Development",
        "React (Next.js) with TypeScript",
        "REST API Design with Flask (Python)",
        "Database Management with MongoDB",
        "Data Visualization (Chart.js, custom UI)",
        "Responsive UI/UX Design (Tailwind CSS)"
      ],
      challengesFaced: "Integrating a responsive, interactive frontend with a data-rich backend API while ensuring performance and usability across complex analytical views was a core challenge. Modeling and querying performance data efficiently from MongoDB for dynamic lap and session comparisons required careful schema design and indexing.",
      solution: "Adopted a decoupled architecture with clear API endpoints in the Flask backend for each analytical feature (drivers, sessions, records, comparisons). On the frontend, leveraged Next.js’s App Router and React state management with custom hooks to fetch and render data efficiently. Utilized Chart.js for flexible visualizations and Tailwind CSS for consistent styling across views.",
      githubLink: "https://github.com/rahul0304-tech/F1-Analysis-Dashboard",
      demoLink: "https://f1-analysis-dashboard.vercel.app",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "React",
        "Flask",
        "Python",
        "MongoDB",
        "Chart.js"
      ],
      category: "Web Application / Data Analytics",
      thumbnail: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      gallery: [
        "https://images.unsplash.com/photo-1534100968270-53a10ff3a03f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ],
      featured: true
    });
    
    this.createProject({
      title: "AI SQL Assistant",
      description: "An SQL Assistant using LLM for generating queries. This tool simplifies the process of creating complex SQL queries by using natural language processing to interpret user requirements and generate appropriate SQL code.",
      detailedDescription: "The AI SQL Assistant is a groundbreaking tool that bridges the gap between natural language and SQL database queries. By leveraging OpenAI's language model capabilities, the assistant interprets user requirements expressed in plain English and translates them into accurate SQL queries, eliminating the need for extensive SQL knowledge.",
      skillsLearned: ["Natural Language Processing", "Prompt Engineering", "API Integration", "SQL Query Optimization"],
      challengesFaced: "The primary challenge was designing an effective prompt architecture that would generate well-structured, efficient SQL queries without hallucinations or syntax errors.",
      solution: "I implemented a context-aware prompting system with examples and constraints that guide the language model to produce clean, optimized SQL code. The system also includes validation mechanisms to ensure the generated queries follow proper syntax and best practices.",
      githubLink: "https://github.com/rahul0304-tech/AI-SQL-ASSISTANT-USING-LLM",
      demoLink: "#",
      techStack: ["Python", "StreamLit", "OpenAI API"],
      category: "AI/ML",
      thumbnail: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      gallery: [
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ],
      featured: true
    });

    this.createProject({
      title: "COORDINATE",
      description: "A social media web application using React and Appwrite. This platform allows users to connect, share content, and engage with each other in a responsive environment that works across all devices.",
      detailedDescription: "COORDINATE is a full-featured social media platform built with modern web technologies. It provides users with the ability to create profiles, share posts with images and videos, follow other users, engage through comments and likes, and discover trending content through a personalized feed algorithm.",
      skillsLearned: ["React Component Architecture", "Backend as a Service (BaaS)", "Authentication Flow Design", "Responsive UI Development"],
      challengesFaced: "Creating a responsive, performant application that handles real-time updates and maintains state consistency across multiple components was particularly challenging.",
      solution: "Implemented a custom state management solution using React Context API and optimized rendering with memoization techniques. Used Appwrite's real-time subscriptions to ensure data consistency across the application.",
      githubLink: "#",
      demoLink: "#",
      techStack: ["React", "Appwrite", "Tailwind CSS"],
      category: "Web Development",
      thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      gallery: [
        "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1611162618479-ee4a1f8d5be4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ],
      featured: false
    });

    // Add initial certifications
    this.createCertification({
      name: "Introduction to Career Skills in Data Analytics",
      issuedBy: "Linkedin Learning",
      date: "2025-07-08",
      description: "A comprehensive program introducing data analytics techniques, statistical analysis, and machine learning fundamentals from LinkedIn Learning.",
      skillsAcquired: ["Data Cleaning", "Exploratory Data Analysis", "Statistical Analysis", "Python for Data Science", "Machine Learning Basics"],
      credentialLink: "https://drive.google.com/file/d/1UIEsbVNZbyYIAND47Qam1dsUCVOPBbhr/view?usp=drive_link",
      certificateImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      icon: "fab fa-google"
    });
    
    this.createCertification({
      name: "Google Advanced Data Analytics",
      issuedBy: "Google",
      date: "2024-01-10",
      description: "A comprehensive program covering advanced data analytics techniques, statistical analysis, and machine learning fundamentals using Google's tools and platforms.",
      skillsAcquired: ["Data Cleaning", "Exploratory Data Analysis", "Statistical Analysis", "Python for Data Science", "Machine Learning Basics"],
      credentialLink: "https://coursera.org/verify/professional-cert/DYBATPKGKG6A",
      certificateImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      icon: "fab fa-google"
    });

    this.createCertification({
      name: "SQL for Data Science",
      issuedBy: "Great Learning",
      date: "2023",
      description: "A course focused on using SQL for data manipulation, extraction, and analysis specifically tailored for data science applications.",
      skillsAcquired: ["Advanced SQL Queries", "Data Filtering", "Aggregations", "Joins and Subqueries", "Window Functions"],
      credentialLink: "https://www.mygreatlearning.com/certificate/LBTMBKPG",
      certificateImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      icon: "fas fa-database"
    });

    this.createCertification({
      name: "MongoDB Modelling",
      issuedBy: "MongoDB University",
      date: "2023",
      description: "A specialized course on designing efficient, scalable document data models for MongoDB that follow best practices for performance and functionality.",
      skillsAcquired: ["Document Schema Design", "Embedding vs. Referencing", "Index Optimization", "Data Access Patterns", "Schema Versioning"],
      credentialLink: "https://university.mongodb.com/course_completion/MDB65syw16dj5",
      certificateImage: "https://images.unsplash.com/photo-1603126957599-74a804ac6e53?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      icon: "fas fa-database"
    });

    this.createCertification({
      name: "Microsoft Excel",
      issuedBy: "Microsoft",
      date: "2023",
      description: "Certification demonstrating proficiency in using Microsoft Excel for data analysis, visualization, and business intelligence applications.",
      skillsAcquired: ["Advanced Formulas", "Pivot Tables", "Data Visualization", "Power Query", "Macros and VBA"],
      credentialLink: "https://coursera.org/verify/W9WGG9TDP92U",
      certificateImage: "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      icon: "fas fa-file-excel"
    });

    // Add initial internships
    this.createInternship({
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
    });

    this.createInternship({
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
    });

    this.createInternship({
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
    });

    this.createInternship({
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
    });

    this.createInternship({
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
    });
  }

  // Project methods
  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProjectById(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
    if (category === "All") {
      return Array.from(this.projects.values());
    }
    return Array.from(this.projects.values()).filter(
      project => project.category === category
    );
  }

  async getFeaturedProject(): Promise<Project | undefined> {
    return Array.from(this.projects.values()).find(project => project.featured);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const id = this.projectId++;
    const newProject: Project = {
      id,
      title: project.title,
      description: project.description,
      category: project.category,
      thumbnail: project.thumbnail,
      techStack: Array.isArray(project.techStack) ? project.techStack.map(String) : [], // techStack is string[]
      featured: Boolean(project.featured),
      githubLink: project.githubLink ?? null,
      demoLink: project.demoLink ?? null,
      detailedDescription: project.detailedDescription ?? null,
      skillsLearned: Array.isArray(project.skillsLearned) ? project.skillsLearned.map(String) : null, // skillsLearned is string[] | null
      challengesFaced: project.challengesFaced ?? null,
      solution: project.solution ?? null,
      gallery: Array.isArray(project.gallery) ? project.gallery.map(String) : null // gallery is string[] | null
    };
    this.projects.set(id, newProject);
    return newProject;
  }

  async updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined> {
    const existingProject = this.projects.get(id);
    if (!existingProject) return undefined;

    const updatedProject: Project = {
      id: existingProject.id,
      title: project.title !== undefined ? project.title : existingProject.title,
      description: project.description !== undefined ? project.description : existingProject.description,
      category: project.category !== undefined ? project.category : existingProject.category,
      thumbnail: project.thumbnail !== undefined ? project.thumbnail : existingProject.thumbnail,
      detailedDescription: project.detailedDescription !== undefined ? project.detailedDescription : existingProject.detailedDescription,
      githubLink: project.githubLink !== undefined ? project.githubLink : existingProject.githubLink,
      demoLink: project.demoLink !== undefined ? project.demoLink : existingProject.demoLink,
      challengesFaced: project.challengesFaced !== undefined ? project.challengesFaced : existingProject.challengesFaced,
      solution: project.solution !== undefined ? project.solution : existingProject.solution,
      skillsLearned: (project.skillsLearned !== undefined && Array.isArray(project.skillsLearned)) ? project.skillsLearned.map(String) : existingProject.skillsLearned, // skillsLearned is string[] | null
      techStack: (project.techStack !== undefined && Array.isArray(project.techStack)) ? project.techStack.map(String) : existingProject.techStack, // techStack is string[]
      gallery: (project.gallery !== undefined && Array.isArray(project.gallery)) ? project.gallery.map(String) : existingProject.gallery, // gallery is string[] | null
      featured: project.featured !== undefined ? Boolean(project.featured) : existingProject.featured
    };
    this.projects.set(id, updatedProject);
    return updatedProject;
  }

  async deleteProject(id: number): Promise<boolean> {
    return this.projects.delete(id);
  }

  // Certification methods
  async getCertifications(): Promise<Certification[]> {
    return Array.from(this.certifications.values());
  }

  async getCertificationById(id: number): Promise<Certification | undefined> {
    return this.certifications.get(id);
  }

  async createCertification(certification: InsertCertification): Promise<Certification> {
    const id = this.certificationId++;
    const newCertification: Certification = {
      id,
      name: certification.name,
      issuedBy: certification.issuedBy,
      date: certification.date,
      description: certification.description ?? null,
      skillsAcquired: Array.isArray(certification.skillsAcquired) ? certification.skillsAcquired.map(String) : null, // skillsAcquired is string[] | null
      credentialLink: certification.credentialLink ?? null,
      certificateImage: certification.certificateImage ?? null,
      icon: certification.icon ?? 'fas fa-certificate'
    };
    this.certifications.set(id, newCertification);
    return newCertification;
  }

  async updateCertification(id: number, certification: Partial<InsertCertification>): Promise<Certification | undefined> {
    const existingCertification = this.certifications.get(id);
    if (!existingCertification) return undefined;

    const updatedCertification: Certification = {
      id: existingCertification.id,
      name: certification.name !== undefined ? certification.name : existingCertification.name,
      issuedBy: certification.issuedBy !== undefined ? certification.issuedBy : existingCertification.issuedBy,
      date: certification.date !== undefined ? certification.date : existingCertification.date,
      skillsAcquired: (certification.skillsAcquired !== undefined && Array.isArray(certification.skillsAcquired)) ? certification.skillsAcquired.map(String) : existingCertification.skillsAcquired, // skillsAcquired is string[] | null
      description: certification.description !== undefined ? certification.description : existingCertification.description,
      credentialLink: certification.credentialLink !== undefined ? certification.credentialLink : existingCertification.credentialLink,
      certificateImage: certification.certificateImage !== undefined ? certification.certificateImage : existingCertification.certificateImage,
      icon: certification.icon !== undefined ? certification.icon : existingCertification.icon
    };
    this.certifications.set(id, updatedCertification);
    return updatedCertification;
  }

  async deleteCertification(id: number): Promise<boolean> {
    return this.certifications.delete(id);
  }

  // Internship methods
  async getInternships(): Promise<Internship[]> {
    return Array.from(this.internships.values());
  }

  async getInternshipById(id: number): Promise<Internship | undefined> {
    return this.internships.get(id);
  }

  async createInternship(internship: InsertInternship): Promise<Internship> {
    const id = this.internshipId++;
    const newInternship: Internship = {
      id,
      role: internship.role,
      company: internship.company,
      duration: internship.duration,
      description: Array.isArray(internship.description) ? internship.description.map(String) : [], // description is string[]
      responsibilities: Array.isArray(internship.responsibilities) ? internship.responsibilities.map(String) : null, // responsibilities is string[] | null
      achievements: Array.isArray(internship.achievements) ? internship.achievements.map(String) : null, // achievements is string[] | null
      skillsGained: Array.isArray(internship.skillsGained) ? internship.skillsGained.map(String) : null, // skillsGained is string[] | null
      companyLogo: internship.companyLogo ?? null
    };
    this.internships.set(id, newInternship);
    return newInternship;
  }

  async updateInternship(id: number, internship: Partial<InsertInternship>): Promise<Internship | undefined> {
    const existingInternship = this.internships.get(id);
    if (!existingInternship) return undefined;

    // Create a copy of the existing internship
    const updatedInternship: Internship = {
      id: existingInternship.id,
      role: internship.role !== undefined ? internship.role : existingInternship.role,
      company: internship.company !== undefined ? internship.company : existingInternship.company,
      duration: internship.duration !== undefined ? internship.duration : existingInternship.duration,
      description: (internship.description !== undefined && Array.isArray(internship.description)) ? internship.description.map(String) : existingInternship.description, // description is string[]
      responsibilities: (internship.responsibilities !== undefined && Array.isArray(internship.responsibilities)) ? internship.responsibilities.map(String) : existingInternship.responsibilities, // responsibilities is string[] | null
      achievements: (internship.achievements !== undefined && Array.isArray(internship.achievements)) ? internship.achievements.map(String) : existingInternship.achievements, // achievements is string[] | null
      skillsGained: (internship.skillsGained !== undefined && Array.isArray(internship.skillsGained)) ? internship.skillsGained.map(String) : existingInternship.skillsGained, // skillsGained is string[] | null
      companyLogo: internship.companyLogo !== undefined ? internship.companyLogo : existingInternship.companyLogo
    };
    this.internships.set(id, updatedInternship);
    return updatedInternship;
  }

  async deleteInternship(id: number): Promise<boolean> {
    return this.internships.delete(id);
  }
}

export const storage = new MemStorage();
