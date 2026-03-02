import { motion } from "framer-motion";
import { ArrowDown, Download, Eye } from "lucide-react";
import ankushImg from "@/assets/ankush.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-gradient" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-[120px] animate-gradient" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-24">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6"
          >
            <span className="badge-available">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ filter: "hue-rotate(100deg)" }} />
              Available for Freelance
            </span>
            <span className="badge-available">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open to Internships
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Building{" "}
            <span className="gradient-text">AI-Powered</span>{" "}
            Web Applications That Solve{" "}
            <span className="gradient-text">Real Problems</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-lg mb-4 max-w-xl mx-auto lg:mx-0"
          >
            B.Tech AI Student • 200+ LeetCode Problems Solved • Fiverr 5-Star Freelancer • Full Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
          >
            I help startups, students, and businesses build intelligent, responsive, and scalable web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <a href="#projects" className="glow-button flex items-center gap-2 text-primary-foreground">
              <Eye size={18} /> View Projects
            </a>
            <a href="https://wa.me/919508594092?text=Hi%20Ankush,%20I'm%20interested%20in%20hiring%20you%20for%20a%20project!" target="_blank" rel="noopener noreferrer" className="glow-button-outline flex items-center gap-2">
              Hire Me
            </a>
            <a href="#education" className="glow-button-outline flex items-center gap-2">
              <Download size={18} /> Resume
            </a>
          </motion.div>
        </div>

        {/* Profile image with 3D effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-30 blur-2xl animate-pulse-glow" />
            {/* Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl">
              <img
                src={ankushImg}
                alt="Ankush Kumar - AI & Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -right-2 glass px-4 py-2 rounded-lg text-sm font-medium"
            >
              🚀 AI Developer
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-muted-foreground" size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
