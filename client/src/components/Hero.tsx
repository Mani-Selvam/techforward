import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Globe, Building2, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.section 
            className="relative min-h-screen flex items-center justify-center overflow-hidden space-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    
                    {/* Left Side Content */}
                    <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                        {/* Event Date Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center lg:text-left"
                        >
                            <div className="inline-block px-4 py-2 text-sm font-medium text-accent bg-accent/10 border border-accent/30 rounded-full mb-4">
                                LIVE WEBINAR SERIES • INTERACTIVE LEARNING
                            </div>
                        </motion.div>

                        {/* Main Title */}
                        <motion.div 
                            className="space-y-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className="text-foreground" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                                    Transform Your Future with
                                </span>
                                <br />
                                <span className="text-primary" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                                    TechAra Webinars
                                </span>
                            </h1>
                            
                            {/* Subtitle */}
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                                Learn Web3, Blockchain, and Future Tech from Industry Leaders
                            </p>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div 
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    size="lg"
                                    className="px-8 py-4 text-lg font-semibold orange-glow rounded-xl"
                                    data-testid="button-join-webinar"
                                >
                                    JOIN WEBINAR
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="px-8 py-4 text-lg font-semibold border-foreground/30 bg-background/10 backdrop-blur-sm rounded-xl"
                                    data-testid="button-explore-courses"
                                >
                                    EXPLORE COURSES
                                </Button>
                            </motion.div>
                        </motion.div>

                    </div>
                    
                    {/* Right Side - Cosmic Portal */}
                    <div className="lg:w-1/2 flex items-center justify-center">
                        <motion.div 
                            className="cosmic-portal flex items-center justify-center mx-auto"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.6 }}
                        >
                            {/* Portal Content - Earth in center */}
                            <div className="relative w-48 h-48 rounded-full overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-600 to-blue-900 rounded-full relative">
                                    {/* Earth-like surface */}
                                    <div className="absolute inset-4 bg-gradient-to-br from-green-400 via-blue-500 to-blue-700 rounded-full opacity-80"></div>
                                    <div className="absolute inset-8 bg-gradient-to-br from-green-300 via-blue-400 to-blue-600 rounded-full opacity-60"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                
                {/* Statistics Section */}
                <motion.div 
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    data-testid="stats-section"
                >
                    <div className="space-y-2">
                        <div className="text-3xl md:text-4xl font-bold text-primary" data-testid="stat-learners">10000+</div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wider">LEARNERS</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl md:text-4xl font-bold text-primary" data-testid="stat-instructors">200+</div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wider">INSTRUCTORS</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl md:text-4xl font-bold text-primary" data-testid="stat-countries">50+</div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wider">COUNTRIES</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl md:text-4xl font-bold text-primary" data-testid="stat-courses">100+</div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wider">COURSES</div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
