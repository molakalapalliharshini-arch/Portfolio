import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, BarChart3, BrainCircuit, Activity, Zap } from 'lucide-react';

const projects = [
  {
    title: "Heart Attack Predictive Analytics",
    subtitle: "Machine Learning & Healthcare Data",
    description: "Developed a sophisticated ensemble model to predict heart attack risks using a dataset of 10,000 patients. Implemented Soft Voting to combine Neural Networks, XGBoost, and Random Forest for superior predictive power.",
    metrics: [
      { label: "Accuracy", value: "91%" },
      { label: "AUC-ROC", value: "0.99" },
      { label: "Recall", value: "1.0" }
    ],
    stack: ["Python", "Scikit-learn", "XGBoost", "Neural Networks", "SMOTE", "Pandas"],
    icon: BrainCircuit,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Aurora Borealis Notification System",
    subtitle: "Real-time API Integration & Automation",
    description: "A modular automated solution that tracks NOAA planetary K-index data. Features a custom HTML visualization engine and an SMTP notification system for real-time aurora chasing alerts.",
    metrics: [
      { label: "Threshold", value: "Kp >= 5" },
      { label: "Accuracy", value: "100%" },
      { label: "Interval", value: "Daily" }
    ],
    stack: ["Python", "NOAA API", "SMTP", "Schedule", "HTML/CSS"],
    icon: Zap,
    color: "from-emerald-500 to-teal-500"
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 lg:px-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest mb-4">
            <Database className="w-4 h-4" /> Data & Analytics Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass rounded-[2.5rem] p-1 border-white/5 hover:border-primary/20 transition-colors"
            >
              <div className="bg-black/40 rounded-[2.4rem] p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg shadow-black/50`}>
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex gap-3">
                    <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-primary transition-all">
                      <Github className="w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-primary transition-all">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="mb-2 text-xs font-mono text-primary uppercase tracking-widest">{project.subtitle}</div>
                <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-white/60 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {project.metrics.map((m, mi) => (
                    <div key={mi} className="bg-white/5 rounded-2xl p-4 text-center border border-white/5">
                      <div className="text-xl font-display font-bold text-white">{m.value}</div>
                      <div className="text-[10px] font-mono text-white/30 uppercase tracking-tighter">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, ti) => (
                    <span key={ti} className="px-3 py-1 rounded-lg bg-primary/5 border border-primary/10 text-[10px] font-mono text-primary/80 uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 glass rounded-3xl border-dashed border-white/10 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-white/40 mb-2">
            <BarChart3 className="w-4 h-4" />
            <span className="text-sm font-mono uppercase tracking-widest">Analytical Methodology</span>
          </div>
          <p className="text-sm text-white/30 max-w-2xl mx-auto">
            All projects follow a rigorous data lifecycle: Exploratory Data Analysis (EDA), Correlation Matrix validation, Normalization, and Cross-Validation to ensure production-ready reliability.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
