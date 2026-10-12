import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Layers, Cpu, Database, ArrowRight, CheckCircle2 } from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

const engineeringPillars = [
  {
    icon: Brain,
    title: 'Applied AI & RAG Systems',
    description:
      'Designing retrieval-augmented systems with intelligent chunking, vector indexing in Qdrant/FAISS, semantic reranking, and low-latency LLM orchestration.',
    tag: 'LangChain • Qdrant • Llama 3'
  },
  {
    icon: Layers,
    title: 'Predictive Modeling & Evaluation',
    description:
      'Tackling imbalanced datasets with SMOTE, Bayesian optimization via Optuna, and interpretability using SHAP waterfall and summary analytics.',
    tag: 'XGBoost • Optuna • SHAP'
  },
  {
    icon: Cpu,
    title: 'Robust Backend APIs & Delivery',
    description:
      'Engineering high-performance REST APIs using FastAPI, automated CI/CD pipelines via GitHub Actions, and containerized deployments with Docker.',
    tag: 'FastAPI • Docker • CI/CD'
  },
  {
    icon: Database,
    title: 'Relational & Vector Data Stores',
    description:
      'Managing structured and unstructured persistence across PostgreSQL, MySQL, Qdrant vector databases, and real-time analytical queries.',
    tag: 'PostgreSQL • Qdrant • SQL'
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

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
            <span>01 / ABOUT ME</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Engineering Systems at the Intersection of Data and Intelligence
          </motion.h2>
        </div>

        {/* Two-Column About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Left Column: Background & Philosophy Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-2xl p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm">
                  VJTI
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {educationData.institution}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    {educationData.degree} • {educationData.specialization}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.aboutBio.map((paragraph, index) => (
                  <p key={index} className="text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Academic Credential Highlights */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs font-mono text-slate-400">CGPA</div>
                <div className="text-xl font-bold text-cyan-300 mt-0.5">{personalInfo.cgpa}</div>
                <div className="text-[11px] text-slate-500">VJTI Mumbai</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs font-mono text-slate-400">Minor Spec</div>
                <div className="text-base font-semibold text-white mt-1">Data Science & ML</div>
                <div className="text-[11px] text-slate-500">Academic Focus</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] col-span-2 sm:col-span-1">
                <div className="text-xs font-mono text-slate-400">MHT-CET</div>
                <div className="text-xl font-bold text-violet-300 mt-0.5">99.32 %ile</div>
                <div className="text-[11px] text-slate-500">Top Percentile Rank</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive System Architecture Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-card rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" /> System Engineering Approach
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-slate-400">
                  Production-Ready
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                How I architect modern AI applications from raw documents to low-latency user interfaces:
              </p>

              {/* Visual Pipeline Stack */}
              <div className="space-y-3 font-mono text-xs">
                {/* Step 1 */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-md bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-[10px]">1</span>
                    <div>
                      <div className="text-slate-200 font-medium">Ingestion & Chunking</div>
                      <div className="text-[11px] text-slate-400">OCR, PyPDFLoader, Token Splitting</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                </div>

                <div className="flex justify-center -my-1 text-slate-600">↓</div>

                {/* Step 2 */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-violet-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-md bg-violet-500/20 text-violet-300 flex items-center justify-center text-[10px]">2</span>
                    <div>
                      <div className="text-slate-200 font-medium">Vector Indexing & Retrieval</div>
                      <div className="text-[11px] text-slate-400">Qdrant / FAISS + Metadata Filters</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                </div>

                <div className="flex justify-center -my-1 text-slate-600">↓</div>

                {/* Step 3 */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-blue-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-md bg-blue-500/20 text-blue-300 flex items-center justify-center text-[10px]">3</span>
                    <div>
                      <div className="text-slate-200 font-medium">Orchestration & Reasoning</div>
                      <div className="text-[11px] text-slate-400">LangChain ReAct + Llama 3 / Groq</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                </div>

                <div className="flex justify-center -my-1 text-slate-600">↓</div>

                {/* Step 4 */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-md bg-white/10 text-white flex items-center justify-center text-[10px]">4</span>
                    <div>
                      <div className="text-slate-200 font-medium">High-Throughput Delivery</div>
                      <div className="text-[11px] text-slate-400">FastAPI REST Endpoints + Streamlit UI</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Goal</span>
              <span className="text-cyan-300 flex items-center gap-1">
                Zero Hallucinations & High Relevance <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </motion.div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center text-cyan-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-cyan-400/90">
                  {pillar.tag}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
