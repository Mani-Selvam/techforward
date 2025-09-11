import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, User, Building, Gift, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface RegistrationFormProps {
  onSubmit?: (data: any) => void;
}

interface RegistrationData {
  name: string;
  email: string;
  company?: string;
}

export default function RegistrationForm({ onSubmit }: RegistrationFormProps) {
  const [formData, setFormData] = useState<RegistrationData>({
    name: '',
    email: '',
    company: ''
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const { toast } = useToast();

  const registrationMutation = useMutation({
    mutationFn: async (data: RegistrationData) => {
      const response = await apiRequest('POST', '/api/register', data);
      return await response.json();
    },
    onSuccess: (response: any) => {
      toast({
        title: "Registration Successful!",
        description: response.message || "You'll receive a confirmation email shortly.",
      });
      setIsRegistered(true);
      onSubmit?.(formData);
      setFormData({ name: '', email: '', company: '' });
    },
    onError: (error: any) => {
      toast({
        title: "Registration Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    registrationMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof RegistrationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isRegistered) {
    return (
      <section className="py-24 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-12">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  You're Registered!
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Thank you for joining us. Check your email for confirmation details and calendar invite.
                </p>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  <Gift className="w-4 h-4 mr-2" />
                  Registration Confirmed
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Gift className="w-4 h-4 mr-2" />
              Free Registration
            </Badge>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Secure Your Spot
            </h2>
            <p className="text-muted-foreground text-lg">
              Join industry leaders for an immersive digital experience
            </p>
          </div>

          <Card className="hover-elevate border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Register Now</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-registration">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </Label>
                  <Input 
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="bg-background/50"
                    data-testid="input-name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="bg-background/50"
                    data-testid="input-email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    Company (Optional)
                  </Label>
                  <Input 
                    id="company"
                    type="text"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="bg-background/50"
                    data-testid="input-company"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-accent text-lg py-6 transform hover:scale-105 transition-all duration-200"
                  data-testid="button-submit-registration"
                  disabled={registrationMutation.isPending}
                >
                  {registrationMutation.isPending ? "Registering..." : "Complete Registration"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By registering, you agree to receive event updates. Unsubscribe anytime.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}