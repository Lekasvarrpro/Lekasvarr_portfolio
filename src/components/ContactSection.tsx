import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:lekasvarrs3030@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
    window.open(mailto);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "var(--gradient-primary)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and Data Science.
            </p>
            <div className="space-y-4">
              <a href="mailto:lekasvarrs3030@gmail.com" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                <div className="p-2 rounded-lg bg-primary/10"><Mail size={16} className="text-primary" /></div>
                lekasvarrs3030@gmail.com
              </a>
              <a href="tel:8610672265" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                <div className="p-2 rounded-lg bg-primary/10"><Phone size={16} className="text-primary" /></div>
                8610672265
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="p-2 rounded-lg bg-primary/10"><MapPin size={16} className="text-primary" /></div>
                Chennai, Tamil Nadu, India
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card rounded-xl p-6 space-y-4"
          >
            <div>
              <label className="text-sm font-medium mb-1.5 block">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm text-primary-foreground transition-all hover:scale-[1.02] glow"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
