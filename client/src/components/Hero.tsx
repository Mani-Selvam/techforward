import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users } from "lucide-react";
import heroImage from "@assets/generated_images/3D_webinar_hero_background_699f4171.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
        <div className="absolute inset-0 bg-background/40" />
      </div>
      
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-pulse absolute top-20 left-20 w-4 h-4 bg-primary/20 rounded-full blur-sm" 
             style={{ animation: "float 6s ease-in-out infinite" }} />
        <div className="animate-pulse absolute top-40 right-32 w-6 h-6 bg-accent/30 rounded-full blur-sm" 
             style={{ animation: "float 8s ease-in-out infinite 2s" }} />
        <div className="animate-pulse absolute bottom-40 left-40 w-3 h-3 bg-chart-2/25 rounded-full blur-sm" 
             style={{ animation: "float 7s ease-in-out infinite 1s" }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Event Badge */}
          <Badge variant="outline" className="mx-auto px-4 py-2 text-sm font-medium bg-background/80 backdrop-blur-sm border-primary/30 text-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            March 15, 2025 • 2:00 PM EST
          </Badge>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight drop-shadow-lg" 
                style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Future of Digital
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-chart-2 bg-clip-text text-transparent">
                Collaboration
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Experience the next generation of webinars with interactive 3D environments, 
              real-time collaboration, and cutting-edge technology.
            </p>
          </div>

          {/* Event Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/30 text-foreground">
              <Users className="w-4 h-4 text-primary" />
              <span>500+ Attendees</span>
            </div>
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/30 text-foreground">
              <Clock className="w-4 h-4 text-accent" />
              <span>90 Minutes</span>
            </div>
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/30 text-foreground">
              <Calendar className="w-4 h-4 text-chart-2" />
              <span>Interactive Sessions</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-accent border-primary-border transform hover:scale-105 transition-all duration-200"
              data-testid="button-register"
            >
              Register Free Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold bg-background/20 backdrop-blur-sm border-border/30 hover-elevate"
              data-testid="button-watch-preview"
            >
              Watch Preview
            </Button>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
        `
      }} />
    </section>
  );
}