import { motion } from "framer-motion";
import { Trophy, TrendingUp } from "lucide-react";
import { achievements } from "@/data/achievements";

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "var(--gradient-primary)" }} />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.text}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-5 flex items-center gap-4 hover:glow transition-shadow duration-300"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 flex-shrink-0">
                {ach.metric ? <TrendingUp size={20} className="text-primary" /> : <Trophy size={20} className="text-primary" />}
              </div>
              <div>
                <p className="text-sm font-medium">{ach.text}</p>
                {ach.metric && (
                  <span className="text-2xl font-heading font-bold gradient-text">{ach.metric}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
