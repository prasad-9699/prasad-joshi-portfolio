import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  CheckCircle2,
  TrendingUp,
  ShieldAlert,
  Calendar,
  Layers,
  ChevronRight,
  X,
  Code2,
  BarChart3,
  Sliders,
  Check
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import type { Project } from '../types';
import { GithubIcon } from './Icons';

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-4"
          >
            <span>03 / FEATURED WORK</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Engineered AI & Machine Learning Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-slate-400 mt-3 max-w-2xl mx-auto"
          >
            Production-oriented implementations focusing on agentic reasoning, statistical validation, and algorithmic constraint satisfaction.
          </motion.p>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-6 sm:p-10 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
                  
                  {/* Content Column */}
                  <div className={`lg:col-span-7 flex flex-col justify-between ${isReversed ? 'lg:col-start-6' : ''}`}>
                    <div>
                      {/* Category & Date Pill */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {project.date}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-cyan-300/90 font-mono mb-4">
                        {project.subtitle}
                      </p>

                      {/* Main Description */}
                      <p className="text-sm text-slate-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="space-y-2 mb-6">
                        {project.highlights.slice(0, 3).map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Project Metrics (if any) */}
                      {project.metrics && (
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-6 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                          {project.metrics.map((m) => (
                            <div key={m.label} className="text-center p-2 rounded-xl bg-slate-900/60 border border-white/[0.04]">
                              <div className="text-[10px] font-mono text-slate-400 truncate">{m.label}</div>
                              <div className="text-sm sm:text-base font-bold text-cyan-300 mt-0.5">{m.value}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] text-slate-200 border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons: Only real links */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.08]">
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-medium text-xs border border-white/10 hover:border-cyan-400/30 flex items-center gap-2 transition-all"
                        >
                          <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                          <span>View Code</span>
                        </a>
                      )}

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white font-medium text-xs border border-white/10 flex items-center gap-1.5 transition-all ml-auto"
                      >
                        <span>Case Study</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                    </div>
                  </div>

                  {/* Visual Dashboard Column */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:col-start-1' : ''}`}>
                    <ProjectVisualCard project={project} />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

// Specialized visual cards for each project
function ProjectVisualCard({ project }: { project: Project }) {
  if (project.id === 'ai-financial-analyst') {
    return (
      <div className="w-full rounded-2xl bg-gradient-to-b from-slate-900 to-[#0A0E17] border border-cyan-500/20 p-5 shadow-2xl relative overflow-hidden">
        {/* Top Header bar */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono text-white font-semibold">AI Financial Agent Console</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            ReAct Engine Active
          </span>
        </div>

        {/* User Query Simulation */}
        <div className="p-3 rounded-xl bg-slate-950/70 border border-white/[0.06] mb-3">
          <div className="text-[10px] font-mono text-slate-400 uppercase">Input Query</div>
          <div className="text-xs text-slate-200 mt-1 font-mono">
            "Analyze Q4 Cash Flow & revenue trends from the 10-K filing."
          </div>
        </div>

        {/* Autonomous Routing Pipeline */}
        <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 mb-3 space-y-2">
          <div className="text-[10px] font-mono text-cyan-300 uppercase flex items-center justify-between">
            <span>LangChain Autonomous Tool Execution</span>
            <span className="text-emerald-400 text-[9px]">4/4 Tools Bound</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
            <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center gap-1.5 text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Pandas Agent</span>
            </div>
            <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center gap-1.5 text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span>Plotly Generator</span>
            </div>
            <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center gap-1.5 text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>FAISS Vector RAG</span>
            </div>
            <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center gap-1.5 text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Groq LLaMA-3</span>
            </div>
          </div>
        </div>

        {/* Mini Analytics Visualization */}
        <div className="p-3 rounded-xl bg-slate-950/70 border border-white/[0.06]">
          <div className="flex items-center justify-between text-[11px] font-mono mb-2">
            <span className="text-slate-400">Extracted Metrics</span>
            <span className="text-cyan-400">Supabase Persistent DB</span>
          </div>
          <div className="flex items-end gap-2 h-16 pt-2">
            <div className="flex-1 bg-cyan-500/20 rounded-t h-[45%] flex items-center justify-center text-[9px] font-mono text-cyan-300">Q1</div>
            <div className="flex-1 bg-cyan-500/30 rounded-t h-[60%] flex items-center justify-center text-[9px] font-mono text-cyan-300">Q2</div>
            <div className="flex-1 bg-cyan-500/40 rounded-t h-[75%] flex items-center justify-center text-[9px] font-mono text-cyan-300">Q3</div>
            <div className="flex-1 bg-cyan-400 rounded-t h-[100%] flex items-center justify-center text-[9px] font-mono text-slate-950 font-bold">Q4</div>
          </div>
        </div>
      </div>
    );
  }

  if (project.id === 'credit-card-fraud-detection') {
    return (
      <div className="w-full rounded-2xl bg-gradient-to-b from-slate-900 to-[#0A0E17] border border-violet-500/20 p-5 shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-violet-400" />
            <span className="text-xs font-mono text-white font-semibold">Evaluation & SHAP Diagnostics</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
            Optuna Tuned
          </span>
        </div>

        {/* Authentic Evaluation Matrix */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="p-2.5 rounded-xl bg-slate-950/70 border border-white/5">
            <div className="text-[10px] font-mono text-slate-400">Precision (Fraud)</div>
            <div className="text-lg font-bold text-violet-300 mt-0.5">89.32%</div>
            <div className="text-[9px] text-slate-500">Minimizes false alarms</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-950/70 border border-white/5">
            <div className="text-[10px] font-mono text-slate-400">Recall (Catch Rate)</div>
            <div className="text-lg font-bold text-cyan-300 mt-0.5">82.65%</div>
            <div className="text-[9px] text-slate-500">Catches fraudulent transactions</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-950/70 border border-white/5">
            <div className="text-[10px] font-mono text-slate-400">F1-Score</div>
            <div className="text-lg font-bold text-sky-300 mt-0.5">85.86%</div>
            <div className="text-[9px] text-slate-500">Harmonic mean balance</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-950/70 border border-white/5">
            <div className="text-[10px] font-mono text-slate-400">ROC-AUC Score</div>
            <div className="text-lg font-bold text-emerald-300 mt-0.5">98.26%</div>
            <div className="text-[9px] text-slate-500">Class separation curve</div>
          </div>
        </div>

        {/* SHAP Feature Contribution Representation */}
        <div className="p-3 rounded-xl bg-violet-950/20 border border-violet-500/20">
          <div className="text-[10px] font-mono text-violet-300 uppercase mb-2 flex items-center justify-between">
            <span>SHAP Interpretability Impact</span>
            <span>FastAPI Inference</span>
          </div>
          <div className="space-y-1.5 text-[11px] font-mono">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">V14 (Transaction Pattern)</span>
              <div className="w-28 h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="w-[85%] h-full bg-violet-400" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">V10 (Amount Discrepancy)</span>
              <div className="w-28 h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="w-[70%] h-full bg-cyan-400" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">V4 (Frequency Anomaly)</span>
              <div className="w-28 h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="w-[50%] h-full bg-sky-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Project 3: NEP Timetable Management System
  return (
    <div className="w-full rounded-2xl bg-gradient-to-b from-slate-900 to-[#0A0E17] border border-blue-500/20 p-5 shadow-2xl relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-mono text-white font-semibold">Evolutionary Timetable Solver</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
          SIH 2025 Shortlisted
        </span>
      </div>

      {/* Genetic Solver Status */}
      <div className="p-3 rounded-xl bg-slate-950/70 border border-white/5 mb-3">
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2">
          <span>Optimization Progression</span>
          <span className="text-emerald-400">Zero Hard Conflicts</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300">Fitness Function Score</span>
            <span className="text-cyan-400 font-bold">98.4 / 100</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
            <div className="w-[98.4%] h-full bg-gradient-to-r from-cyan-400 to-blue-500" />
          </div>
        </div>
      </div>

      {/* Constraints Handled */}
      <div className="p-3 rounded-xl bg-blue-950/20 border border-blue-500/20 mb-3 space-y-2">
        <div className="text-[10px] font-mono text-blue-300 uppercase">Combinatorial Constraints Handled</div>
        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
          <div className="p-1.5 rounded bg-black/40 border border-white/5 text-slate-300 flex items-center gap-1.5">
            <Check className="w-3 h-3 text-cyan-400" /> Faculty Availability
          </div>
          <div className="p-1.5 rounded bg-black/40 border border-white/5 text-slate-300 flex items-center gap-1.5">
            <Check className="w-3 h-3 text-cyan-400" /> Room Capacity
          </div>
          <div className="p-1.5 rounded bg-black/40 border border-white/5 text-slate-300 flex items-center gap-1.5">
            <Check className="w-3 h-3 text-cyan-400" /> Batch Overlaps
          </div>
          <div className="p-1.5 rounded bg-black/40 border border-white/5 text-slate-300 flex items-center gap-1.5">
            <Check className="w-3 h-3 text-cyan-400" /> Lab Constraints
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
        <span>Team Lead: 4 Engineers</span>
        <span className="text-cyan-300">MySQL + Node.js RBAC</span>
      </div>
    </div>
  );
}

// Case Study Modal
function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-[#0B0F19] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(56,189,248,0.2)]"
      >
        <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              Technical Case Study
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
            <p className="text-xs font-mono text-slate-400 mt-1">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6 text-sm text-slate-300">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-cyan-400" /> Architectural Overview
            </h4>
            <p className="leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/[0.06]">
              {project.architectureNotes || project.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-violet-400" /> Key Engineering Decisions
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 bg-white/[0.01] p-2.5 rounded-lg border border-white/[0.04]">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.metrics && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-sky-400" /> Reported Evaluation Metrics
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {project.metrics.map((m) => (
                  <div key={m.label} className="p-3 rounded-xl bg-slate-900 border border-white/5">
                    <div className="text-[11px] font-mono text-slate-400">{m.label}</div>
                    <div className="text-base font-bold text-cyan-300 mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-emerald-400" /> Full Stack & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-slate-200 border border-white/10">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
          <div className="flex gap-3">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Live Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs flex items-center gap-1.5 border border-white/10"
              >
                <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-xs font-mono text-slate-400 hover:text-white"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default FeaturedProjects;
