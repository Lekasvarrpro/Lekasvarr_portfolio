import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data/certifications";

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "var(--gradient-primary)" }} />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-xl p-5 hover:glow transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Award size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-sm leading-tight">{cert.title}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{cert.issuer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
