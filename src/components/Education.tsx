import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, CheckCircle2 } from 'lucide-react';

const education = [
  {
    institution: "Warwick Business School",
    degree: "MSc Management of Information Systems and Digital Innovation",
    dates: "Sep 2024 - Sep 2025",
    grade: "Merit (68%)",
    courses: [
      "Programming Solutions for Enterprises (64%)",
      "Cybersecurity in Business (68%)",
      "Digital Business Strategy",
      "Data Analytics & AI"
    ]
  },
  {
    institution: "University of Southampton",
    degree: "BSc Business Management with Employment Placement",
    dates: "Sep 2019 - July 2023",
    grade: "First Class Honors (73%)",
    courses: [
      "Dissertation: 'The Great Resignation' (First Grade)"
    ]
  }
];

const extra = {
  certifications: ["Microsoft Azure AI", "Big Data Analytics", "Lean Six Sigma Foundations"],
  awards: ["Dean’s List for Outstanding Achievement"],
  activities: ["Bollywood Dance Representative at SU"]
};

export const Education: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-display font-bold mb-4">Academic Background</h2>
              <div className="w-20 h-1 bg-secondary rounded-full" />
            </motion.div>

            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-8 border-l border-white/10"
                >
                  <div className="absolute top-0 left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary ring-4 ring-secondary/20" />
                  <div className="mb-2 text-secondary font-mono text-xs tracking-widest uppercase">{edu.dates}</div>
                  <h3 className="text-2xl font-display font-bold mb-1">{edu.degree}</h3>
                  <p className="text-white/60 mb-4">{edu.institution} — <span className="text-primary">{edu.grade}</span></p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, ci) => (
                      <span key={ci} className="text-[10px] font-mono text-white/40 border border-white/5 px-2 py-1 rounded">
                        {course}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl"
            >
              <div className="flex items-center gap-3 mb-6 text-accent">
                <Award className="w-6 h-6" />
                <h3 className="text-xl font-display font-bold">Certifications & Honors</h3>
              </div>
              <div className="space-y-4">
                {[...extra.certifications, ...extra.awards].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <div className="flex items-center gap-3 mb-6 text-primary">
                <BookOpen className="w-6 h-6" />
                <h3 className="text-xl font-display font-bold">Extracurricular</h3>
              </div>
              <div className="text-white/70 text-sm leading-relaxed">
                {extra.activities.map((act, i) => (
                  <p key={i}>{act}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
