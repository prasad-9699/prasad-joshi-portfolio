import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  BrainCircuit,
  Cpu,
  Database,
  Terminal,
  Layers,
  Sparkles
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2: Code2,
  BrainCircuit: BrainCircuit,
  Cpu: Cpu,
  Database: Database,
  Terminal: Terminal,
};

export const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredCategories =
    activeFilter === 'All'
      ? skillCategories
      : skillCategories.filter((cat) => cat.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-4"
          >
            <span>04 / TECHNICAL ARSENAL</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Categorized Technical Competencies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-slate-400 mt-3 max-w-xl mx-auto"
          >
            Structured domains across statistical modeling, generative AI pipelines, database persistence, and systems development.
          </motion.p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {['All', 'Programming', 'Machine Learning', 'AI', 'Databases', 'Tools'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  activeFilter === tab
                    ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                    : 'bg-white/[0.03] border border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {tab === 'All' ? 'All Domains' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, index) => {
            const Icon = categoryIcons[cat.iconName] || Layers;

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/[0.08]"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/10 to-violet-500/10 border border-white/10 flex items-center justify-center text-cyan-400 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {cat.category}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-mono">
                        {cat.skills.length} competencies
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/pill relative px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-cyan-400/30 transition-all duration-200 cursor-default"
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-cyan-400/60 group-hover/pill:bg-cyan-400 transition-colors" />
                          <span className="text-xs font-mono text-slate-200 group-hover/pill:text-cyan-200 transition-colors">
                            {skill.name}
                          </span>
                        </div>

                        {/* Optional Focus tooltip on hover */}
                        {skill.focus && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/pill:block z-30 pointer-events-none whitespace-nowrap">
                            <div className="px-2.5 py-1 rounded-lg bg-slate-900 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 shadow-xl">
                              {skill.focus}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-cyan-400/60" /> Production tested
                  </span>
                  <span className="text-slate-400">Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
