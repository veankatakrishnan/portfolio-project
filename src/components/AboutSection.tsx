import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BrainCircuit, Rocket, Target } from "./icons";

export function AboutSection() {
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

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20"></div>

      {/* Fixed: ref is now on a regular div */}
      <div ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto px-6 relative z-10"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-border mx-auto mb-8"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                A Quick Bio
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As a pre-final year Computer & Communication Engineering student,
                  my journey into the world of technology began with a fascination
                  for how digital products shape our lives. This curiosity has
                  evolved into a deep passion for software development,
                  problem-solving, and creating meaningful digital experiences.
                </p>

                <p>
                  I thrive on turning complex problems into elegant solutions.
                  I am driven by the
                  challenge of creating software that is both powerful and
                  user-friendly. My academic background has provided me with a
                  strong foundation in computer science principles, which I combine
                  with a hands-on approach to learning and building.
                </p>

                <p>
                  Beyond the screen, I'm an avid learner, constantly exploring new
                  technologies, contributing to open-source projects, and seeking
                  out opportunities to grow as both a developer and an individual.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 text-primary font-medium"
              >
                <span>Let's build something amazing together</span>
                <Rocket className="h-5 w-5" />
              </motion.div>
            </motion.div>

            {/* Keen Interests and Current Focus */}
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              {/* Keen Interests */}
              <motion.div variants={itemVariants} className="portfolio-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <BrainCircuit className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-semibold text-foreground">
                    Keen Interests
                  </h3>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Crytography</li>
                  <li>Cloud-Native Technologies & DevOps</li>
                  <li>Artificial Intelligence</li>
                  <li>Industry 4.0</li>
                </ul>
              </motion.div>

              {/* Current Focus */}
              <motion.div variants={itemVariants} className="portfolio-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-semibold text-foreground">
                    Current Focus
                  </h3>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Deepening my knowledge of Data Structures & Algorithms.</li>
                  <li>Exploring advanced concepts in Machine Leanring.</li>
                  <li>Contributing to open-source projects.</li>
                  <li>Full-Stack Web Development.</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
