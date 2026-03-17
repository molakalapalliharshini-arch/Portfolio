import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Users, Target, Award, Star } from 'lucide-react';

const achievements = [
  { metric: "60,000", context: "Units sold in six months for Indie Vastralay", icon: TrendingUp, color: "from-primary to-emerald-500" },
  { metric: "30%", context: "Reduction in order fulfillment time at BIO UNIQUE", icon: Target, color: "from-secondary to-blue-500" },
  { metric: "25%", context: "Improvement in system performance at BIO UNIQUE", icon: Users, color: "from-accent to-purple-500" },
  { metric: "15%", context: "Increase in user interaction at SBS", icon: Star, color: "from-primary to-yellow-500" },
  { metric: "50+", context: "Technology vendors evaluated for PageGroup", icon: Award, color: "from-secondary to-indigo-500" },
  { metric: "50+", context: "Influencers/celebrities collaborated with", icon: Users, color: "from-accent to-pink-500" }
];

export const Achievements: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-24 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-mono text-xs uppercase tracking-widest mb-6">
            <Trophy className="w-4 h-4" /> Measurable Success
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Key Achievements</h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            A track record of delivering tangible results through data-driven strategies and operational excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass p-8 rounded-[2rem] relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                
                <div className="text-5xl font-display font-bold mb-2 tracking-tighter">
                  {item.metric}
                </div>
                
                <p className="text-white/60 leading-relaxed">
                  {item.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
