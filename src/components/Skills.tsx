import React from 'react';
import { motion } from 'framer-motion';
import { Code, Languages, Heart, Cpu } from 'lucide-react';

const skills = {
  it: ["MS Office", "WordPress", "Canva", "Python", "SQL", "VBA", "BPMN 2.0", "Figma", "NVivo"],
  languages: ["Hindi", "Telugu", "French"],
  interests: ["AI in Business", "Sustainable Tech Solutions", "Digital Innovation"]
};

export const Skills: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold">Technical Arsenal</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {skills.it.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 255, 204, 0.1)' }}
                  className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 font-mono text-sm text-white/80 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[2rem]"
            >
              <div className="flex items-center gap-3 mb-6">
                <Languages className="w-5 h-5 text-secondary" />
                <h3 className="text-xl font-display font-bold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((lang, i) => (
                  <span key={i} className="px-4 py-2 rounded-xl bg-secondary/10 text-secondary text-sm font-medium">
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-8 rounded-[2rem]"
            >
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-display font-bold">Interests</h3>
              </div>
              <ul className="space-y-3">
                {skills.interests.map((interest, i) => (
                  <li key={i} className="text-sm text-white/60 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    {interest}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
