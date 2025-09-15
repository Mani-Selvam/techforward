import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Globe, Shield, Zap, Brain, Code } from "lucide-react";

const courses = [
  {
    id: "web3-fundamentals",
    title: "Web3 Fundamentals",
    description: "Master the basics of decentralized web and blockchain technology",
    icon: Globe,
    level: "Beginner",
    duration: "4 weeks"
  },
  {
    id: "smart-contracts",
    title: "Smart Contract Development",
    description: "Build and deploy smart contracts on Ethereum and other blockchains",
    icon: Code,
    level: "Intermediate",
    duration: "6 weeks"
  },
  {
    id: "blockchain-security",
    title: "Blockchain Security",
    description: "Learn security best practices and audit smart contracts",
    icon: Shield,
    level: "Advanced",
    duration: "8 weeks"
  },
  {
    id: "defi-protocols",
    title: "DeFi Protocols",
    description: "Understand and build decentralized finance applications",
    icon: Zap,
    level: "Intermediate",
    duration: "5 weeks"
  },
  {
    id: "ai-blockchain",
    title: "AI & Blockchain Integration",
    description: "Explore the intersection of artificial intelligence and blockchain",
    icon: Brain,
    level: "Advanced",
    duration: "7 weeks"
  },
  {
    id: "quantum-computing",
    title: "Quantum Computing Basics",
    description: "Introduction to quantum computing and its impact on cryptography",
    icon: Cpu,
    level: "Beginner",
    duration: "3 weeks"
  }
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 space-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
            data-testid="courses-title"
          >
            Explore Our Best Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive deep into cutting-edge technologies with expert-led courses designed for the future
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card 
                className="h-full neon-glow hover:neon-glow-blue transition-all duration-300 bg-card/80 backdrop-blur-sm border-primary/20"
                data-testid={`course-card-${course.id}`}
              >
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <course.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle 
                      className="text-xl font-bold text-foreground"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {course.title}
                    </CardTitle>
                    <div className="flex justify-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {course.level}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {course.duration}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {course.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}