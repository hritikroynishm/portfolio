import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Code2,
  Globe,
  Smartphone,
  Database,
} from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with React and Node.js featuring payment integration, admin dashboard, and real-time inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    category: "Full Stack",
  },
  {
    title: "Task Management App",
    description:
      "A responsive task management application with drag-and-drop functionality, team collaboration, and progress tracking.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    github: "https://github.com",
    live: "https://example.com",
    category: "Frontend",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard displaying current conditions, forecasts, and historical data with interactive charts.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
    tech: ["JavaScript", "Chart.js", "Weather API", "CSS3"],
    github: "https://github.com",
    live: "https://example.com",
    category: "Frontend",
  },
  {
    title: "Blog CMS",
    description:
      "A content management system for blogs with markdown support, user authentication, and SEO optimization.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b8d3",
    tech: ["Python", "Django", "PostgreSQL", "React"],
    github: "https://github.com",
    live: "https://example.com",
    category: "Full Stack",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website with glassmorphism design, smooth animations, and dark mode support.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    live: "https://example.com",
    category: "Frontend",
  },
  {
    title: "API Analytics Tool",
    description:
      "A comprehensive analytics tool for API monitoring with real-time data visualization and alerting system.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tech: ["Python", "FastAPI", "React", "D3.js"],
    github: "https://github.com",
    live: "https://example.com",
    category: "Full Stack",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
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

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and side projects. Each project
            represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="glass-dark border-0 overflow-hidden hover:border-primary/20 transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                    {project.category}
                  </Badge>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      asChild
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs bg-primary/5 border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 glass-dark hover:bg-white/5"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16 p-12 glass-dark rounded-3xl"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Interested in Working Together?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and collaborate on
            innovative projects. Let's create something amazing together!
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 px-8"
            asChild
          >
            <a href="/contact">
              <Code2 className="w-4 h-4 mr-2" />
              Start a Project
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
