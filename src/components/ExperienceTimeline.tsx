import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle, Clock } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-4"
          >
            <span>02 / WORK EXPERIENCE</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Engineering Timeline & Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-slate-400 mt-3 max-w-xl mx-auto"
          >
            Hands-on enterprise AI development and verified industry roles with clear separation between completed impact and upcoming commitments.
          </motion.p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative">
          {/* Vertical Center/Left Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500/60 via-violet-500/40 to-slate-800 -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500/60 via-violet-500/40 to-slate-800 sm:hidden" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isUpcoming = exp.type === 'upcoming';

              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Central Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#07090E] border-2 flex items-center justify-center z-20 shadow-lg mt-1 sm:mt-6 ${
                    isUpcoming
                      ? 'border-violet-500 text-violet-400 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                      : 'border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                  }">
                    {isUpcoming ? (
                      <Clock className="w-3.5 h-3.5" />
                    ) : (
                      <CheckCircle className="w-3.5 h-3.5" />
                    )}
                  </div>

                  {/* Empty Spacer on other half for desktop alignment */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div
                    className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                      isEven ? 'sm:pr-10' : 'sm:pl-10'
                    }`}
                  >
                    <div
                      className={`glass-card rounded-2xl p-6 sm:p-8 transition-all duration-300 border ${
                        isUpcoming
                          ? 'border-violet-500/30 hover:border-violet-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]'
                          : 'border-cyan-500/20 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]'
                      }`}
                    >
                      {/* Top Meta Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span
                          className={`text-xs font-mono font-medium px-2.5 py-1 rounded-full border ${
                            isUpcoming
                              ? 'bg-violet-950/50 text-violet-300 border-violet-500/30'
                              : 'bg-cyan-950/50 text-cyan-300 border-cyan-500/30'
                          }`}
                        >
                          {isUpcoming ? 'Upcoming Internship' : 'Completed Internship'}
                        </span>

                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-slate-300 font-medium mb-4">
                        <span className="text-cyan-300 font-semibold">{exp.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Responsibilities / Facts */}
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                        {exp.description.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <span
                              className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                                isUpcoming ? 'bg-violet-400' : 'bg-cyan-400'
                              }`}
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies Employed */}
                      <div className="pt-4 border-t border-white/[0.08]">
                        <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                          Technologies & Core Frameworks:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] text-slate-200 border border-white/10 hover:border-cyan-500/30 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceTimeline;
