import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ShieldCheck, X } from "lucide-react";
import { experience } from "@/data/experience";
import { useState } from "react";

/* 🔥 INTERNSHIP CERTIFICATES */
const internshipCertificates: Record<string, string> = {
  "Infomatronics Project Services":
    "https://res.cloudinary.com/doux3ospw/image/upload/v1777058856/in1_noe42f.jpg",

  "Kaashiv Info Tech":
    "https://res.cloudinary.com/doux3ospw/image/upload/v1777058856/in2_sm9ckk.jpg",

  "Tek Pyramid (Qspiders)":
    "https://res.cloudinary.com/doux3ospw/image/upload/v1777058854/in3_cf1uvf.jpg",

  "Genz EducateWing":
    "https://res.cloudinary.com/doux3ospw/image/upload/v1777058854/in4_o10yr0.jpg",
};

/* 🔥 NORMALIZER (FIXES "NOT SHOWING CERTIFICATE ISSUE") */
const normalize = (s: string) =>
  s.toLowerCase().replace(/\s+/g, " ").trim();

const certMap: Record<string, string> = Object.fromEntries(
  Object.entries(internshipCertificates).map(([k, v]) => [
    normalize(k),
    v,
  ])
);

const extraExperience = [
  {
    role: "Machine Learning Intern",
    company: "Infomatronics Project Services",
    period: "Jun 2024",
    location: "Chennai, Tamil Nadu",
    skills: ["Machine Learning", "Data Preprocessing", "Model Training"],
    description: [
      "Worked on ML workflows and real-world datasets",
      "Applied preprocessing and model building",
      "Improved analytical thinking skills",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Kaashiv Info Tech",
    period: "Dec 2024",
    location: "Chennai, Tamil Nadu",
    skills: ["Data Analysis", "Python", "Problem Solving"],
    description: [
      "Explored data science workflows",
      "Worked on structured problem solving",
      "Strengthened Python & analytics skills",
    ],
  },
  {
    role: "Web Application Development Intern",
    company: "Tek Pyramid (Qspiders)",
    period: "Feb 2025 – Apr 2025",
    location: "Bengaluru, Karnataka",
    skills: ["React.js", "Firebase", "JavaScript"],
    description: [
      "Built full-stack web applications",
      "Created responsive UI systems",
      "Worked in collaborative dev environment",
    ],
  },
];

const ExperienceSection = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
        </motion.div>

        <div className="relative">

          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

          <div className="space-y-10">

            {[...experience, ...extraExperience].map((exp, i) => {
              const certImage = certMap[normalize(exp.company)];

              return (
                <motion.div
                  key={`${exp.company}-${i}`}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative sm:pl-16 group"
                >

                  {/* Timeline Dot */}
                  <div className="hidden sm:flex absolute left-4 top-6 w-5 h-5 rounded-full items-center justify-center bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg shadow-cyan-400/40">
                    <div className="w-2 h-2 rounded-full bg-black" />
                  </div>

                  <div className="glass-card rounded-xl p-6 hover:glow transition-all duration-300 border border-white/5 hover:border-cyan-400/40">

                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">

                      <div>
                        <h3 className="font-heading font-semibold text-lg flex items-center gap-2">
                          {exp.role}

                          <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-400/30">
                            <ShieldCheck size={12} /> Verified
                          </span>
                        </h3>

                        <p className="text-primary font-medium text-sm">
                          {exp.company}
                        </p>
                        <p className="text-muted-foreground text-xs mt-0.5">
                          {exp.period} • {exp.location}
                        </p>
                      </div>

                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.skills?.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 ml-1">
                      {exp.description.map((desc, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                          {desc}
                        </li>
                      ))}
                    </ul>

                    {/* 📜 CERTIFICATE BUTTON */}
                    {certImage && (
                      <button
                        onClick={() => setSelectedCert(certImage)}
                        className="mt-5 text-xs text-cyan-400 hover:underline"
                      >
                        View Certificate
                      </button>
                    )}

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* 🖼️ MODAL */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl w-full p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-2 right-2 text-white"
                >
                  <X />
                </button>

                <img
                  src={selectedCert}
                  className="w-full max-h-[80vh] object-contain rounded-xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ExperienceSection;