import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Briefcase } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-widest text-sm uppercase">Chapter 01</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            The <span className="gradient-text">Journey</span> Begins
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass p-8 md:p-12 mb-12"
        >
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            An ambitious <span className="text-foreground font-medium">B.Tech Computer Science (AI)</span> student at Vedam School of Technology with strong expertise in Java, JavaScript, HTML5, CSS3, and Data Structures & Algorithms.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Developed <span className="text-foreground font-medium">5+ production-ready projects</span> including AI Study Assistant, AI Resume Builder, and Portfolio Builder platforms. Active competitive programmer with <span className="text-foreground font-medium">200+ LeetCode problems solved</span> and Top 20% contest performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Briefcase,
              title: "Software Internship",
              desc: "Seeking hands-on engineering roles to grow rapidly",
            },
            {
              icon: Code2,
              title: "Freelance Projects",
              desc: "Building web applications for clients worldwide",
            },
            {
              icon: Brain,
              title: "AI Product Dev",
              desc: "Creating intelligent tools that solve real problems",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
              className="glass p-6 card-hover text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
