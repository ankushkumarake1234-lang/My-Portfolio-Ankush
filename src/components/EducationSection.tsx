import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Vedam School of Technology",
    degree: "B.Tech Computer Science with AI Specialization",
    year: "2024 – 2029",
  },
  {
    school: "A.N College, Patna",
    degree: "12th Grade",
    year: "",
  },
  {
    school: "Jeevan Jyoti Public School",
    degree: "10th Grade",
    year: "",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium mb-2 tracking-widest text-sm uppercase">Chapter 06</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-secondary" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="relative pl-16"
              >
                <div className="absolute left-3 top-2 w-7 h-7 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <GraduationCap size={14} className="text-primary" />
                </div>
                <div className="glass p-6">
                  <h3 className="font-display font-semibold text-lg">{edu.school}</h3>
                  <p className="text-muted-foreground text-sm">{edu.degree}</p>
                  {edu.year && <p className="text-primary text-xs mt-1">{edu.year}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
