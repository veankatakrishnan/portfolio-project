import { motion } from "framer-motion";
import { SocialLinks } from "./SocialLinks";
import { Heart, Code, Coffee } from "./icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative py-20 border-t border-border/50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 relative z-10"
      >
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="font-bold text-2xl gradient-text font-mono">
              #include&lt;#portfolio.h&gt;
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  whileHover={{ x: 4 }}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Let's Connect</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Chennai, Tamil Nadu, India</p>
              <a
                href="mailto:veankatakrishnan@gmail.com"
                className="hover:text-primary transition-colors block"
              >
                veankatakrishnan@gmail.com
              </a>
              <a
                href="tel:+919499033035"
                className="hover:text-primary transition-colors block"
              >
                +91 9499033035
              </a>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="mb-12">
          <SocialLinks />
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Code className="h-4 w-4" />
            <span>© {currentYear} Veankata Krishnan. All rights reserved.</span>
          </div>
        </motion.div>

        {/* Back to Top */}
        <motion.button
          variants={itemVariants}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="absolute -top-6 right-6 p-3 bg-primary rounded-full text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all duration-200"
          title="Back to top"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </motion.div>
    </footer>
  );
}