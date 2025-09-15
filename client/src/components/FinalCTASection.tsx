import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="py-20 space-bg relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 
            className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
            data-testid="final-cta-title"
          >
            Don't Miss the Future.
            <br />
            <span className="text-primary">Join TechAra Today!</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Start your journey into the future of technology with our comprehensive webinar series
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="px-10 py-6 text-xl font-bold orange-glow rounded-xl group"
                data-testid="button-register-now"
              >
                Register Now
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-6 text-xl font-semibold border-foreground/30 bg-background/10 backdrop-blur-sm rounded-xl group"
                data-testid="button-download-brochure"
              >
                <Download className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-200" />
                Download Brochure
              </Button>
            </motion.div>
          </motion.div>

          {/* Additional cosmic elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <div className="flex justify-center">
              <div className="cosmic-portal w-24 h-24 opacity-30"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}