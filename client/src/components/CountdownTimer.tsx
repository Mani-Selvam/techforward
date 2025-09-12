import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  // Event date: September 15, 2025
  const targetDate = new Date('2025-09-15T14:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 bg-accent/10 text-accent border-accent/20">
            <Clock className="w-4 h-4 mr-2" />
            Event Countdown
          </Badge>
          
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Don't Miss Out
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            The future of digital collaboration starts in:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <Card 
                  className="hover-elevate border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300"
                  data-testid={`countdown-${unit.label.toLowerCase()}`}
                >
                <CardContent className="p-6 text-center">
                  <div className="relative">
                    {/* 3D Effect Background with Animation */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg"
                      animate={{ 
                        rotate: [1, 2, 1],
                        scale: [1, 1.02, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-accent/10 to-chart-2/10 rounded-lg"
                      animate={{ 
                        rotate: [-1, -2, -1],
                        scale: [1, 0.98, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={unit.value}
                          initial={{ y: -20, opacity: 0, scale: 0.8 }}
                          animate={{ y: 0, opacity: 1, scale: 1 }}
                          exit={{ y: 20, opacity: 0, scale: 0.8 }}
                          transition={{ 
                            duration: 0.5,
                            ease: "easeInOut",
                            scale: { type: "spring", stiffness: 300, damping: 20 }
                          }}
                          className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-2"
                        >
                          {unit.value.toString().padStart(2, '0')}
                        </motion.div>
                      </AnimatePresence>
                      <motion.div 
                        className="text-muted-foreground font-medium text-sm md:text-base"
                        animate={{ 
                          scale: unit.label === 'Seconds' ? [1, 1.1, 1] : 1,
                        }}
                        transition={{ 
                          duration: 1,
                          repeat: unit.label === 'Seconds' ? Infinity : 0,
                          ease: "easeInOut"
                        }}
                      >
                        {unit.label}
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-primary/5 via-accent/5 to-chart-2/5 rounded-lg border border-border/20">
            <p className="text-muted-foreground">
              <strong className="text-foreground">September 15, 2025 • 2:00 PM EST</strong>
              <br />
              Get ready for an unforgettable immersive experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}