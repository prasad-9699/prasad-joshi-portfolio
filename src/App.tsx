import React from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { FeaturedProjects } from './components/FeaturedProjects';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col relative selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Fixed Frosted Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1 w-full">
        {/* Hero Section with Interactive 3D */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Experience Timeline */}
        <ExperienceTimeline />

        {/* Featured Projects */}
        <FeaturedProjects />

        {/* Skills Arsenal */}
        <SkillsSection />

        {/* Education & Leadership */}
        <EducationSection />

        {/* Contact & Inquiry Section */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
