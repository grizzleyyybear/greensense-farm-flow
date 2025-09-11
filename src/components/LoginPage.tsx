import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Leaf, Eye, EyeOff, Smartphone, Shield, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface LoginPageProps {
  language: string;
}

export const LoginPage = ({ language }: LoginPageProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const translations = {
    en: {
      welcome: "Welcome to GreenSense",
      subtitle: "Advanced Smart Agriculture Platform",
      login: "Login",
      signup: "Sign Up",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      farmName: "Farm Name",
      loginButton: "Sign In",
      signupButton: "Create Account",
      switchToSignup: "Don't have an account? Sign up",
      switchToLogin: "Already have an account? Sign in",
      features: {
        monitoring: "Real-time Crop Monitoring",
        pesticide: "Smart Pesticide Control", 
        analytics: "Advanced Analytics"
      }
    },
    hi: {
      welcome: "ग्रीनसेंस में आपका स्वागत है",
      subtitle: "उन्नत स्मार्ट कृषि प्लेटफॉर्म",
      login: "लॉगिन",
      signup: "साइन अप",
      email: "ईमेल",
      password: "पासवर्ड",
      confirmPassword: "पासवर्ड की पुष्टि करें",
      farmName: "फार्म का नाम",
      loginButton: "साइन इन करें",
      signupButton: "खाता बनाएं",
      switchToSignup: "खाता नहीं है? साइन अप करें",
      switchToLogin: "पहले से खाता है? साइन इन करें",
      features: {
        monitoring: "रियल-टाइम फसल निगरानी",
        pesticide: "स्मार्ट कीटनाशक नियंत्रण",
        analytics: "उन्नत विश्लेषण"
      }
    },
    pa: {
      welcome: "ਗ੍ਰੀਨਸੈਂਸ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ",
      subtitle: "ਐਡਵਾਂਸਡ ਸਮਾਰਟ ਖੇਤੀਬਾੜੀ ਪਲੇਟਫਾਰਮ",
      login: "ਲਾਗਿਨ",
      signup: "ਸਾਈਨ ਅੱਪ",
      email: "ਈਮੇਲ",
      password: "ਪਾਸਵਰਡ",
      confirmPassword: "ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
      farmName: "ਫਾਰਮ ਦਾ ਨਾਮ",
      loginButton: "ਸਾਈਨ ਇਨ ਕਰੋ",
      signupButton: "ਖਾਤਾ ਬਣਾਓ",
      switchToSignup: "ਖਾਤਾ ਨਹੀਂ ਹੈ? ਸਾਈਨ ਅੱਪ ਕਰੋ",
      switchToLogin: "ਪਹਿਲਾਂ ਤੋਂ ਖਾਤਾ ਹੈ? ਸਾਈਨ ਇਨ ਕਰੋ",
      features: {
        monitoring: "ਰੀਅਲ-ਟਾਈਮ ਫਸਲ ਨਿਗਰਾਨੀ",
        pesticide: "ਸਮਾਰਟ ਕੀੜੇ-ਮਾਰੂ ਨਿਯੰਤਰਣ",
        analytics: "ਉੱਨਤ ਵਿਸ਼ਲੇਸ਼ਣ"
      }
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-secondary/30 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        
        <div className="hidden lg:block space-y-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="relative">
                <Leaf className="h-16 w-16 text-primary" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full border-4 border-background" />
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t.welcome}
            </h1>
            <p className="text-xl text-muted-foreground">{t.subtitle}</p>
          </div>

          <div className="grid gap-6">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t.features.monitoring}</h3>
                  <p className="text-sm text-muted-foreground">Monitor your crops 24/7 with AI-powered sensors</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t.features.pesticide}</h3>
                  <p className="text-sm text-muted-foreground">Reduce pesticide usage by up to 60% with precise targeting</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t.features.analytics}</h3>
                  <p className="text-sm text-muted-foreground">Get insights to improve yield and sustainability</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="w-full max-w-md mx-auto shadow-2xl border-2">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center lg:hidden mb-4">
              <div className="relative">
                <Leaf className="h-12 w-12 text-primary" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-background" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">
              {isLogin ? t.login : t.signup}
            </CardTitle>
            <Badge variant="secondary" className="mx-auto">
              <Shield className="h-3 w-3 mr-1" />
              Secure Authentication
            </Badge>
          </CardHeader>

          <CardContent className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="farmName">{t.farmName}</Label>
                <Input id="farmName" placeholder={t.farmName} />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">{t.email}</Label>
              <Input id="email" type="email" placeholder={t.email} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">{t.password}</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder={t.password} 
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">{t.confirmPassword}</Label>
                <Input id="confirmPassword" type="password" placeholder={t.confirmPassword} />
              </div>
            )}

            <Button 
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-2"
              size="lg"
            >
              {isLogin ? t.loginButton : t.signupButton}
            </Button>

            <div className="text-center">
              <Button
                variant="link"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm"
              >
                {isLogin ? t.switchToSignup : t.switchToLogin}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};