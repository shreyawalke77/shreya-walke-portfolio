export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Web Development' | 'AI/ML' | 'Database' | 'Hackathon';
  featured: boolean;
  status: 'Completed' | 'In Progress' | 'Prototype' | 'Deployed';
  shortDescription: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  myContribution: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  hackathonNote?: string;
  badge?: string;
  image?: string;
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
    tags?: string[];
  }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  status: 'Completed' | 'Ongoing' | 'Upcoming';
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  certificateUrl?: string;
}

export interface HackathonAchievement {
  title: string;
  event: string;
  year: string;
  team: string;
  ranks: string[];
  highlights: string[];
  impact: string;
  verified: boolean;
}

export interface LeadershipRole {
  role: string;
  organization: string;
  period?: string;
  description: string;
  category: 'Governance' | 'Ambassador' | 'Community' | 'Extracurricular';
  badge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  status: string;
  scorePlaceholder: string;
  description: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  imagePlaceholder?: string;
  skillsLearned: string[];
  verified: boolean;
}
