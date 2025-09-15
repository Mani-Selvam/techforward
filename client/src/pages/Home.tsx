import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TopicsSection from "@/components/TopicsSection";
import FinalCTASection from "@/components/FinalCTASection";
import RegistrationForm from "@/components/RegistrationForm";
import WhatsAppContact from "@/components/WhatsAppContact";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navigation />
            <main className="pt-16">
                <Hero />
                <CoursesSection />
                <FeaturesSection />
                <BenefitsSection />
                <TestimonialsSection />
                <TopicsSection />
                <FinalCTASection />
                <RegistrationForm />
            </main>
            
            {/* WhatsApp Contact Widget */}
            <WhatsAppContact />

            {/* Footer */}
            <footer className="bg-card border-t border-border/20 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <h3
                                className="font-bold text-lg"
                                style={{
                                    fontFamily: "Space Grotesk, sans-serif",
                                }}>
                                TechAra 2025
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Transforming the future through innovative
                                technology education and expert-led webinars.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold">Learning Info</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>Live Interactive Webinars</li>
                                <li>Expert-Led Courses</li>
                                <li>Global Community Access</li>
                                <li>Flexible Learning</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold">Resources</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>Course Catalog</li>
                                <li>Learning Paths</li>
                                <li>Certification</li>
                                <li>Career Guidance</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold">Legal</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Code of Conduct</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-border/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
                        <p>
                            &copy; 2025 TechAra. All rights reserved.
                            Transform your future with technology.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
