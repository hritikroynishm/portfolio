import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Database,
  Globe,
  Server,
  Smartphone,
  Palette,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const skills = [
  { name: "HTML5", level: 95, icon: Globe, category: "Frontend" },
  { name: "CSS3", level: 90, icon: Palette, category: "Frontend" },
  { name: "JavaScript", level: 88, icon: Code2, category: "Frontend" },
  { name: "React", level: 85, icon: Code2, category: "Frontend" },
  { name: "Python", level: 80, icon: Server, category: "Backend" },
  { name: "SQL", level: 85, icon: Database, category: "Database" },
];

const experiences = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    location: "Remote",
    description:
      "Developing responsive web applications using React and modern frontend technologies.",
  },
  {
    title: "Junior Web Developer",
    company: "Digital Agency",
    period: "2022 - 2023",
    location: "New York",
    description:
      "Built custom websites and maintained existing applications for various clients.",
  },
];

const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "University of Technology",
    period: "2020 - 2024",
    description: "Specialized in web development and software engineering.",
  },
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

export default function About() {
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
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate web developer who loves creating beautiful,
            functional, and user-friendly websites and applications.
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.section variants={itemVariants} className="mb-20">
          <Card className="glass-dark p-8 lg:p-12 border-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 gradient-text">
                  My Journey
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Hello! I'm Hritik Kumar, a passionate web developer with a
                    strong foundation in both frontend and backend technologies.
                    My journey in web development started during my college
                    years, and I've been constantly learning and growing ever
                    since.
                  </p>
                  <p>
                    I specialize in creating responsive, user-friendly websites
                    and applications using modern technologies like React,
                    JavaScript, and Python. I believe in writing clean,
                    efficient code and staying up-to-date with the latest
                    industry trends.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new
                    technologies, contributing to open-source projects, or
                    sharing knowledge with fellow developers.
                  </p>
                </div>
                <div className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Link to="/contact">Let's Work Together</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <Card className="glass-dark p-6 border-0">
                    <Calendar className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">Experience</h3>
                    <p className="text-muted-foreground">2+ Years</p>
                  </Card>

                  <Card className="glass-dark p-6 border-0">
                    <Award className="w-8 h-8 text-accent mb-4" />
                    <h3 className="font-semibold mb-2">Projects</h3>
                    <p className="text-muted-foreground">10+ Completed</p>
                  </Card>

                  <Card className="glass-dark p-6 border-0">
                    <MapPin className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-muted-foreground">Remote</p>
                  </Card>

                  <Card className="glass-dark p-6 border-0">
                    <Code2 className="w-8 h-8 text-accent mb-4" />
                    <h3 className="font-semibold mb-2">Languages</h3>
                    <p className="text-muted-foreground">6 Technologies</p>
                  </Card>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Skills Section */}
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="glass-dark p-6 border-0 hover:border-primary/20 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{skill.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {skill.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                        />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <Card className="glass-dark p-8 border-0 hover:border-primary/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-muted-foreground">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Education
          </h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass-dark p-8 border-0 hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                      <p className="text-primary font-semibold mb-2">
                        {edu.school}
                      </p>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
