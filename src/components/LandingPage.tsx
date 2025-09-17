import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Leaf,
  Shield,
  TrendingUp,
  Zap,
  Brain,
  Globe,
  Users,
  ArrowRight,
  CheckCircle,
  Smartphone,
  BarChart3,
  Eye,
  Droplets,
  Sun
} from 'lucide-react';
import heroImage from '@/assets/hero-agriculture.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

export const LandingPage = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const features = [
    {
      icon: Brain,
      title: t.aiDetection || "AI Disease Detection",
      description: t.aiDetectionDesc || "Advanced machine learning identifies plant diseases and pests with 95% accuracy",
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: t.smartMonitoring || "Smart Monitoring",
      description: t.smartMonitoringDesc || "Real-time crop health monitoring with IoT sensors and satellite imagery", 
      color: "text-secondary"
    },
    {
      icon: BarChart3,
      title: t.dataAnalytics || "Data Analytics",
      description: t.dataAnalyticsDesc || "Comprehensive insights and predictive analytics for better decision making",
      color: "text-accent"
    },
    {
      icon: Droplets,
      title: t.waterOptimization || "Water Optimization",
      description: t.waterOptimizationDesc || "Precision irrigation recommendations based on weather and soil conditions",
      color: "text-info"
    }
  ];

  const benefits = [
    { text: t.benefit1 || "Reduce pesticide usage by up to 60%", icon: CheckCircle },
    { text: t.benefit2 || "Increase crop yield by 25-40%", icon: CheckCircle },
    { text: t.benefit3 || "Save water with precision irrigation", icon: CheckCircle },
    { text: t.benefit4 || "Early disease detection prevents crop loss", icon: CheckCircle },
    { text: t.benefit5 || "Real-time monitoring 24/7", icon: CheckCircle },
    { text: t.benefit6 || "Multi-language support", icon: CheckCircle }
  ];

  const stats = [
    { number: "10,000+", label: t.stat1 || "Farmers Protected", icon: Users },
    { number: "95%", label: t.stat2 || "Detection Accuracy", icon: Eye },
    { number: "60%", label: t.stat3 || "Pesticide Reduction", icon: Shield },
    { number: "24/7", label: t.stat4 || "Monitoring", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-muted">
      {/* Navigation */}
      <nav className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Leaf className="h-8 w-8 text-primary" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-background" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  GreenSense
                </h1>
                <Badge variant="secondary" className="text-xs">
                  <Shield className="h-3 w-3 mr-1" />
                  {t.smartAgriculturePro || "Smart Agriculture Pro"}
                </Badge>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link to="/login">
                  {t.login || "Login"}
                </Link>
              </Button>
              <Button asChild>
                <Link to="/dashboard">
                  {t.dashboard || "Dashboard"}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30">
                  <Zap className="h-3 w-3 mr-1" />
                  {t.nextGenAgriculture || "Next Generation Agriculture"}
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
                  {t.heroTitle || "Smart Farming with AI-Powered Precision"}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {t.heroDescription || "Transform your agricultural practices with cutting-edge AI technology. Detect diseases early, optimize resources, and maximize yields with GreenSense."}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all" asChild>
                  <Link to="/dashboard">
                    {t.getStarted || "Get Started"}
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">
                    {t.learnMore || "Learn More"}
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-2">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-primary">{stat.number}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <img 
                src={heroImage} 
                alt="Smart Agriculture Technology"
                className="relative z-10 rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 z-20">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  {t.liveMonitoring || "Live Monitoring"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-card/50 to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t.featuresTitle || "Powerful Features for Modern Farming"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.featuresDescription || "Leverage advanced technology to revolutionize your agricultural operations with precision and intelligence."}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
                  <CardHeader className="text-center">
                    <IconComponent className={`h-12 w-12 mx-auto mb-4 ${feature.color}`} />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                {t.benefitsTitle || "Proven Results That Drive Success"}
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <IconComponent className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  {t.successStory || "Success Story"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-center">
                  "{t.testimonial || 'GreenSense helped me reduce pesticide costs by 70% while increasing my tomato yield by 35%. The AI detection caught diseases I would have missed!'}"
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold">{t.farmerName || "Rajesh Kumar"}</div>
                  <div className="text-sm text-muted-foreground">{t.farmerLocation || "Tomato Farmer, Punjab"}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t.ctaTitle || "Ready to Transform Your Farm?"}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.ctaDescription || "Join thousands of farmers who are already using GreenSense to optimize their crops and maximize profits."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all" asChild>
                <Link to="/dashboard">
                  {t.startFreeTrial || "Start Free Trial"}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/login">
                  {t.signIn || "Sign In"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">GreenSense</span>
              <Badge variant="secondary" className="text-xs">
                {t.smartAgriculturePro || "Smart Agriculture Pro"}
              </Badge>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link to="/about" className="hover:text-primary transition-colors">{t.about || "About"}</Link>
              <Link to="/help" className="hover:text-primary transition-colors">{t.help || "Help"}</Link>
              <span>© 2024 GreenSense. {t.allRightsReserved || "All rights reserved."}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};