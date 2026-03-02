import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const technicalSkills = [
  { name: "Java", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "HTML5 & CSS3", level: 95 },
  { name: "Python", level: 70 },
  { name: "React", level: 85 },
  { name: "DSA", level: 80 },
  { name: "Firebase", level: 75 },
  { name: "Git & GitHub", level: 85 },
];

const softSkills = ["Problem Solving", "Communication", "Time Management", "Team Collaboration"];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-widest text-sm uppercase">Chapter 02</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Arsenal</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-xl font-semibold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                      className="skill-bar-fill"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-xl font-semibold mb-8">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="glass p-6 text-center card-hover"
                >
                  <p className="font-medium text-sm">{skill}</p>
                </motion.div>
              ))}
            </div>

            {/* Tech stack icons */}
            <div className="mt-8 glass p-6">
              <p className="text-sm text-muted-foreground mb-4">Daily Tools</p>
              <div className="flex flex-wrap gap-3">
                {["React", "Node.js", "Firebase", "VS Code", "GitHub", "Figma"].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
