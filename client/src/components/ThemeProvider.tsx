import { createContext, useContext, useEffect, useState, useRef, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  showNotification: (message: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

interface Notification {
  id: string;
  message: string;
  isVisible: boolean;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [notification, setNotification] = useState<Notification | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
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

  const showNotification = (message: string) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    const id = Date.now().toString();
    setNotification({ id, message, isVisible: true });
    
    // Auto-hide after 15 seconds
    timeoutRef.current = setTimeout(() => {
      setNotification(null);
      timeoutRef.current = null;
    }, 15000);
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
    showNotification(`${newTheme === "dark" ? "Dark" : "Light"} mode activated`);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, showNotification }}>
      {children}
      
      {/* Notification Popup */}
      {notification && (
        <div 
          className="fixed top-4 right-4 z-[100] animate-in slide-in-from-right duration-300"
          data-testid="status-theme-notification"
        >
          <div className="neon-glow p-4 rounded-xl border border-primary/40 backdrop-blur-md max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full pulse-glow"></div>
              <span className="text-sm font-medium text-foreground">
                {notification.message}
              </span>
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