import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Blockchain Developer",
    company: "Tech Innovations Inc.",
    content: "TechAra's Web3 course completely transformed my career. The hands-on projects and expert mentorship helped me land my dream job in blockchain development.",
    rating: 5,
    avatar: "SC"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Startup Founder",
    company: "DeFi Solutions",
    content: "The insights I gained from TechAra's DeFi protocols course were instrumental in building my fintech startup. The practical knowledge was invaluable.",
    rating: 5,
    avatar: "MR"
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Software Engineer",
    company: "Global Tech Corp",
    content: "As someone transitioning from traditional software development, TechAra made blockchain concepts accessible and practical. Highly recommended!",
    rating: 5,
    avatar: "AP"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Product Manager",
    company: "Innovation Labs",
    content: "The AI & Blockchain integration course opened my eyes to future possibilities. The quality of instruction and community support is outstanding.",
    rating: 5,
    avatar: "DK"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/20">
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
            data-testid="testimonials-title"
          >
            What Our Learners Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their careers with TechAra
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card 
                className="h-full bg-card/80 backdrop-blur-sm border-primary/20 neon-glow-blue hover:border-primary/40 transition-all duration-300"
                data-testid={`testimonial-${testimonial.id}`}
              >
                <CardContent className="p-6 space-y-4">
                  {/* Rating Stars */}
                  <div className="flex justify-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  {/* Testimonial Content */}
                  <p className="text-muted-foreground text-center italic">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Avatar and Info */}
                  <div className="flex flex-col items-center space-y-2 pt-4 border-t border-border/20">
                    <Avatar className="w-12 h-12 border-2 border-primary/30">
                      <AvatarImage src="" alt={testimonial.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}