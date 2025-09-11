import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Menu, X, ExternalLink } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('Mobile menu toggled:', !isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    // todo: remove mock functionality
    console.log(`Scrolling to ${sectionId}`);
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Preview', href: '#preview' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <span className="font-bold text-lg" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                TechForward
              </span>
              <Badge variant="outline" className="ml-2 text-xs bg-primary/10 text-primary border-primary/20">
                2025
              </Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover-elevate"
              data-testid="button-nav-login"
            >
              Sign In
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-primary to-accent"
              data-testid="button-nav-register"
            >
              Register Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover-elevate"
            onClick={toggleMenu}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/20 bg-background/95 backdrop-blur-md">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200 rounded-lg"
                  data-testid={`nav-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4 space-y-3 border-t border-border/20">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-start hover-elevate"
                  data-testid="button-mobile-login"
                >
                  Sign In
                </Button>
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-primary to-accent"
                  data-testid="button-mobile-register"
                >
                  Register Free
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}