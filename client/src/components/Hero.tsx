import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.section 
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-accent/10 to-chart-2/5 gradient-animate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0">
                {/* Gradient blobs */}
                <motion.div
                    className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-1/2 right-20 w-96 h-96 bg-gradient-to-r from-accent/15 to-chart-2/15 rounded-full blur-3xl"
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 100, 0],
                        scale: [1, 0.8, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-r from-chart-2/20 to-primary/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 60, 0],
                        y: [0, -80, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 4
                    }}
                />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full`}
                        style={{
                            left: `${10 + (i * 8)}%`,
                            top: `${20 + (i * 5)}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 1, 0.3],
                            scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 4 + (i * 0.5),
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Event Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Badge
                            variant="outline"
                            className="mx-auto px-6 py-3 text-sm font-medium glass-card border-primary/40">
                            <Calendar className="w-4 h-4 mr-2 text-primary icon-hover" />
                            March 15, 2025 • 2:00 PM EST
                        </Badge>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.div 
                        className="space-y-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h1
                            className="text-5xl md:text-7xl font-bold text-foreground leading-tight"
                            style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                            Future of Digital
                            <br />
                            <motion.span 
                                className="bg-gradient-to-r from-primary via-accent to-chart-2 bg-clip-text text-transparent"
                                animate={{
                                    backgroundPosition: ["0%", "100%", "0%"]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                Collaboration
                            </motion.span>
                        </h1>
                        <motion.p 
                            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            Experience the next generation of webinars with
                            interactive 3D environments, real-time
                            collaboration, and cutting-edge technology.
                        </motion.p>
                    </motion.div>

                    {/* Event Stats */}
                    <motion.div 
                        className="flex flex-wrap justify-center gap-8 text-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                    >
                        <motion.div 
                            className="flex items-center gap-2 glass-card px-6 py-3 card-float"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Users className="w-4 h-4 text-primary icon-hover" />
                            <span>500+ Attendees</span>
                        </motion.div>
                        <motion.div 
                            className="flex items-center gap-2 glass-card px-6 py-3 card-float"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Clock className="w-4 h-4 text-accent icon-hover" />
                            <span>90 Minutes</span>
                        </motion.div>
                        <motion.div 
                            className="flex items-center gap-2 glass-card px-6 py-3 card-float"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Calendar className="w-4 h-4 text-chart-2 icon-hover" />
                            <span>Interactive Sessions</span>
                        </motion.div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                size="lg"
                                className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-accent border-primary-border hover-elevate rounded-2xl"
                                data-testid="button-register"
                                onClick={() => {
                                  console.log('Scrolling to #register');
                                  const targetElement = document.querySelector('#register') as HTMLElement;
                                  if (targetElement) {
                                    const headerOffset = 100;
                                    const elementPosition = targetElement.offsetTop;
                                    const offsetPosition = elementPosition - headerOffset;
                                    
                                    window.scrollTo({
                                      top: offsetPosition,
                                      behavior: 'smooth'
                                    });
                                  } else {
                                    console.log('Register element not found');
                                  }
                                }}>
                                Register Free Now
                            </Button>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                className="px-8 py-4 text-lg font-semibold glass-card border-accent/30 hover-elevate rounded-2xl"
                                data-testid="button-watch-preview"
                                onClick={() => {
                                  const targetElement = document.querySelector('#preview');
                                  if (targetElement) {
                                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    setTimeout(() => window.scrollBy({ top: -80, behavior: 'smooth' }), 100);
                                  }
                                }}>
                                Watch Preview
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Custom Animation Styles */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
        `,
                }}
            />
        </motion.section>
    );
}
