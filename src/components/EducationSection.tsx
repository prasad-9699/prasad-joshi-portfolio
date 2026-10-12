import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData, leadershipData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

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
            <span>05 / ACADEMIC FOUNDATION</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Education & Engineering Leadership
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-slate-400 mt-3 max-w-xl mx-auto"
          >
            Rigorous undergraduate engineering studies at premier institute VJTI Mumbai combined with hackathon team leadership.
          </motion.p>
        </div>

        {/* Education & Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 border border-white/[0.08]"
          >
            <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {educationData.institution}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>Mumbai, Maharashtra, India</span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1 justify-end">
                  <Calendar className="w-3 h-3" />
                  <span>{educationData.period}</span>
                </div>
                <div className="text-xs font-mono text-emerald-400 mt-1">Undergraduate</div>
              </div>
            </div>

            {/* Degree & Specialization */}
            <div className="mb-6">
              <div className="text-lg font-semibold text-white">
                {educationData.degree}
              </div>
              <div className="text-sm text-cyan-300 font-mono mt-0.5">
                {educationData.specialization}
              </div>
              <div className="text-xs text-violet-300 font-mono mt-1">
                Minor Specialization: Data Science & Machine Learning
              </div>
            </div>

            {/* Metric Callouts */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-cyan-500/20">
                <div className="text-xs font-mono text-slate-400">Cumulative GPA</div>
                <div className="text-2xl font-black text-cyan-300 mt-1">{educationData.cgpa}</div>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5">Scale: 10.0</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-violet-500/20">
                <div className="text-xs font-mono text-slate-400">MHT-CET Entrance</div>
                <div className="text-2xl font-black text-violet-300 mt-1">99.32 %ile</div>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5">State Rank Bracket</div>
              </div>
            </div>

            {/* Core Coursework Details */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-cyan-400" /> Foundational Computer Science Coursework
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Database Management Systems</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Object-Oriented Programming</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Operating Systems Concepts</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Data Structures & Algorithms</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Leadership & Extracurriculars */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Leadership & Responsibility</span>
            </div>

            {leadershipData.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-card rounded-2xl p-6 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {item.title}
                    </h4>
                    <span className="text-xs font-mono text-cyan-300">
                      {item.organization}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}

            {/* Quick Summary Pill Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-tr from-cyan-950/30 via-slate-900 to-violet-950/30 border border-white/[0.08]">
              <div className="text-xs font-mono text-slate-300 font-semibold mb-1">
                Recruiter Takeaway:
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prasad combines top-tier academic rigor (8.19 CGPA, 99.32%ile entrance) with demonstrable initiative leading engineering teams on competitive AI problems.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EducationSection;
