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
    // Add initial internships
  this.createInternship({
  role: "Data Analyst Intern",
  company: "Indo Euro Synchronization",
  duration: "Feb 2024 - May 2024",
  description: [
    "Completed a 3-month internship as a Data Analyst",
    "Worked on data analysis using Excel, SQL, and Power BI",
    "Focused on reporting automation and insights generation"
  ],
  responsibilities: [
    "Analyzed datasets to identify patterns and trends",
    "Created automated reports using Excel Macros",
    "Developed interactive dashboards in Power BI",
    "Wrote SQL queries to extract and transform data",
    "Presented insights to stakeholders"
  ],
  achievements: [
    "Improved reporting efficiency through automation",
    "Delivered actionable insights for business decision-making"
  ],
  skillsGained: [
    "Advanced Excel",
    "Power BI",
    "SQL",
    "Data Visualization",
    "Data Analysis"
  ],
  companyLogo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
});

this.createInternship({
  role: "Salesforce Developer Intern",
  company: "SmartInternz × Salesforce",
  duration: "May 2024 - Jun 2024",
  description: [
    "Completed an 8-week Salesforce Developer virtual internship",
    "Worked on Salesforce fundamentals, automation, and Apex",
    "Built a CRM application as a capstone project"
  ],
  responsibilities: [
    "Developed custom objects, fields, and validation rules",
    "Created automation using flows and process builders",
    "Worked with Apex and Lightning Web Components",
    "Collaborated on CRM design and deployment"
  ],
  achievements: [
    "Successfully deployed a CRM application",
    "Completed multiple Salesforce Super Badges"
  ],
  skillsGained: [
    "Salesforce Development",
    "Apex Programming",
    "Lightning Web Components",
    "SOQL",
    "Process Automation"
  ],
  companyLogo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
});

this.createInternship({
  role: "Data Science Intern",
  company: "CODTECH IT SOLUTIONS",
  duration: "Apr 2025 - Jul 2025",
  description: [
    "Completed a 3-month internship in Data Science",
    "Worked on applied data science and analytics tasks",
    "Participated actively in problem-solving and analysis"
  ],
  responsibilities: [
    "Performed data preprocessing and exploratory analysis",
    "Applied Python-based data science techniques",
    "Worked on structured datasets and analytical tasks"
  ],
  achievements: [
    "Successfully completed internship with positive evaluation"
  ],
  skillsGained: [
    "Data Science",
    "Python",
    "Data Analysis",
    "Problem Solving"
  ],
  companyLogo: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
});

this.createInternship({
  role: "Data Science Intern",
  company: "OASIS INFOBYTE (AICTE OIB-SIP)",
  duration: "Mar 2025 - Apr 2025",
  description: [
    "Completed a 1-month AICTE OIB-SIP internship in Data Science",
    "Focused on practical exposure to data science fundamentals"
  ],
  responsibilities: [
    "Worked on data analysis assignments",
    "Applied foundational data science concepts",
    "Completed internship modules and evaluations"
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
