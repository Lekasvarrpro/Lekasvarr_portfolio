import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileDown } from "lucide-react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import Particles from "react-tsparticles";

const HeroSection = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e:any) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white"
    >

      {/* AI Particle Background */}
      <Particles
        className="absolute inset-0"
        options={{
          particles: {
            number: { value: 60 },
            color: { value: "#00ffff" },
            links: {
              enable: true,
              color: "#00ffff",
              distance: 150
            },
            move: {
              enable: true,
              speed: 1
            }
          }
        }}
      />

      {/* Mouse spotlight */}
      <motion.div
        className="pointer-events-none absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200
        }}
        transition={{ type: "spring", stiffness: 60 }}
        style={{
          background: "radial-gradient(circle, cyan, transparent)"
        }}
      />

      {/* Floating blobs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-20"
          style={{
            width: 300,
            height: 300,
            background: i % 2 ? "#00ffff" : "#7c3aed",
            left: `${20 + i * 30}%`,
            top: `${30 + i * 10}%`
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, -20, 0]
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity
          }}
        />
      ))}

      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1200}
        scale={1.03}
        transitionSpeed={1500}
      >

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

        {/* Role Typewriter */}
        <TypeAnimation
          sequence={[
            "Data Scientist",
            2000,
            "AI Engineer",
            2000,
            "Machine Learning Engineer",
            2000
          ]}
          wrapper="p"
          speed={40}
          repeat={Infinity}
          className="text-cyan-400 font-medium tracking-widest uppercase mb-4"
        />

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            LEKASVARR S
          </span>
        </motion.h1>

        <p className="text-lg max-w-2xl mx-auto text-gray-300 mb-10">
          Aspiring Data Scientist & Junior AI Engineer with experience in
          Machine Learning, Predictive Modeling, and Full-Stack AI applications.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">

          <motion.a
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 25px rgba(0,255,255,0.8)"
            }}
            whileTap={{ scale: 0.9 }}
            href="#contact"
            className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-medium flex items-center gap-2"
          >
            <Mail size={18}/>
            Get in Touch
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(124,58,237,0.8)"
            }}
            whileTap={{ scale: 0.9 }}
            href="#projects"
            className="px-6 py-3 rounded-lg border border-purple-500 flex items-center gap-2"
          >
            View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="/resume.pdf"
            className="px-6 py-3 rounded-lg border border-gray-500 flex items-center gap-2"
          >
            <FileDown size={18}/>
            Resume
          </motion.a>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">

          <motion.a
            whileHover={{ scale: 1.3, rotate: 10 }}
            href="https://github.com/Lekasvarrpro"
            target="_blank"
          >
            <Github size={26}/>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.3, rotate: 10 }}
            href="https://www.linkedin.com/in/lekasvarr"
            target="_blank"
          >
            <Linkedin size={26}/>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.3, rotate: 10 }}
            href="mailto:lekasvarrs3030@gmail.com"
          >
            <Mail size={26}/>
          </motion.a>

        </div>

      </div>

      </Tilt>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={24} className="text-gray-400"/>
      </motion.div>

    </section>
  );
};

export default HeroSection;