import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Twitter, ExternalLink } from "lucide-react";

// todo: remove mock functionality
const speakers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "AI Research Director",
    company: "TechForward Labs",
    bio: "Leading expert in immersive digital experiences and AI-powered collaboration tools.",
    avatar: "",
    social: {
      linkedin: "#",
      twitter: "#"
    },
    topics: ["AI Integration", "Future Tech"]
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Creative Technology Lead",
    company: "Innovation Studios",
    bio: "Pioneer in 3D web experiences and interactive digital environments.",
    avatar: "",
    social: {
      linkedin: "#",
      twitter: "#"
    },
    topics: ["3D Design", "Web Innovation"]
  },
];

export default function SpeakerCards() {
  return (
    <section className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-accent/10 text-accent border-accent/20">
            Expert Speakers
          </Badge>
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Meet Your Guides
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn from industry pioneers who are shaping the future of digital collaboration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {speakers.map((speaker) => (
            <Card 
              key={speaker.id} 
              className="group hover-elevate border-border/50 bg-card/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
              data-testid={`card-speaker-${speaker.id}`}
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <Avatar className="w-24 h-24 mx-auto ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <AvatarImage src={speaker.avatar} alt={speaker.name} />
                    <AvatarFallback className="text-2xl font-semibold bg-gradient-to-br from-primary to-accent text-primary-foreground">
                      {speaker.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Badge variant="secondary" className="text-xs">
                      Featured
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-xl mb-1">{speaker.name}</h3>
                    <p className="text-primary font-medium">{speaker.title}</p>
                    <p className="text-muted-foreground text-sm">{speaker.company}</p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {speaker.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {speaker.topics.map((topic) => (
                      <Badge key={topic} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-center gap-3 pt-4">
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="hover-elevate"
                      data-testid={`button-linkedin-${speaker.id}`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="hover-elevate"
                      data-testid={`button-twitter-${speaker.id}`}
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="hover-elevate"
                      data-testid={`button-profile-${speaker.id}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}