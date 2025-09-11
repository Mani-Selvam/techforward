import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Volume2, Maximize, Clock } from "lucide-react";

export default function VideoPreview() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    // todo: remove mock functionality
    setIsPlaying(!isPlaying);
    console.log(isPlaying ? 'Video paused' : 'Video playing');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-chart-2/10 text-chart-2 border-chart-2/20">
            Preview Experience
          </Badge>
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            See What Awaits You
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get a taste of the immersive 3D environment and interactive features
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover-elevate">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-accent/20 to-chart-2/20">
                {/* Video Placeholder with 3D Effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Background Elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg blur-xl transform rotate-6" />
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-chart-2/20 rounded-lg blur-lg transform -rotate-3" />
                    
                    {/* Main Play Button */}
                    <Button 
                      size="lg"
                      className={`relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-2xl transform hover:scale-110 transition-all duration-300 ${isPlaying ? 'animate-pulse' : ''}`}
                      onClick={handlePlayToggle}
                      data-testid="button-play-video"
                    >
                      <Play className={`w-8 h-8 ${isPlaying ? 'hidden' : 'block'}`} />
                      <div className={`w-6 h-6 bg-primary-foreground rounded ${isPlaying ? 'block' : 'hidden'}`} />
                    </Button>
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Badge variant="secondary" className="bg-background/50 backdrop-blur-sm">
                        <Clock className="w-3 h-3 mr-1" />
                        3:24
                      </Badge>
                      <span className="text-foreground font-medium">
                        Webinar Preview: 3D Collaboration Demo
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="icon" variant="ghost" className="text-foreground hover-elevate">
                        <Volume2 className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="ghost" className="text-foreground hover-elevate">
                        <Maximize className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Floating 3D Elements */}
                <div className="absolute top-4 right-4 space-y-2">
                  <div className="w-3 h-3 bg-primary/40 rounded-full blur-sm animate-pulse" />
                  <div className="w-2 h-2 bg-accent/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: "1s" }} />
                </div>
                <div className="absolute bottom-20 left-4 space-y-2">
                  <div className="w-4 h-4 bg-chart-2/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: "2s" }} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Video Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center p-6 hover-elevate border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Interactive Demo</h3>
              <p className="text-muted-foreground text-sm">See live 3D interactions and collaborative features in action</p>
            </Card>

            <Card className="text-center p-6 hover-elevate border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Volume2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Immersive Audio</h3>
              <p className="text-muted-foreground text-sm">Experience spatial audio that enhances the 3D environment</p>
            </Card>

            <Card className="text-center p-6 hover-elevate border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Maximize className="w-6 h-6 text-chart-2" />
              </div>
              <h3 className="font-semibold mb-2">Full Experience</h3>
              <p className="text-muted-foreground text-sm">Get a complete preview of the webinar format and features</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}