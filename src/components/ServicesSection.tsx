import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Globe, FileText, Cog, Layout, Palette } from "lucide-react";

const services = [
  { icon: Brain, title: "AI Website Development", desc: "Intelligent web apps powered by AI/ML" },
  { icon: Globe, title: "Custom Web Applications", desc: "Scalable, responsive full-stack solutions" },
  { icon: FileText, title: "Resume & Portfolio Builders", desc: "Automated tools for professional branding" },
  { icon: Cog, title: "Automation Tools", desc: "Streamline workflows with smart automation" },
  { icon: Layout, title: "Front-End Development", desc: "Pixel-perfect, performant user interfaces" },
  { icon: Palette, title: "UI/UX Optimization", desc: "Data-driven design improvements" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-widest text-sm uppercase">Chapter 07</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="glass p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                <s.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <a href="#contact" className="glow-button text-primary-foreground inline-flex items-center gap-2 text-lg">
            Book a Free 15-Minute Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
