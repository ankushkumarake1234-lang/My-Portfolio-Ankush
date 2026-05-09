import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Ask My Notes",
    subtitle: "AI Note Assistant",
    problem: "Students struggle to understand long PDF notes.",
    solution: "Built an AI-powered platform where users upload PDFs and ask questions in natural language.",
    tech: ["React", "Firebase", "OpenAI API"],
    result: "Saves students 2+ hours daily.",
    color: "from-primary to-accent",
    githubUrl: "https://github.com/ankushkumarake1234-lang/ask-my-notes",
    demoUrl: "#",
  },
  {
    title: "AI Resume Builder",
    subtitle: "Career Tool",
    problem: "Students cannot create ATS-friendly resumes.",
    solution: "Built an automated resume generator with live preview & PDF download.",
    tech: ["React", "Node.js"],
    result: "Professional resumes generated in under 5 minutes.",
    color: "from-secondary to-primary",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "AI Study Assistant",
    subtitle: "Learning Platform",
    problem: "Students need personalized learning assistance.",
    solution: "Multi-subject AI platform with PDF upload and intelligent Q&A.",
    tech: ["React", "Firebase", "AI/ML"],
    result: "Personalized learning for every student.",
    color: "from-accent to-secondary",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Portfolio Builder",
    subtitle: "Developer Tool",
    problem: "Creating portfolios takes too long.",
    solution: "Auto-generates personal portfolio websites with customizable themes.",
    tech: ["React", "CSS3", "Firebase"],
    result: "Professional portfolios created in minutes.",
    color: "from-primary to-secondary",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Background Remover",
    subtitle: "AI Image Tool",
    problem: "E-commerce creators need clean product images.",
    solution: "AI-based image background remover for instant results.",
    tech: ["React", "AI API", "Canvas"],
    result: "Clean images in seconds, not hours.",
    color: "from-secondary to-accent",
    githubUrl: "#",
    demoUrl: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-widest text-sm uppercase">Chapter 03</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass p-6 md:p-8 card-hover group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Project icon area */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <Sparkles className="text-primary-foreground" size={28} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display text-xl font-bold">{project.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      {project.subtitle}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                    <div>
                      <p className="text-primary font-medium mb-1">Problem</p>
                      <p className="text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-primary font-medium mb-1">Solution</p>
                      <p className="text-muted-foreground">{project.solution}</p>
                    </div>
                    <div>
                      <p className="text-primary font-medium mb-1">Result</p>
                      <p className="text-muted-foreground">{project.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.githubUrl !== "#" ? (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                          <Github size={16} /> Code
                        </a>
                      ) : (
                        <button className="flex items-center gap-1.5 text-sm text-muted-foreground/50 cursor-not-allowed transition-colors" title="Code not available yet">
                          <Github size={16} /> Code
                        </button>
                      )}
                      
                      {project.demoUrl !== "#" ? (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-primary hover:text-secondary transition-colors">
                          <ExternalLink size={16} /> Demo
                        </a>
                      ) : (
                        <button className="flex items-center gap-1.5 text-sm text-primary/50 cursor-not-allowed transition-colors" title="Demo not available yet">
                          <ExternalLink size={16} /> Demo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
