import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink, Code, Sparkles, GraduationCap } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { ThreeDScene } from './ThreeDScene';
import { GithubIcon, LinkedinIcon } from './Icons';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden">
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/3 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Content & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Status & Academic Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-mono backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>VJTI Mumbai</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">EXTC & Data Science</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-md">
                <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
                <span>CGPA: 8.19/10</span>
              </div>
            </div>

            {/* Candidate Name */}
            <div className="mb-3">
              <span className="text-sm uppercase font-mono tracking-widest text-slate-400">
                Hi, I'm <strong className="text-slate-200 font-semibold">{personalInfo.name}</strong>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Building Intelligent Systems with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 drop-shadow-[0_0_35px_rgba(56,189,248,0.25)]">
                AI & Machine Learning.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
              {personalInfo.subheadline}
            </p>

            {/* Key Skill Pillars */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-400" /> Core Stack:
              </span>
              {personalInfo.keyPillars.map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-slate-200 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Two Prominent CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all duration-300 flex items-center gap-2 group"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href={socialLinks.resumePdf}
                download="PrasadResume.pdf"
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 text-slate-100 font-medium text-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300 flex items-center gap-2 group shadow-sm hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Verification Badges */}
            <div className="flex items-center gap-5 pt-6 border-t border-white/[0.08]">
              <span className="text-xs font-mono text-slate-400">Profiles:</span>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-300 transition-colors group"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 transition-colors" />
                <span className="font-mono">GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-300 transition-colors group"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 transition-colors" />
                <span className="font-mono">LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-300 transition-colors group"
                aria-label="LeetCode Profile"
              >
                <Code className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 transition-colors" />
                <span className="font-mono">LeetCode</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 h-[380px] sm:h-[480px] lg:h-[560px] w-full relative flex items-center justify-center"
          >
            {/* Ambient decorative glowing backplate */}
            <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/5 via-violet-500/5 to-transparent border border-white/[0.05] -z-10 pointer-events-none" />
            
            <div className="w-full h-full relative">
              <ThreeDScene />
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 group-hover:text-cyan-300">
              Explore Background
            </span>
            <div className="w-5 h-9 rounded-full border border-slate-700 group-hover:border-cyan-400/50 flex justify-center p-1 transition-colors">
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-cyan-400"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
