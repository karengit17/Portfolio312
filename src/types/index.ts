// Navigation
export interface NavLink {
  label: string;
  href: string;
}

// Projects
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'archived';
}

// Skills
export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'languages' | 'tools';

export interface Skill {
  name: string;
  level: SkillLevel;
  category: SkillCategory;
}

export interface SkillGroup {
  category: SkillCategory;
  label: string;
  skills: Skill[];
}

// Experience / Education timeline
export interface TimelineItem {
  id: string;
  type: 'work' | 'education';
  title: string;
  organization: string;
  period: string;
  description: string;
  tags?: string[];
}

// Social / Contact links
export interface SocialLink {
  id: string;
  label: string;
  url: string;
  iconName: string;
  color?: string;
}

// Contact form
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type ContactFormStatus = 'idle' | 'loading' | 'success' | 'error';
