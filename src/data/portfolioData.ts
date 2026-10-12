import type { Project, Experience, SkillCategory, Education, Leadership, SocialLinks, ThreeDConfig } from '../types';

export const personalInfo = {
  name: "Prasad Joshi",
  fullName: "Prasad Sandip Joshi",
  headline: "Building Intelligent Systems with AI & Machine Learning.",
  subheadline: "Engineering student at VJTI Mumbai passionate about building practical AI applications, machine learning systems, and intelligent software that solve real-world problems.",
  location: "Mumbai, Maharashtra, India",
  college: "Veermata Jijabai Technological Institute (VJTI), Mumbai",
  degree: "B.Tech in Electronics & Telecommunication Engineering",
  minor: "Minor in Data Science & Machine Learning",
  cgpa: "8.19 / 10",
  keyPillars: ["Python", "Machine Learning", "Generative AI", "FastAPI"],
  aboutBio: [
    "I am an Electronics and Telecommunication Engineering student at VJTI Mumbai pursuing a specialized minor in Data Science and Machine Learning. My engineering mindset centers on bridging mathematical modeling with scalable backend systems.",
    "My primary focus lies in Applied AI, Retrieval-Augmented Generation (RAG) architectures, predictive modeling, and data-driven systems. I design architectures combining foundation models with vector databases (Qdrant, FAISS), high-throughput APIs (FastAPI), and actionable analytics dashboards.",
    "From optimizing enterprise knowledge retrieval at Pidilite Industries to engineering genetic algorithm solvers for complex scheduling and imbalanced fraud detection pipelines, I prioritize empirical evaluation, clean architecture, and business value."
  ]
};

export const socialLinks: SocialLinks = {
  email: "prasadjoshi395@gmail.com",
  github: "https://github.com/prasad-9699",
  linkedin: "https://www.linkedin.com/in/prasad-joshi-634784242/",
  leetcode: "https://leetcode.com/u/PrasadsJoshi_9699/",
  resumePdf: "/Prasad_Resume.pdf"
};

/**
 * 3D SCENE CONFIGURATION
 * To load your own deployed or local 3D model:
 * 1. Put your .glb / .gltf file inside the `public/` directory (e.g. `public/models/ai-core.glb`)
 *    OR provide an HTTPS URL with CORS enabled.
 * 2. Set `customModelUrl` below to '/models/ai-core.glb' or your URL.
 * 3. If left empty, the site renders an optimized procedural 3D Quantum AI Core with Three.js.
 */
export const threeDConfig: ThreeDConfig = {
  customModelUrl: "", // Leave empty for high-performance procedural 3D core, or specify a valid .glb/.gltf URL
  enableMouseInteraction: true,
  rotationSpeed: 0.8,
  bloomEffect: true
};

export const experiences: Experience[] = [
  {
    company: "Pidilite Industries Limited",
    role: "Software Development Intern",
    period: "June 2026 – July 2026",
    type: "completed",
    location: "Mumbai, India",
    technologies: ["Python", "FastAPI", "LangChain", "Llama 3", "Qdrant", "PostgreSQL"],
    description: [
      "Contributed to PilTantra+, an enterprise AI chatbot enabling employees to retrieve accurate information from HR policies, SOPs, SharePoint resources, and internal knowledge bases using natural language.",
      "Developed and optimized a Retrieval-Augmented Generation (RAG) pipeline implementing document ingestion, intelligent chunking, vector indexing in Qdrant, semantic retrieval, and context-aware LLM response generation across enterprise documents and SOPs.",
      "Improved chatbot accuracy through retrieval optimization, metadata filtering, and prompt engineering, reducing hallucinations and improving answer relevance.",
      "Built and integrated FastAPI endpoints for document processing, retrieval, and chat interactions while collaborating cross-functionally to deliver a secure and scalable enterprise AI solution."
    ]
  },
  {
    company: "DSP Asset Managers",
    role: "AI Intern",
    period: "January 2027 – June 2027",
    type: "upcoming",
    location: "Mumbai, India",
    technologies: ["Artificial Intelligence", "Quantitative Finance", "Machine Learning", "Python"],
    description: [
      "Upcoming 6-month AI internship at DSP Asset Managers, focusing on quantitative intelligence, machine learning pipelines, and financial analytics.",
      "Role starting in January 2027 as part of academic internship curriculum."
    ]
  }
];

export const projects: Project[] = [
  {
    id: "ai-financial-analyst",
    title: "AI Financial Analyst",
    subtitle: "Agentic RAG system for multi-modal financial statements and corporate filings",
    category: "AI & GenAI",
    date: "June 2026",
    featured: true,
    description:
      "An autonomous agentic AI system that analyzes financial CSV data and PDF annual reports through natural language queries, eliminating manual formula writing or coding.",
    highlights: [
      "Engineered a multi-tool LangChain ReAct architecture with autonomous tool selection across four components: Pandas code execution agent, Plotly visualizer, FAISS-based RAG pipeline, and direct LLM fallback.",
      "Built an end-to-end RAG pipeline using PyPDFLoader, HuggingFace embeddings, OCR support for scanned documents, and FAISS for PDF question answering.",
      "Integrated Supabase Authentication with persistent chat history in PostgreSQL, enabling secure multi-user financial analysis.",
      "Deployed an interactive Streamlit web application with conversation memory and dynamic Plotly chart generation."
    ],
    technologies: ["Python", "LangChain", "Groq", "FAISS", "Pandas", "RAG", "Streamlit", "Supabase", "PostgreSQL"],
    metrics: [
      { label: "Architecture", value: "ReAct Agent" },
      { label: "Vector Store", value: "FAISS" },
      { label: "LLM Engine", value: "Groq LLaMA-3" }
    ],
    githubUrl: "https://github.com/prasad-9699/ai-financial-analyst-agent",
    liveDemoUrl: "https://ai-financial-analyst-agent.streamlit.app/",
    architectureNotes: "Implements tool-augmented reasoning with dynamic routing between deterministic dataframe execution and semantic vector search."
  },
  {
    id: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection System",
    subtitle: "High-precision imbalanced classification pipeline with SHAP explainability",
    category: "Machine Learning",
    date: "April 2026",
    featured: true,
    description:
      "An end-to-end machine learning pipeline engineered to detect fraudulent transactions in highly skewed datasets using adaptive sampling, hyperparameter optimization, and explainable AI.",
    highlights: [
      "Addressed severe class imbalance using SMOTE and PCA feature reduction coupled with ensemble learning (Random Forest, XGBoost).",
      "Optimized XGBoost via Optuna Bayesian hyperparameter search and custom decision threshold tuning to balance precision and recall.",
      "Engineered real-time REST inference endpoints with FastAPI and created a Streamlit interactive dashboard with SHAP summary and waterfall plots for model interpretability.",
      "Containerized the solution with Docker and established automated CI/CD testing via GitHub Actions."
    ],
    technologies: ["Python", "XGBoost", "Random Forest", "SMOTE", "PCA", "Optuna", "FastAPI", "Streamlit", "SHAP", "Docker"],
    metrics: [
      { label: "Accuracy", value: "99.96%" },
      { label: "Precision", value: "89.32%" },
      { label: "Recall", value: "82.65%" },
      { label: "F1-Score", value: "85.86%" },
      { label: "ROC-AUC", value: "98.26%" }
    ],
    githubUrl: "https://github.com/prasad-9699/Credit-Card-Fraud-Detection-updated",
    liveDemoUrl: "https://credit-card-fraud-detection-updated.streamlit.app/",
    architectureNotes: "Evaluated across precision-recall trade-offs to protect customer accounts while minimizing costly false positives."
  },
  {
    id: "nep-timetable-system",
    title: "NEP Timetable Management System",
    subtitle: "Heuristic genetic algorithm solver for multi-constraint academic scheduling",
    category: "Optimization & Systems",
    date: "October 2025",
    featured: true,
    description:
      "An evolutionary optimization platform designed to generate conflict-free academic timetables adhering to National Education Policy (NEP) multi-disciplinary curriculum requirements.",
    highlights: [
      "Designed and implemented custom Genetic Algorithm operators (tournament selection, uniform crossover, adaptive mutation, and penalty-weighted fitness function).",
      "Successfully optimized complex combinatorial constraints: faculty availability, classroom capacities, batch overlaps, and laboratory allocations.",
      "Architected a full-stack portal with role-based access control (RBAC) for administrators, professors, and students using Node.js, JavaScript, and MySQL.",
      "Shortlisted among 100+ teams at the institute level for the Smart India Hackathon (SIH) 2025."
    ],
    technologies: ["Python", "Genetic Algorithms", "Node.js", "JavaScript", "MySQL", "REST APIs"],
    metrics: [
      { label: "Algorithm", value: "Genetic Algorithm" },
      { label: "Constraint Handling", value: "Multi-Objective" },
      { label: "Recognition", value: "SIH 2025 Shortlisted" }
    ],
    githubUrl: "https://github.com/prasad-9699/NEP_TIMETABLE",
    architectureNotes: "Features penalty-score minimization ensuring zero hard-constraint violations and optimized soft-constraint preferences."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core languages for algorithmic problem-solving and systems development",
    iconName: "Code2",
    skills: [
      { name: "Python", focus: "Data Science, Async Backend, AI" },
      { name: "C++", focus: "Data Structures & OOP" },
      { name: "SQL", focus: "Complex Queries, Optimization" },
      { name: "JavaScript", focus: "Full-stack Web Integration" }
    ]
  },
  {
    category: "Machine Learning & Data Science",
    description: "Statistical modeling, feature engineering, and model evaluation",
    iconName: "BrainCircuit",
    skills: [
      { name: "Scikit-learn" },
      { name: "XGBoost" },
      { name: "Random Forest" },
      { name: "Optuna" },
      { name: "SHAP (Explainability)" },
      { name: "SMOTE (Imbalanced Data)" },
      { name: "PCA & Dimensionality Reduction" },
      { name: "NumPy & Pandas" },
      { name: "Decision Trees" },
      { name: "Linear & Logistic Regression" }
    ]
  },
  {
    category: "AI, GenAI & Backend Systems",
    description: "LLM orchestration, vector databases, and high-performance microservices",
    iconName: "Cpu",
    skills: [
      { name: "LangChain" },
      { name: "Retrieval-Augmented Generation (RAG)" },
      { name: "LLM Applications (Llama 3)" },
      { name: "FastAPI" },
      { name: "Streamlit" },
      { name: "FAISS" },
      { name: "HuggingFace Embeddings" }
    ]
  },
  {
    category: "Databases & Vector Stores",
    description: "Relational, document, and high-dimensional vector storage solutions",
    iconName: "Database",
    skills: [
      { name: "Qdrant (Vector DB)" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "SQLite" },
      { name: "NoSQL Concepts" }
    ]
  },
  {
    category: "Developer Tools & Infrastructure",
    description: "Version control, containerization, and modern developer environments",
    iconName: "Terminal",
    skills: [
      { name: "Docker" },
      { name: "Git & GitHub" },
      { name: "GitHub Actions (CI/CD)" },
      { name: "VS Code" },
      { name: "OCI Cloud Fundamentals" }
    ]
  }
];

export const educationData: Education = {
  institution: "Veermata Jijabai Technological Institute (VJTI), Mumbai",
  degree: "Bachelor of Technology (B.Tech)",
  specialization: "Electronics and Telecommunication Engineering",
  period: "August 2023 – May 2027",
  cgpa: "8.19 / 10",
  notes: [
    "Minor Specialization in Data Science and Machine Learning",
    "MHT-CET: 99.32 Percentile",
    "Core Coursework: Database Management Systems, Object-Oriented Programming, Operating Systems, Data Structures & Algorithms"
  ]
};

export const leadershipData: Leadership[] = [
  {
    title: "Team Lead — Smart India Hackathon (SIH) 2025",
    role: "Team Lead",
    organization: "Ministry of Education & VJTI",
    description:
      "Led a 4-person engineering team developing an AI-driven NEP Timetable Management System using Genetic Algorithms. Selected and shortlisted among 100+ competing teams at the institute level."
  },
  {
    title: "Sports Event Volunteer — Enthusia",
    role: "Volunteer",
    organization: "VJTI Mumbai",
    description:
      "Contributed to logistics, participant scheduling, and event coordination during Enthusia, VJTI's annual national sports festival."
  }
];
