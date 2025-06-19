import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code2,
  Database,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const skills = [
  { name: "HTML", icon: Globe, category: "Frontend" },
  { name: "CSS", icon: Globe, category: "Frontend" },
  { name: "JavaScript", icon: Code2, category: "Frontend" },
  { name: "React", icon: Code2, category: "Frontend" },
  { name: "Python", icon: Code2, category: "Backend" },
  { name: "SQL", icon: Database, category: "Database" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
      </div>

      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-block"
                >
                  <Badge
                    variant="secondary"
                    className="glass-dark px-4 py-2 text-sm font-medium"
                  >
                    👋 Hello, I'm
                  </Badge>
                </motion.div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
                  <span className="gradient-text">Hritik Kumar</span>
                </h1>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                  Web Developer
                </h2>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              >
                Passionate full-stack developer crafting beautiful, functional
                web experiences with modern technologies. I specialize in
                creating responsive applications that solve real-world problems.
              </motion.p>

              {/* Skills */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="outline"
                          className="glass-dark px-4 py-2 flex items-center gap-2 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                        >
                          <Icon className="w-4 h-4" />
                          {skill.name}
                        </Badge>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                >
                  <Link to="/projects">
                    View My Work
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="glass-dark hover:bg-white/10 px-8"
                  asChild
                >
                  <Link to="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Get In Touch
                  </Link>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                <span className="text-sm text-muted-foreground">Connect:</span>
                <div className="flex gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="glass-dark rounded-full hover:bg-white/10"
                    asChild
                  >
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="glass-dark rounded-full hover:bg-white/10"
                    asChild
                  >
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="glass-dark rounded-full hover:bg-white/10"
                    asChild
                  >
                    <a href="mailto:hritikroynishn@gmail.com">
                      <Mail className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl scale-110"
                />

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-3xl overflow-hidden glass-dark p-2"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/assets/21ef97add09d492fa7545036341a3248/screenshot-2024-07-09-233417-56625e?format=webp&width=800"
                    alt="Hritik Kumar"
                    className="w-full h-full object-cover rounded-2xl"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 glass-dark rounded-2xl flex items-center justify-center"
                >
                  <Code2 className="w-8 h-8 text-primary" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 glass-dark rounded-2xl flex items-center justify-center"
                >
                  <Globe className="w-8 h-8 text-accent" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Quick Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-dark p-8 text-center border-0">
              <h3 className="text-3xl font-bold gradient-text mb-2">2+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </Card>

            <Card className="glass-dark p-8 text-center border-0">
              <h3 className="text-3xl font-bold gradient-text mb-2">10+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </Card>

            <Card className="glass-dark p-8 text-center border-0">
              <h3 className="text-3xl font-bold gradient-text mb-2">6</h3>
              <p className="text-muted-foreground">Technologies Mastered</p>
            </Card>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
