import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import techEntrepreneur from "@assets/generated_images/Tech_entrepreneur_character_5fda40d4.png";
import creativeDesigner from "@assets/generated_images/Creative_designer_character_c28b0128.png";

const characters = [
  {
    id: "entrepreneur",
    name: "Alex Chen",
    role: "Tech Entrepreneur",
    image: techEntrepreneur,
    description: "Building the future of digital innovation"
  },
  {
    id: "designer",
    name: "Maya Rodriguez",
    role: "Creative Director",
    image: creativeDesigner,
    description: "Designing immersive digital experiences"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function CharactersGallery() {
  return (
    <section className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge 
            variant="outline" 
            className="mb-4 bg-primary/10 text-primary border-primary/20"
          >
            <Users className="w-4 h-4 mr-2" />
            Meet Our Speakers
          </Badge>
          <h2 
            className="text-4xl font-bold mb-4" 
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Industry Leaders
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join these exceptional professionals as they share insights on the future of digital collaboration
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {characters.map((character) => (
            <motion.div
              key={character.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group"
              data-testid={`img-character-${character.id}`}
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover-elevate transition-all duration-300">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <img
                    src={character.image}
                    alt={`${character.name} - ${character.role}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-sm mb-1">{character.name}</h3>
                  <p className="text-xs text-primary font-medium mb-2">{character.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {character.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}