import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

const GITHUB_URL = "https://github.com/Lekasvarrpro";

const extraProjects = [
  {
    title: "PredSkill – AI Career Guidance Engine",
    description:
      "AI-driven system that predicts career roles based on user skills and generates personalized learning roadmaps with skill gap analysis and confidence scoring.",
    technologies: [
      "Python",
      "Machine Learning",
      "Flask",
      "React.js",
      "TF-IDF",
      "Logistic Regression",
      "Firebase",
      "GNews API",
    ],
    highlights: [
      "Built ML model for career role prediction with high accuracy",
      "Designed full-stack dashboard using React + Flask",
      "Integrated AI assistant 'Preddy' with real-time news updates",
      "Implemented Firebase authentication and user tracking",
    ],
    github: GITHUB_URL,
    live: "",
  },
  {
    title: "Calczy – Interactive Web Calculator",
    description:
      "Modern neon-style interactive calculator with live computation, history tracking, and smooth UI/UX experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Live expression preview while typing",
      "Keyboard and mouse support",
      "Calculation history log system",
      "Copy result to clipboard feature",
    ],
    github: GITHUB_URL,
    live: "",
  },
  {
    title: "Quizzy – Web-Based Quiz Application",
    description:
      "Scalable quiz platform with dynamic category selection, timer-based quizzes, and result evaluation system.",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    highlights: [
      "Dynamic quiz module loading system",
      "Timer-based quiz execution",
      "LocalStorage for state persistence",
      "Clean modular architecture",
    ],
    github: GITHUB_URL,
    live: "",
  },
  {
    title: "Amazon Prime Clone – UI Recreation",
    description:
      "Responsive Amazon Prime Video UI clone focusing on modern layout, animations, and real-world streaming experience.",
    technologies: ["React.js", "Tailwind CSS", "Vercel", "GitHub"],
    highlights: [
      "Pixel-perfect UI replication",
      "Hover-based video interactions",
      "Responsive streaming layout",
      "Deployed using Vercel",
    ],
    github: GITHUB_URL,
    live: "",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: "var(--gradient-primary)" }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">

          {[...projects, ...extraProjects].map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-xl overflow-hidden group hover:glow transition-all duration-300"
            >
              <div
                className="h-2 w-full"
                style={{ background: "var(--gradient-primary)" }}
              />

              <div className="p-6">

                <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;