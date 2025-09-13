import { createContext, useContext, useEffect, useState, useRef, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeChoice {
  isVisible: boolean;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [showThemeChoice, setShowThemeChoice] = useState<ThemeChoice | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }

    // Check if theme choice popup has been shown before
    const hasSeenThemeChoice = localStorage.getItem("hasSeenThemeChoice");
    if (!hasSeenThemeChoice) {
      // Show popup after 5 seconds
      timeoutRef.current = setTimeout(() => {
        setShowThemeChoice({ isVisible: true });
      }, 5000);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChoice = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
    setShowThemeChoice(null);
    // Mark that user has seen the theme choice popup
    localStorage.setItem("hasSeenThemeChoice", "true");
  };

  const dismissThemeChoice = () => {
    setShowThemeChoice(null);
    // Mark that user has seen the theme choice popup
    localStorage.setItem("hasSeenThemeChoice", "true");
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      
      {/* One-time Theme Choice Popup */}
      {showThemeChoice && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div 
            className="neon-glow p-8 rounded-xl border border-primary/40 backdrop-blur-md max-w-md mx-4"
            data-testid="popup-theme-choice"
          >
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-neon">Choose Your Experience</h3>
                <p className="text-muted-foreground">
                  Would you like to change the theme colors for a better viewing experience?
                </p>
              </div>
              
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => handleThemeChoice("dark")}
                  className="btn-neon px-6 py-3 rounded-xl font-medium"
                  data-testid="button-choose-dark"
                >
                  Dark Mode
                </button>
                <button
                  onClick={() => handleThemeChoice("light")}
                  className="btn-neon-yellow px-6 py-3 rounded-xl font-medium"
                  data-testid="button-choose-light"
                >
                  Light Mode
                </button>
              </div>
              
              <button
                onClick={dismissThemeChoice}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                data-testid="button-dismiss-popup"
              >
                Keep current theme
              </button>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}