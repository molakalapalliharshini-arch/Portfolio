import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

const experience = [
  {
    company: "Outlier",
    location: "Remote",
    role: "AI Data and Analysis Contributor",
    dates: "Nov 2025 - Present",
    bullets: [
      "Evaluated AI-generated outputs, applying detailed rubrics for accuracy, relevance, and clarity.",
      "Analysed large volumes of data and qualitative responses to identify patterns, gaps, and improvement areas.",
      "Produced clear written feedback and summaries, translating complex outputs into actionable insights.",
      "Strengthened attention to detail, analytical reasoning, and quality standards in a fast-paced, metrics-driven environment."
    ],
    highlights: ["AI Evaluation", "Data Analysis"]
  },
  {
    company: "Lime Intervention Design",
    location: "UK",
    role: "AI Strategy Consultant",
    dates: "June 2025 - Sep 2025",
    bullets: [
      "Collaborated directly with the founder on a consulting-style engagement to analyse organisational workflows and identify opportunities for AI integration.",
      "Conducted structured interviews, synthesised insights using NVivo, and prepared founder-ready reports and strategy documents.",
      "Designed BPMN-based process maps and user flows to support platform feature planning and prioritisation.",
      "Delivered polished decks connecting research insights to execution recommendations."
    ],
    highlights: ["AI Strategy", "Workflow Analysis"]
  },
  {
    company: "BIO UNIQUE",
    location: "India",
    role: "Digital Transformation Intern",
    dates: "July 2024 - Sep 2024",
    bullets: [
      "Oversaw ERP migration from Tally to Odoo, ensuring 100% accuracy and compliance with GDPR.",
      "Documented workflows, created SOPs, and supported change management for Finance, Logistics, and Sales functions.",
      "Conducted root-cause analysis of operational bottlenecks, reducing order fulfilment time by 30% and improving system performance by 25%.",
      "Coordinated with the implementation team and facilitated communication across stakeholders to ensure clarity and alignment."
    ],
    highlights: ["ERP Migration", "30% Time Reduction", "25% Performance Boost"]
  },
  {
    company: "Southampton Business School",
    location: "UK",
    role: "EDO Communications Intern",
    dates: "July 2023 - July 2023",
    bullets: [
      "Initiated and led a communications playbook project to increase adoption of business school initiatives.",
      "Framed the problem (low usage), audited website/Instagram, proposed improvements, and executed changes end-to-end.",
      "Managed data-driven website updates, improving accessibility and engagement metrics.",
      "Designed and implemented content strategies using WordPress, increasing user interaction by 15%.",
      "Presented recommendations to leadership and delivered approved solutions, improving engagement and visibility."
    ],
    highlights: ["15% Interaction Increase", "Communications Playbook"]
  },
  {
    company: "PageGroup",
    location: "London, UK",
    role: "Group Innovation Analyst - Placement",
    dates: "Oct 2021 - Aug 2022",
    bullets: [
      "Conducted market and technology research, analysed internal processes, and developed insights for senior leadership, including the Chief Strategy Officer.",
      "Evaluated 50+ technology vendors, producing reports that informed strategic partnerships.",
      "Maintained confidential data repositories, ensuring compliance with data-protection standards.",
      "Delivered presentations to senior leadership, translating complex data into clear recommendations.",
      "Facilitated cross-team workshops that improved collaboration by 25% and reduced process turnaround time by 15%."
    ],
    highlights: ["50+ Vendors Evaluated", "25% Collaboration Improvement"]
  },
  {
    company: "Indie Vastralay",
    location: "India",
    role: "Co-founder and Marketing Head",
    dates: "June 2020 - Oct 2021",
    bullets: [
      "Founded and managed an online brand, creating digital content and campaigns that scaled sales to 60,000 units in six months.",
      "Ran end-to-end operations, including product catalogue management on WordPress, SKU updates, and sales analytics.",
      "Collaborated with 50+ influencers/celebrities to expand brand presence and managed social media marketing strategies.",
      "Analysed sales signals and category performance, helping scale orders to 60,000 units in 6 months."
    ],
    highlights: ["60,000 Units Sold", "50+ Influencer Collabs"]
  }
];

export const Experience: React.FC = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 lg:px-24 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Professional Story</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-6">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`glass rounded-3xl overflow-hidden transition-all duration-500 ${expandedIdx === idx ? 'glow-border ring-1 ring-primary/20' : 'hover:bg-white/10'}`}
              >
                <button
                  onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                  className="w-full p-8 text-left flex items-start justify-between gap-4"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-mono font-bold tracking-widest uppercase">
                        {exp.dates}
                      </span>
                      <span className="text-white/40 font-mono text-xs flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-1">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 text-white/20">
                    {expandedIdx === idx ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8"
                    >
                      <div className="h-[1px] bg-white/10 mb-6" />
                      <ul className="space-y-4 mb-8">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-white/60 leading-relaxed">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((h, hIdx) => (
                          <span key={hIdx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-white/40 uppercase tracking-wider">
                            {h}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="glass p-8 rounded-3xl sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-primary">
                <Sparkles className="w-5 h-5" />
                <h4 className="font-display font-bold uppercase tracking-widest text-sm">Impact Highlights</h4>
              </div>
              <div className="space-y-6">
                {[
                  { label: "Sales Scale", val: "60,000 Units", desc: "Achieved in 6 months as Co-founder" },
                  { label: "Efficiency", val: "30% Reduction", desc: "In order fulfillment time via ERP" },
                  { label: "Strategy", val: "50+ Vendors", desc: "Evaluated for strategic partnerships" }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="text-2xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">{item.val}</div>
                    <div className="text-xs font-mono text-white/40 uppercase tracking-wider mb-2">{item.label}</div>
                    <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                    {i < 2 && <div className="h-[1px] bg-white/5 mt-6" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
