import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ExternalLink, Terminal } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Determine active section
      const sections = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090E]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
            aria-label="Prasad Joshi - Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-sky-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/40 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]">
              <Terminal className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                VJTI MUMBAI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.06]" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-cyan-300 bg-white/[0.08] shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume & Contact Link */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={socialLinks.resumePdf}
              download="PrasadResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 transition-all duration-200 shadow-sm group"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all duration-300"
            >
              <span>Connect</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#07090E]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-white/[0.05] transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href={socialLinks.resumePdf}
                download="PrasadResume.pdf"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-sm font-medium text-slate-200 hover:text-cyan-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Get In Touch</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
