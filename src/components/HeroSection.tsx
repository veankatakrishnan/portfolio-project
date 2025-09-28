import { motion } from "framer-motion";
import { Download, Mail } from "./icons";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const handleDownloadResume = () => {
    // This will trigger a download for the resume.pdf file located in the public directory
    const link = document.createElement('a');
    link.href = '/VeankataKrishnan_Resume.pdf'; 
    link.download = 'VeankataKrishnan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse -translate-x-[65%] -translate-y-[65%]"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000 translate-x-[65%] translate-y-[65%]"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 text-center relative z-10"
      >

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-foreground">Hello, I'm</span>
            <br />
            <span className="gradient-text">Veankata Krishnan</span>
          </h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A Pre Final-year Computer & Communication Engineering student passionate about Software Development & Problem Solving.
          </motion.p>
        </motion.div>

        {/* Tagline */}
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-muted-foreground font-mono">
            "A mind needs code as a sword needs a whetstone, if it is to keep its edge."
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-hero text-background hover:text-white flex items-center gap-3 group"
          >
            <Mail className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            Hire Me
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadResume}
            className="btn-outline flex items-center gap-3 group"
          >
            <Download className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
            Download Resume
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}