import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Github,
  Zap,
  Smartphone,
  Globe,
  Database,
} from "./icons";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const projects = [
    {
      title: "Smart Glove Vital Health Monitoring System (In-Progress)",
      description: "Developing a Vital Monitoring Smart Glove using ESP32 that integrates temperature, heart rate, SpO₂, fall detection, and GPS modules to monitor soldier health in real time, with cloud (ThingSpeak) logging and local database storage for base camp analysis with a Real-Time Dashboard.",
      tech: ["React", "Node.js", "SQL", "ESP32", "Cloud", "ThingSpeak","Arduino IDE","IOT"],
      category: "Full Stack",
      icon: Database,
      image: "/project1.png",
      featured: true,
    },
    {
      title: "Comprehensive Stress Detection for Automobile Drivers",
      description: "Developed a machine learning–based system to detect and classify driver stress levels using physiological signals such as ECG, HRV, GSR, EMG, and respiration. The project involved preprocessing biosignals with FFT, feature extraction, and handling class imbalance using SMOTE. Multiple algorithms including SVM, KNN, Decision Trees, CNN, and Random Forest were evaluated, with Random Forest achieving the highest accuracy of 92%. This system demonstrates the potential of AI-driven health monitoring for enhancing road safety and reducing accident risks.",
      tech: ["Machine learning", "Deep Learning", "Random Forest", "Data Preprocessing", "Neural Networks","Python","Jupyter Notebook","Scikit Learn","Tensorflow"],
      category: "Web App",
      icon: Zap,
      image: "/stress.jpg",
      featured: true,
    },
    {
      title: "Showbookie - Moive Ticket Booking System",
      description: "Built a web-based Movie Ticket Booking System using MySQL, Node.js, Express.js, and JavaScript, featuring real-time seat selection, secure payments, and an innovative cancellation & rebooking option for enhanced user convenience.",
      tech: ["React", "JavaScript", "SQL", "HTML5", "CSS3", "Node.js", "Express.js", "Bootstrap CSS", "DBMS"],
      category: "Mobile",
      icon: Smartphone,
      image: "/showbookie.jpg",
      featured: false,
    }
  ];

  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className={`portfolio-card group relative overflow-hidden ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
      </div>

      {/* Project Info */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <project.icon className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>
          {project.featured && (
            <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full">
              FEATURED
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium bg-muted text-muted-foreground px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20"></div>
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-border mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of recent work that demonstrates my passion for creating 
            meaningful digital experiences
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          
        </motion.div>
      </motion.div>
    </section>
  );
}