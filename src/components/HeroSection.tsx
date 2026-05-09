import { motion } from "framer-motion";
import { ArrowDown, BookOpen, Feather } from "lucide-react";
import ankushImg from "@/assets/ankush.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 z-10 bg-[#1C1714]">
      
      {/* Corner flourishes for the main frame */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#C9A962] opacity-70" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#C9A962] opacity-70" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#C9A962] opacity-70" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#C9A962] opacity-70" />

      {/* Vignette Overlay is handled globally, but let's add a subtle ambient light here */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A962]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24 pt-12">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="font-display text-xs uppercase tracking-[0.3em] text-[#C9A962] block mb-4">
              Volume I
            </span>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <span className="badge-available">
                Available for Freelance
              </span>
              <span className="badge-available">
                Open to Internships
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-8 text-[#E8DFD4]"
          >
            Building <br className="hidden lg:block"/>
            <span className="text-[#C9A962] italic">AI-Powered</span><br/>
            Web Applications.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-[#9C8B7A] text-lg md:text-xl mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans"
          >
            A scholar of artificial intelligence and full-stack development. Synthesizing elegant, performant, and intelligent solutions for the modern web.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6"
          >
            <a href="#projects" className="glow-button flex items-center justify-center gap-3">
              <BookOpen size={18} strokeWidth={1.5} /> View Compendium
            </a>
            <a href="https://wa.me/919508594092?text=Hi%20Ankush,%20I'm%20interested%20in%20hiring%20you%20for%20a%20project!" target="_blank" rel="noopener noreferrer" className="glow-button-outline flex items-center justify-center gap-3">
              <Feather size={18} strokeWidth={1.5} /> Draft Missive
            </a>
          </motion.div>
        </div>

        {/* Profile image with Classical Arch-top effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="relative flex-shrink-0 mt-8 lg:mt-0 z-20"
        >
          <div className="relative w-72 h-[380px] lg:w-[400px] lg:h-[520px] group transition-all duration-700">
            {/* Decorative backing frame */}
            <div className="absolute inset-0 border border-[#4A3F35] bg-[#251E19] arch-top translate-x-4 translate-y-4" />
            
            {/* Image container */}
            <div className="absolute inset-0 border border-[#C9A962]/50 p-2 arch-top bg-[#1C1714] overflow-hidden group-hover:border-[#C9A962] transition-colors duration-500">
              <div className="w-full h-full arch-top overflow-hidden bg-[#251E19]">
                <img
                  src={ankushImg}
                  alt="Ankush Kumar - Portrait"
                  className="w-full h-full object-cover sepia-image"
                />
              </div>
            </div>

            {/* Wax seal badge */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[radial-gradient(ellipse_at_top_left,#A63646,#8B2635_50%,#5A1821)] shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.4)] flex items-center justify-center text-xs font-display text-[#E8DFD4] tracking-widest uppercase rotate-12 z-30 border border-[#5A1821]">
              <div className="text-center scale-90">
                <span className="block text-[#C9A962] mb-1">✶</span>
                AI Dev
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - Classical */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3 text-[#9C8B7A] hover:text-[#C9A962] transition-colors"
      >
        <span className="font-display text-[10px] uppercase tracking-[0.3em]">Explore</span>
        <ArrowDown size={20} strokeWidth={1.5} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
