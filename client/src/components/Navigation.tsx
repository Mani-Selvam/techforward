import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Menu, X, ExternalLink, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('Mobile menu toggled:', !isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    console.log(`Scrolling to ${sectionId}`);
    setIsMenuOpen(false);
    
    // Get the target element
    const targetElement = document.querySelector(sectionId) as HTMLElement;
    if (targetElement) {
      // Use direct scroll with offset for better precision
      const headerOffset = 100;
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.log(`Element ${sectionId} not found`);
      // If no specific element, scroll to approximate positions
      const scrollPositions: { [key: string]: number } = {
        '#about': window.innerHeight, // After hero
        '#speakers': window.innerHeight * 2.5, // After countdown
        '#schedule': window.innerHeight * 4, // After speakers  
        '#preview': window.innerHeight * 5.5, // Video section
        '#register': window.innerHeight * 6.5, // Registration section
      };
      
      const position = scrollPositions[sectionId];
      if (position) {
        window.scrollTo({
          top: position,
          behavior: 'smooth'
        });
      }
    }
  };

  const navItems = [
    { label: 'AGENDA', href: '#about' },
    { label: 'SPONSORSHIP', href: '#speakers' },
    { label: 'PLAN YOUR VISIT', href: '#schedule' },
    { label: 'BL WEEK', href: '#preview' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 neon-glow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center hover-elevate pulse-glow">
              <Calendar className="w-5 h-5 text-primary-foreground icon-neon" />
            </div>
            <div>
              <span className="font-bold text-lg" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Blockchain Life
              </span>
              <Badge variant="outline" className="ml-2 text-xs neon-glow text-primary border-primary/40">
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
                className="text-muted-foreground hover:text-foreground nav-link transition-colors duration-200 font-medium"
                data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover-elevate rounded-xl"
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 icon-neon" />
              ) : (
                <Moon className="w-5 h-5 icon-neon" />
              )}
            </Button>
            <Button 
              size="sm" 
              className="btn-neon rounded-xl"
              data-testid="button-nav-register"
              onClick={() => scrollToSection('#register')}
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
                  data-testid={`nav-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4 space-y-3 border-t border-border/20">
                <div className="flex gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="hover-elevate rounded-xl"
                    data-testid="button-mobile-theme-toggle"
                  >
                    {theme === "dark" ? (
                      <Sun className="w-5 h-5 icon-neon" />
                    ) : (
                      <Moon className="w-5 h-5 icon-neon" />
                    )}
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 btn-neon"
                    data-testid="button-mobile-register"
                    onClick={() => scrollToSection('#register')}
                  >
                    Register Free
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}