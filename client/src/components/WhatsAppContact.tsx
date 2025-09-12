import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Phone, X, Clock, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppContact() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Your WhatsApp contact details
  const whatsappNumber = "+918825620014";
  const contactName = "Mani Selvam";
  const businessHours = "Mon-Fri: 9 AM - 6 PM";
  
  const openWhatsAppChat = (message?: string) => {
    const defaultMessage = message || "Hi! I'm interested in your webinar. Can you help me?";
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const quickMessages = [
    "Hi! I want to register for the webinar",
    "Can you tell me more about the event?", 
    "What are the technical requirements?",
    "Is there a cost for attendance?"
  ];

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 300, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          data-testid="button-whatsapp-contact"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
        
        {/* Notification Badge */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">1</span>
        </div>
      </motion.div>

      {/* WhatsApp Contact Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="w-full max-w-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="bg-card/95 backdrop-blur-md border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">WhatsApp Contact</CardTitle>
                        <p className="text-sm text-muted-foreground">Get instant support</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="h-8 w-8"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Contact Info */}
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{contactName}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        {whatsappNumber}
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{businessHours}</span>
                  </div>

                  {/* Quick Messages */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Quick Messages:</p>
                    <div className="space-y-2">
                      {quickMessages.map((message, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="w-full text-left justify-start h-auto p-3 text-sm"
                          onClick={() => {
                            openWhatsAppChat(message);
                            setIsOpen(false);
                          }}
                        >
                          {message}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Main Contact Button */}
                  <Button
                    onClick={() => {
                      openWhatsAppChat();
                      setIsOpen(false);
                    }}
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    size="lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Start WhatsApp Chat
                  </Button>

                  {/* Status */}
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Usually replies within minutes</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}