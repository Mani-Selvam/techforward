import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CountdownTimer from "@/components/CountdownTimer";
import SpeakerCards from "@/components/SpeakerCards";
import VideoPreview from "@/components/VideoPreview";
import SocialProof from "@/components/SocialProof";
import CharactersGallery from "@/components/CharactersGallery";
import RegistrationForm from "@/components/RegistrationForm";
import WhatsAppContact from "@/components/WhatsAppContact";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navigation />
            <main className="pt-16">
                <Hero />
                <section id="about">
                    <CountdownTimer />
                </section>
                <section id="speakers">
                    <SpeakerCards />
                </section>
                <section id="preview">
                    <VideoPreview />
                </section>
                <section id="schedule">
                    <SocialProof />
                </section>
                <CharactersGallery />
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
                                TechForward 2025
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Shaping the future of digital collaboration
                                through immersive experiences.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold">Event Info</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>September 15, 2025</li>
                                <li>2:00 PM EST</li>
                                <li>Virtual Event</li>
                                <li>Free Registration</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold">Connect</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>Support</li>
                                <li>Community</li>
                                <li>Newsletter</li>
                                <li>Contact</li>
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
                            &copy; 2025 TechForward. All rights reserved.
                            Experience the future today.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
