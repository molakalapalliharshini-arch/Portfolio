/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Splash } from './components/Splash';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <div className="relative min-h-screen selection:bg-primary/30">
      <AnimatePresence mode="wait">
        {loading ? (
          <Splash key="splash" onComplete={() => setLoading(false)} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <AnimatedBackground />

            {/* Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'py-4 bg-black/50 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'}`}>
              <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-2xl font-display font-bold tracking-tighter text-primary glow-text cursor-pointer"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  HM.
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-sm font-mono text-white/60 hover:text-primary transition-colors uppercase tracking-widest"
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="w-[1px] h-4 bg-white/10" />
                  <div className="flex items-center gap-4">
                    <a href="https://www.linkedin.com/in/harshini-molakalapalli/" target="_blank" rel="noreferrer" className="text-white/40 hover:text-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="mailto:molakalapalliharshini@gmail.com" className="text-white/40 hover:text-primary transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                  className="md:hidden text-white"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X /> : <Menu />}
                </button>
              </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="fixed inset-0 z-30 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
                >
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-2xl font-display font-bold text-white hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="flex items-center gap-6 mt-8">
                    <Linkedin className="w-6 h-6 text-white/40" />
                    <Mail className="w-6 h-6 text-white/40" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Sections */}
            <Hero />
            
            <div id="experience">
              <Experience />
            </div>

            <div id="achievements">
              <Achievements />
            </div>

            <div id="skills">
              <Skills />
            </div>

            <div id="education">
              <Education />
            </div>

            {/* Footer */}
            <footer className="py-20 px-6 border-t border-white/5 bg-black/50">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <div className="text-3xl font-display font-bold text-primary mb-2">Harshini Molakalapalli</div>
                  <p className="text-white/40 font-mono text-sm tracking-widest uppercase">Digital Transformation & AI Strategy</p>
                </div>
                <div className="flex items-center gap-8">
                  <a href="#" className="text-white/40 hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest">LinkedIn</a>
                  <a href="#" className="text-white/40 hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest">Email</a>
                  <a href="#" className="text-white/40 hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest">Resume</a>
                </div>
              </div>
              <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-white/20 text-[10px] font-mono uppercase tracking-[0.3em]">
                &copy; 2026 Harshini Molakalapalli. All rights reserved.
              </div>
            </footer>

            {/* Sticky Progress Indicator */}
            <motion.div 
              className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-40"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 }}
            >
              {['Hero', 'Experience', 'Achievements', 'Skills', 'Education'].map((section, i) => (
                <div key={section} className="group flex items-center justify-end gap-3 cursor-pointer">
                  <span className="text-[10px] font-mono text-white/0 group-hover:text-white/40 transition-all uppercase tracking-widest">
                    {section}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary group-hover:scale-150 transition-all" />
                </div>
              ))}
            </motion.div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
