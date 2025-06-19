import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Eye,
  Calendar,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Award,
  Code2,
  GraduationCap,
  Briefcase,
} from "lucide-react";

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

export default function Resume() {
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
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Download or view my professional resume to learn more about my
            experience, skills, and achievements.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="outline" size="lg" className="glass-dark px-8">
              <Eye className="w-4 h-4 mr-2" />
              View Online
            </Button>
          </div>
        </motion.div>

        {/* Resume Preview */}
        <motion.div variants={itemVariants} className="mb-12">
          <Card className="glass-dark p-8 lg:p-12 border-0">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold gradient-text mb-2">
                Hritik Kumar
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Full Stack Web Developer
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  hritikroynishn@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Remote / New York
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-primary" />
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Passionate and detail-oriented Full Stack Web Developer with 2+
                years of experience in creating responsive, user-friendly web
                applications. Proficient in modern frontend and backend
                technologies including React, JavaScript, Python, and SQL.
                Committed to writing clean, efficient code and delivering
                high-quality solutions that meet business objectives.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-primary" />
                Technical Skills
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {["HTML5", "CSS3", "JavaScript", "React", "TypeScript"].map(
                      (skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="bg-primary/5 border-primary/20"
                        >
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Node.js", "SQL", "PostgreSQL", "MongoDB"].map(
                      (skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="bg-primary/5 border-primary/20"
                        >
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-primary" />
                Work Experience
              </h3>
              <div className="space-y-8">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-semibold">
                        Frontend Developer
                      </h4>
                      <p className="text-primary font-medium">
                        Tech Solutions Inc.
                      </p>
                    </div>
                    <div className="text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        2023 - Present
                      </div>
                    </div>
                  </div>
                  <ul className="text-muted-foreground space-y-2 ml-4">
                    <li>
                      • Developed responsive web applications using React and
                      TypeScript
                    </li>
                    <li>
                      • Collaborated with design team to implement pixel-perfect
                      UI/UX
                    </li>
                    <li>
                      • Optimized application performance resulting in 40%
                      faster load times
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-semibold">
                        Junior Web Developer
                      </h4>
                      <p className="text-primary font-medium">Digital Agency</p>
                    </div>
                    <div className="text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        2022 - 2023
                      </div>
                    </div>
                  </div>
                  <ul className="text-muted-foreground space-y-2 ml-4">
                    <li>
                      • Built custom websites for clients using HTML, CSS, and
                      JavaScript
                    </li>
                    <li>• Maintained and updated existing web applications</li>
                    <li>
                      • Implemented responsive design principles for mobile
                      compatibility
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h3>
              <div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-semibold">
                      Bachelor of Computer Science
                    </h4>
                    <p className="text-primary font-medium">
                      University of Technology
                    </p>
                  </div>
                  <div className="text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      2020 - 2024
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Specialized in web development and software engineering with a
                  focus on modern programming languages and frameworks.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 glass-dark rounded-lg">
                  <Award className="w-6 h-6 text-accent" />
                  <div>
                    <h4 className="font-semibold">React Developer</h4>
                    <p className="text-sm text-muted-foreground">Meta - 2023</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 glass-dark rounded-lg">
                  <Award className="w-6 h-6 text-accent" />
                  <div>
                    <h4 className="font-semibold">JavaScript Algorithms</h4>
                    <p className="text-sm text-muted-foreground">
                      freeCodeCamp - 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center">
          <Card className="glass-dark p-8 border-0">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Let's Work Together
            </h3>
            <p className="text-muted-foreground mb-6">
              Interested in my profile? Let's discuss how I can contribute to
              your next project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <a href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-dark"
                asChild
              >
                <a href="/projects">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Projects
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
