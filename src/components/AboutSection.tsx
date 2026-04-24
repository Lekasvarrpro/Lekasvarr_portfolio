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
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "var(--gradient-primary)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm an aspiring Data Scientist and Junior AI Engineer with hands-on experience in 
              Machine Learning, Predictive Modeling, and Full-Stack AI Application Development. 
              I have strong expertise in Python, Data Analysis, Model Training, and Classification 
              Algorithms with proven ability to build and optimize AI solutions achieving up to 
              90% model accuracy.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground mb-3">
              <MapPin size={16} className="text-primary" />
              <span>Chennai, Tamil Nadu, India</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-1">Education</h3>
                <p className="font-medium">B.Tech in Artificial Intelligence & Data Science</p>
                <p className="text-muted-foreground text-sm">Panimalar Engineering College, Chennai</p>
                <p className="text-primary text-sm font-medium mt-1">2026 – Present</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
