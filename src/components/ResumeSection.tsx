import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Download, ExternalLink } from "lucide-react";
import resumePdf from "@/assets/9508594092 (1).pdf";

const ResumeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary font-medium mb-2 tracking-widest text-sm uppercase">Curriculum Vitae</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass p-8 md:p-12 relative overflow-hidden group rounded-2xl border border-primary/20"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-background/50 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-border">
              <FileText size={40} className="text-primary" />
            </div>
            
            <h3 className="text-2xl font-display font-bold mb-4 text-foreground">View My Full Background</h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-lg leading-relaxed">
              Explore my comprehensive experience, technical skills, and educational background in detail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
              <a 
                href={resumePdf} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glow-button flex items-center justify-center gap-2"
              >
                <ExternalLink size={18} />
                Open Resume
              </a>
              <a 
                href={resumePdf} 
                download="Ankush_Kumar_Resume.pdf"
                className="glow-button-outline flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
