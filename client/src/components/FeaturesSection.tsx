import { motion } from "framer-motion";
import { CheckCircle, Users, BookOpen, Globe } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Modern Curriculum",
    description: "Latest industry-relevant content updated regularly"
  },
  {
    icon: CheckCircle,
    title: "Hands-on Projects",
    description: "Real-world projects to build your portfolio"
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Connect with learners from around the world"
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Learn from industry leaders and pioneers"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/20">
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
            data-testid="features-title"
          >
            TechAra Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to excel in the future of technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-glow">
                  <feature.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                {/* Neon glow line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-primary to-accent opacity-50"></div>
              </div>
              <h3 
                className="text-xl font-bold mb-3 text-foreground"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
                data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}