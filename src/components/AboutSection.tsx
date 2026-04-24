import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: "var(--gradient-primary)" }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am an aspiring Data Scientist and Junior AI Engineer with strong
              hands-on experience in Machine Learning, Predictive Modeling, and
              Full-Stack AI application development. I specialize in Python,
              data analysis, model training, and classification algorithms with a
              proven ability to design, build, and optimize intelligent systems
              achieving up to 90% model accuracy. I am passionate about solving
              real-world problems using AI-driven solutions and continuously
              improving my technical expertise.
            </p>

            <div className="flex items-center gap-2 text-muted-foreground mb-3">
              <MapPin size={16} className="text-primary" />
              <span>Chennai, Tamil Nadu, India</span>
            </div>
          </motion.div>

          {/* RIGHT EDUCATION CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-xl p-6 space-y-6"
          >
            
            {/* College */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-1">
                  Bachelor of Technology (AI & DS)
                </h3>
                <p className="font-medium">
                  Panimalar Engineering College, Chennai
                </p>
                <p className="text-primary text-sm font-medium mt-1">
                  2026 – Present
                </p>
              </div>
            </div>

            {/* HSC */}
            <div className="border-t border-white/10 pt-4">
              <h3 className="font-semibold text-base mb-1">
                Higher Secondary Certificate (HSC class 12)
              </h3>
              <p className="text-muted-foreground text-sm">
                Sindhi Model Matriculation Higher Secondary School
              </p>
              <p className="text-primary text-sm font-medium mt-1">
                Percentage: 84%
              </p>
            </div>

            {/* SSLC */}
            <div className="border-t border-white/10 pt-4">
              <h3 className="font-semibold text-base mb-1">
                Secondary School Leaving Certificate (SSLC class 10)
              </h3>
              <p className="text-muted-foreground text-sm">
                Sindhi Model Matriculation Higher Secondary School
              </p>
              <p className="text-primary text-sm font-medium mt-1">
                Percentage: 100%
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;