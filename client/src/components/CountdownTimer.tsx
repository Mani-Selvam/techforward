import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  // todo: remove mock functionality - set target date to March 15, 2025
  const targetDate = new Date('2025-03-15T14:00:00').getTime();
  
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
              <Card 
                key={unit.label}
                className="hover-elevate border-border/50 bg-card/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                data-testid={`countdown-${unit.label.toLowerCase()}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative">
                    {/* 3D Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg transform rotate-1" />
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-chart-2/10 rounded-lg transform -rotate-1" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-2">
                        {unit.value.toString().padStart(2, '0')}
                      </div>
                      <div className="text-muted-foreground font-medium text-sm md:text-base">
                        {unit.label}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-primary/5 via-accent/5 to-chart-2/5 rounded-lg border border-border/20">
            <p className="text-muted-foreground">
              <strong className="text-foreground">March 15, 2025 • 2:00 PM EST</strong>
              <br />
              Get ready for an unforgettable immersive experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}