export const projects = [
  {
    id: 1,
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
  },
  {
    id: 2,
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
  },
  {
    id: 3,
    title: "Resume Parser",
    description: "Flask application for parsing resumes into Excel worksheets using NLP techniques with Spacy and Torch. This tool extracts key information from resumes and organizes it into structured formats for easier review and comparison.",
    detailedDescription: "The Resume Parser is an intelligent document processing solution that automates the extraction of relevant information from resumes in various formats (PDF, DOCX, TXT). Using advanced NLP techniques, it identifies and categorizes key details such as contact information, education, work experience, skills, and certifications into a structured Excel format for easy comparison and analysis.",
    skillsLearned: ["Named Entity Recognition", "Document Processing", "Information Extraction", "Data Structuring"],
    challengesFaced: "The main challenge was handling the wide variety of resume formats and structures while maintaining high accuracy in information extraction.",
    solution: "Developed a custom NER model trained on resume data and implemented a multi-stage pipeline that first identifies document sections before extracting specific entities within each section. This hierarchical approach significantly improved extraction accuracy.",
    githubLink: "#",
    demoLink: "#",
    techStack: ["Python", "Flask", "Spacy", "Torch"],
    category: "Python",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ],
    featured: false
  },
  {
    id: 4,
    title: "CRM Application",
    description: "CRM for Laptop Rentals using Salesforce technologies. This application streamlines the process of managing laptop rentals, tracking inventory, processing customer requests, and generating reports using Salesforce's robust CRM capabilities.",
    detailedDescription: "This Salesforce-based CRM application was developed to manage the entire laptop rental lifecycle for corporate clients. It features inventory management with real-time availability tracking, automated rental agreements, maintenance scheduling, client communication tools, billing integration, and comprehensive reporting dashboards.",
    skillsLearned: ["Salesforce Development", "Apex Programming", "Lightning Web Components", "Business Process Automation"],
    challengesFaced: "Implementing a complex rental workflow with multiple approval stages, inventory status changes, and automated notifications while maintaining data integrity was the primary challenge.",
    solution: "Designed a custom object model with robust validation rules and created process builders and flows to handle the different stages of the rental lifecycle. Leveraged Salesforce's platform events for real-time inventory updates and notifications.",
    githubLink: "#",
    demoLink: "#",
    techStack: ["Salesforce", "Apex", "Lightning Web Components"],
    category: "Salesforce",
    thumbnail: "https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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