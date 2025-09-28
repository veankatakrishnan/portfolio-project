import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Code,
  Mail,
  ExternalLink,
} from "./icons";

interface SocialLinksProps {
  variant?: "floating" | "footer";
  className?: string;
}

export function SocialLinks({ variant = "footer", className = "" }: SocialLinksProps) {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Veankata-Krishnan",
      icon: Github,
      color: "hover:text-foreground",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/veankatakrishnan/",
      icon: Linkedin,
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/veankata.krishnan/",
      icon: Instagram,
      color: "hover:text-pink-400",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/veankatakrishnan/",
      icon: Code,
      color: "hover:text-yellow-400",
    },
    {
      name: "Email",
      url: "mailto:veankatakrishnan@gmail.com",
      icon: Mail,
      color: "hover:text-green-400",
    },
  ];

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
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  if (variant === "floating") {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4 ${className}`}
      >
        {socialLinks.map((social) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.2, 
              x: -8,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.9 }}
            className={`p-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full text-muted-foreground ${social.color} transition-all duration-200 group relative`}
            title={social.name}
          >
            <social.icon className="h-5 w-5" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-background border border-border rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              {social.name}
            </div>
          </motion.a>
        ))}
        
        {/* Connecting Line */}
        <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-border to-transparent -z-10"></div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`flex justify-center gap-6 ${className}`}
    >
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.1, 
            y: -4,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.9 }}
          className={`p-4 bg-card/50 border border-border/50 rounded-xl text-muted-foreground ${social.color} transition-all duration-200 group hover:shadow-glow`}
          title={social.name}
        >
          <social.icon className="h-6 w-6" />
          
          {/* External link indicator */}
          <ExternalLink className="h-3 w-3 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </motion.a>
      ))}
    </motion.div>
  );
}