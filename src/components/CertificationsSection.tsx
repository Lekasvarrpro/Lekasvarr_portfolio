import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data/certifications";
import { useEffect, useState } from "react";

/* 🔥 REAL CLOUDINARY IMAGES */
const certificateImages = [
  "https://res.cloudinary.com/doux3ospw/image/upload/v1777057382/cert5_ckyxxm.jpg",
  "https://res.cloudinary.com/doux3ospw/image/upload/v1777057382/cert4_ghufxh.jpg",
  "https://res.cloudinary.com/doux3ospw/image/upload/v1777057382/cert3_zarea9.jpg",
  "https://res.cloudinary.com/doux3ospw/image/upload/v1777057382/cert10_uoggvd.jpg",
  "https://res.cloudinary.com/doux3ospw/image/upload/v1777057382/cert7_bivqth.png",
  "https://res.cloudinary.com/doux3ospw/image/upload/v1777057382/cert1_xh2k7w.jpg",
  "https://res.cloudinary.com/doux3ospw/image/upload/v1777057381/cert2_axouvh.jpg",
  "https://res.cloudinary.com/doux3ospw/image/upload/v1777057381/cert6_bnkuht.jpg",
  "https://res.cloudinary.com/doux3ospw/image/upload/v1777057381/cert11_rxx4xv.jpg",
  "https://res.cloudinary.com/doux3ospw/image/upload/v1777057381/cert8_dahpog.jpg",
  "https://res.cloudinary.com/doux3ospw/image/upload/v1777057381/cert9_t0yw9t.jpg",
];

export const certifications = [
  {
    title: "Micro-Certification - Welcome to ServiceNow",
    issuer: "ServiceNow",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
  },
  {
    title: "Foundations of Prompt Engineering",
    issuer: "AWS",
  },
  {
    title: "Introduction to Deep Learning",
    issuer: "Infosys Springboard",
  },
  {
    title: "HP Effective Leadership Certificate",
    issuer: "HP",
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
  },
  {
    title: "Data Science",
    issuer: "NASSCOM",
  },
  {
    title: "Natural Language Processing (NLP)",
    issuer: "Infosys Springboard",
  },
  {
    title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle",
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
  },
  {
    title: "Digital Marketing Strategy",
    issuer: "Simplilearn",
  },
  {
    title: "Python Basics Certificate",
    issuer: "HackerRank",
  },
  {
    title: "Mastering Java Fundamentals",
    issuer: "Scaler",
  },
];

const CertificationsSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % certificateImages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: "var(--gradient-primary)" }}
          />
        </motion.div>

        {/* 🔥 CERTIFICATION GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-xl p-5 hover:glow transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Award size={18} className="text-primary" />
                </div>

                <div>
                  <h3 className="font-medium text-sm leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔥 SMOOTH 3D CAROUSEL */}
        <div className="mt-16 overflow-x-hidden flex justify-center perspective-[1400px]">
          <div className="relative w-full max-w-3xl h-[380px] flex items-center justify-center">
            {certificateImages.map((img, i) => {
              const offset = i - index;

              return (
                <motion.div
                  key={i}
                  className="absolute w-[88%] h-full"
                  style={{
                    transformStyle: "preserve-3d",
                    zIndex: 100 - Math.abs(offset),
                  }}
                  animate={{
                    x: offset * 70,
                    scale: offset === 0 ? 1 : 0.82,
                    rotateY: offset * -18,
                    opacity: Math.abs(offset) > 3 ? 0 : 1,
                  }}
                  transition={{
                    duration: 1.2, // 🔥 slower = smoother
                    ease: [0.25, 0.8, 0.25, 1], // smooth bezier flow
                  }}
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-black/20 flex items-center justify-center">
                    <img
                      src={img}
                      alt={`certificate-${i}`}
                      className="w-full h-full object-contain"
                      draggable={false}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
