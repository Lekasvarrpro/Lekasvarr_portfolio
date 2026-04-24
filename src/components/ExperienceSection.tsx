import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/experience";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "var(--gradient-primary)" }} />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-4 top-6 w-5 h-5 rounded-full items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                  <div className="w-2 h-2 rounded-full bg-background" />
                </div>

                <div className="glass-card rounded-xl p-6 hover:glow transition-shadow duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 sm:hidden">
                      <Briefcase size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg">{exp.role}</h3>
                      <p className="text-primary font-medium text-sm">{exp.company}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{exp.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-1">
                    {exp.description.map((desc, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
