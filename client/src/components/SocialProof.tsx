import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

// todo: remove mock functionality
const testimonials = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "CTO",
    company: "InnovateCorp",
    avatar: "",
    rating: 5,
    quote: "The 3D webinar experience was absolutely mind-blowing. It felt like we were all in the same room collaborating."
  },
  {
    id: 2,
    name: "Maria Garcia",
    role: "Design Director",
    company: "CreativeStudio",
    avatar: "",
    rating: 5,
    quote: "Revolutionary approach to digital events. The interactive elements kept everyone engaged throughout."
  },
  {
    id: 3,
    name: "David Kim",
    role: "Product Manager",
    company: "TechVision",
    avatar: "",
    rating: 5,
    quote: "Finally, a webinar that doesn't feel like watching paint dry. The 3D environment was incredibly immersive."
  }
];

const partners = [
  { name: "TechForward", logo: "TF" },
  { name: "InnovateCorp", logo: "IC" }
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            What People Say
          </Badge>
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Loved by Professionals
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands who have experienced the future of digital collaboration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="group hover-elevate border-border/50 bg-card/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
              data-testid={`card-testimonial-${testimonial.id}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-muted-foreground italic leading-relaxed pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry Leaders */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-8 text-muted-foreground">
            Industry Leaders
          </h3>
          <div className="flex justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="group hover-elevate transition-all duration-300 hover:opacity-100"
                data-testid={`logo-partner-${index}`}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center border border-border/30 group-hover:border-primary/40 transition-all duration-300 shadow-lg">
                  <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {partner.logo}
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}