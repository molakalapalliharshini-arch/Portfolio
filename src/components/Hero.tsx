import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const resumeData = {
  basics: {
    name: "Harshini Molakalapalli",
    title: "Digital Transformation & AI Strategy Specialist",
    summary: "Detail-oriented and analytical graduate with experience in consulting-style projects, research, process documentation, BPMN-based workflow analysis, and digital transformation.",
    location: "Hyderabad, Telangana, India / Coventry, UK",
    email: "molakalapalliharshini@gmail.com",
    phone: "+91 6304149322",
  }
};

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 pt-20 overflow-hidden">
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-2 mb-6 text-primary font-mono text-sm tracking-widest uppercase"
        >
          <span className="w-8 h-[1px] bg-primary" />
          Available for Opportunities
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight mb-6 tracking-tighter">
          <span className="block">I'm {resumeData.basics.name.split(' ')[0]}</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            {resumeData.basics.name.split(' ')[1]}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl leading-relaxed">
          {resumeData.basics.summary}
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <button 
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-primary text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Experience <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="group px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all flex items-center gap-2">
            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            Download Resume
          </button>
        </div>

        <div className="flex flex-wrap gap-6 text-white/40 text-sm font-mono">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            {resumeData.basics.location}
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            {resumeData.basics.email}
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            {resumeData.basics.phone}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};
