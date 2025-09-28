import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, BrainCog, TerminalSquare } from "./icons";

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-8 w-8" />,
      skills: ["C", "Python", "Java", "JavaScript", "Bootstrap CSS", "JavaScript", "HTML5", "CSS3"],
    },
    {
      title: "Concepts", 
      icon: <BrainCog className="h-8 w-8" />,
      skills: ["Operating Systems", "DBMS", "DSA", "Internet of Things", "Machine Learning","Deep Learning"],
    },
    {
      title: "Development Tools",
      icon: <TerminalSquare className="h-8 w-8" />,
      skills: ["Git & GitHub", "VS Code", "Jupyter Notebook", "Spyder", "CodeBlocks", "Anaconda"],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-6"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Technical <span className="text-foreground">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-foreground mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl p-6 h-full transition-all duration-300 group-hover:border-foreground/50 group-hover:shadow-xl">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-foreground/10 rounded-xl mb-6 group-hover:bg-foreground/20 transition-colors">
                  <div className="text-foreground">
                    {category.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        delay: index * 0.1 + skillIndex * 0.05,
                        duration: 0.4 
                      }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-foreground rounded-full"></div>
                      <span className="text-muted-foreground font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div 
          variants={itemVariants} 
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Angular", "Tailwind","Tensorflow", "Scikit Learn", "Arduino UNO", "Raspberry Pi", "Esp32", "GNU Radio",
              "Power BI", "Excel", "Canva", "Adobe Photoshop"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "hsl(var(--foreground) / 0.1)"
                }}
                className="px-4 py-2 bg-muted/50 border border-border rounded-full text-sm font-medium text-muted-foreground cursor-default transition-all duration-200 hover:border-foreground/50"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}