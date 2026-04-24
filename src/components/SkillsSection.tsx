import { motion } from "framer-motion";
import { Code2, Brain, Library, Monitor } from "lucide-react";
import { skillCategories, softSkills } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={22} />,
  Brain: <Brain size={22} />,
  Library: <Library size={22} />,
  Monitor: <Monitor size={22} />,
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: "var(--gradient-primary)" }}
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 hover:glow transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {iconMap[cat.icon]}
                </div>
                <h3 className="font-heading font-semibold text-lg">
                  {cat.category}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-primary)" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}

                {/* ADDED DSA SECTION INSIDE CODE CATEGORY */}
                {cat.category === "Programming" && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">
                        Data Structures & Algorithms
                      </span>
                      <span className="text-muted-foreground">85%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-primary)" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading font-semibold text-lg text-center mb-4">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full glass-card text-sm font-medium hover:glow transition-shadow cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;