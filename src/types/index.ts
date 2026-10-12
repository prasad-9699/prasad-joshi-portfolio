export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & GenAI' | 'Machine Learning' | 'Optimization & Systems';
  date: string;
  description: string;
  highlights: string[];
  technologies: string[];
  metrics?: ProjectMetric[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
  architectureNotes?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  type: 'completed' | 'upcoming';
  location: string;
  technologies: string[];
  description: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    focus?: string;
  }[];
}

export interface Education {
  institution: string;
  degree: string;
  specialization: string;
  period: string;
  cgpa: string;
  notes?: string[];
}

export interface Leadership {
  title: string;
  role: string;
  organization: string;
  description: string;
}

export interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
  leetcode: string;
  resumePdf: string;
}

export interface ThreeDConfig {
  /**
   * Set this to a valid URL or path (e.g., '/models/core.glb') to load a custom GLB/GLTF model.
   * If left as empty string or if loading fails, the system automatically uses the
   * sophisticated procedural 3D Quantum AI Core!
   */
  customModelUrl: string;
  enableMouseInteraction: boolean;
  rotationSpeed: number;
  bloomEffect: boolean;
}
