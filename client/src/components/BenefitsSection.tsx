import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase, Rocket, Heart } from "lucide-react";

const benefits = [
  {
    id: "students",
    title: "Students",
    subtitle: "Kickstart your career in tech",
    description: "Get ahead of the curve with cutting-edge skills that employers are looking for in the digital age.",
    icon: GraduationCap,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: "professionals",
    title: "Professionals",
    subtitle: "Upskill with blockchain & AI",
    description: "Stay relevant and advance your career by mastering the technologies that are reshaping industries.",
    icon: Briefcase,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "entrepreneurs",
    title: "Entrepreneurs",
    subtitle: "Leverage Web3 for business",
    description: "Discover how blockchain and Web3 technologies can revolutionize your business models and operations.",
    icon: Rocket,
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: "enthusiasts",
    title: "Enthusiasts",
    subtitle: "Explore futuristic innovations",
    description: "Feed your curiosity about emerging technologies and be part of the future-building community.",
    icon: Heart,
    gradient: "from-green-500 to-teal-500"
  }
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 space-bg">
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
            data-testid="benefits-title"
          >
            Who Can Benefit from This Program?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're starting out or scaling up, TechAra has something for everyone
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card 
                className="h-full bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300"
                data-testid={`benefit-card-${benefit.id}`}
              >
                <CardHeader className="text-center space-y-4">
                  <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle 
                      className="text-xl font-bold text-foreground"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {benefit.title}
                    </CardTitle>
                    <p className="text-sm font-semibold text-primary">
                      {benefit.subtitle}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {benefit.description}
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