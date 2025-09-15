import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const topics = [
  "Artificial Intelligence",
  "Blockchain Technology", 
  "NFTs & Digital Assets",
  "Cloud Computing",
  "Metaverse Development",
  "Web3 Security",
  "Smart Contracts",
  "DeFi Protocols",
  "Quantum Computing",
  "Machine Learning",
  "Cybersecurity",
  "IoT & Edge Computing",
  "Augmented Reality",
  "Data Science",
  "DevOps & CI/CD"
];

export default function TopicsSection() {
  return (
    <section id="topics" className="py-20 space-bg">
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
            data-testid="topics-title"
          >
            Other Topics Covered
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore a comprehensive range of cutting-edge technologies and trending topics
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
          data-testid="topics-grid"
        >
          {topics.map((topic, index) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <Badge
                variant="outline"
                className="px-6 py-3 text-sm font-medium neon-glow hover:neon-glow-orange transition-all duration-300 cursor-default bg-card/50 backdrop-blur-sm border-primary/30 hover:border-accent/50"
                data-testid={`topic-${topic.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
              >
                {topic}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}