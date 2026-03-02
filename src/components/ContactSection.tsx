import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:ankhushkumarake123456@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`;
    window.open(mailto);
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-widest text-sm uppercase">Chapter 08</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm"
              />
            </div>
            <div>
              <textarea
                rows={5}
                placeholder="Your Message"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm resize-none"
              />
            </div>
            <button type="submit" className="glow-button flex items-center gap-2 text-primary-foreground w-full justify-center">
              <Send size={18} /> Send Message
            </button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glass p-6 space-y-5">
              <a href="mailto:ankhushkumarake123456@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-foreground">ankhushkumarake123456@gmail.com</p>
                </div>
              </a>

              <a href="tel:9508594092" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium text-foreground">+91 9508594092</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/ankush-kumar-60333537b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Linkedin className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="text-sm font-medium text-foreground">Ankush Kumar</p>
                </div>
              </a>

              <a href="https://github.com/ankushkumarake1234-lang" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Github className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="text-sm font-medium text-foreground">ankushkumarake1234-lang</p>
                </div>
              </a>
            </div>

            <div className="glass p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Based in</p>
              <p className="font-display font-semibold">Nawada, Bihar, India</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
