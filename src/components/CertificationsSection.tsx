import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certs = [
  "HackerRank Java",
  "HackerRank JavaScript",
  "freeCodeCamp Front-End",
  "Coursera DSA",
  "Google UI/UX",
  "Kaggle Python",
  "Git & GitHub Essentials",
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium mb-2 tracking-widest text-sm uppercase">Chapter 05</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="glass p-5 card-hover flex items-center gap-3"
            >
              <Award className="text-primary flex-shrink-0" size={20} />
              <span className="text-sm font-medium">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
