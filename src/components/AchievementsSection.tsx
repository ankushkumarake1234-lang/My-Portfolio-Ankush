import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Trophy, Target, Flame, Star, GraduationCap } from "lucide-react";

const achievements = [
  { icon: Target, value: 200, suffix: "+", label: "LeetCode Problems", color: "text-primary" },
  { icon: Flame, value: 30, suffix: "-Day", label: "Coding Streak", color: "text-secondary" },
  { icon: Trophy, value: 20, suffix: "%", label: "Top Contest Rank", color: "text-accent" },
  { icon: Star, value: 5, suffix: "★", label: "Fiverr Rating", color: "text-primary" },
  { icon: GraduationCap, value: 0, suffix: "A", label: "Grade in DSA & OOP", color: "text-secondary" },
];

const Counter = ({ target, inView, suffix }: { target: number; inView: boolean; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || target === 0) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  if (target === 0) return <span className="font-display text-4xl md:text-5xl font-bold">{suffix}</span>;
  return <span className="font-display text-4xl md:text-5xl font-bold">{count}{suffix}</span>;
};

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-widest text-sm uppercase">Chapter 04</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Milestones <span className="gradient-text">Unlocked</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass p-6 text-center card-hover"
            >
              <a.icon className={`${a.color} mx-auto mb-3`} size={28} />
              <Counter target={a.value} inView={inView} suffix={a.suffix} />
              <p className="text-xs text-muted-foreground mt-2">{a.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
