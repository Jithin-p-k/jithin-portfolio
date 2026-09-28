import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoSection from './components/BentoSection';
import ProjectsSection from './components/ProjectsSection';
import TechStackSection from './components/TechStackSection';
import ExperienceSection from './components/ExperienceSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CommandMenu from './components/CommandMenu';

import InteractiveBackground from './components/InteractiveBackground';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [commandMenuOpen, setCommandMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#090a0f] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Interactive Movable Particle Background */}
      <InteractiveBackground />

      {/* Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenCommandMenu={() => setCommandMenuOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <BentoSection />
        <ProjectsSection />
        <TechStackSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <CommandMenu
        isOpen={commandMenuOpen}
        onClose={() => setCommandMenuOpen(false)}
        onOpenResume={() => setResumeOpen(true)}
      />
    </div>
  );
}
