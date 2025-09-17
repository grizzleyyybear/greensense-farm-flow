import { useState } from 'react';
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
  Sun,
  Play,
  Star,
  Award,
  Target,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import heroImage from '@/assets/hero-agriculture.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const HomePage = () => {
  const { language, setLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = getTranslation(language);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ' },
  ];

  const getCurrentLanguageName = () => {
    const lang = languages.find(l => l.code === language);
    return lang?.name || 'English';
  };

  const features = [
    {
      icon: Brain,
      title: t.aiDetection || "AI Disease Detection",
      description: t.aiDetectionDesc || "Advanced machine learning identifies plant diseases and pests with 95% accuracy",
      color: "from-primary to-primary/60",
      bgColor: "bg-primary/10"
    },
    {
      icon: Smartphone,
      title: t.smartMonitoring || "Smart Monitoring",
      description: t.smartMonitoringDesc || "Real-time crop health monitoring with IoT sensors and satellite imagery", 
      color: "from-secondary to-secondary/60",
      bgColor: "bg-secondary/10"
    },
    {
      icon: BarChart3,
      title: t.dataAnalytics || "Data Analytics",
      description: t.dataAnalyticsDesc || "Comprehensive insights and predictive analytics for better decision making",
      color: "from-accent to-accent/60",
      bgColor: "bg-accent/10"
    },
    {
      icon: Droplets,
      title: t.waterOptimization || "Water Optimization",
      description: t.waterOptimizationDesc || "Precision irrigation recommendations based on weather and soil conditions",
      color: "from-info to-info/60",
      bgColor: "bg-info/10"
    }
  ];

  const benefits = [
    { text: t.benefit1 || "Reduce pesticide usage by up to 60%", icon: Target },
    { text: t.benefit2 || "Increase crop yield by 25-40%", icon: TrendingUp },
    { text: t.benefit3 || "Save water with precision irrigation", icon: Droplets },
    { text: t.benefit4 || "Early disease detection prevents crop loss", icon: Shield },
    { text: t.benefit5 || "Real-time monitoring 24/7", icon: Eye },
    { text: t.benefit6 || "Multi-language support", icon: Globe }
  ];

  const stats = [
    { number: "10,000+", label: t.stat1 || "Farmers Protected", icon: Users, color: "text-primary" },
    { number: "95%", label: t.stat2 || "Detection Accuracy", icon: Target, color: "text-secondary" },
    { number: "60%", label: t.stat3 || "Pesticide Reduction", icon: Shield, color: "text-accent" },
    { number: "24/7", label: t.stat4 || "Monitoring", icon: Zap, color: "text-healthy" }
  ];

  const testimonials = [
    {
      quote: t.testimonial || "GreenSense helped me reduce pesticide costs by 70% while increasing my tomato yield by 35%. The AI detection caught diseases I would have missed!",
      author: t.farmerName || "Rajesh Kumar",
      location: t.farmerLocation || "Tomato Farmer, Punjab",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-muted overflow-hidden">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur-lg sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative group">
                <Leaf className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-background animate-pulse" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  GreenSense
                </h1>
                <Badge variant="secondary" className="text-xs font-medium">
                  <Shield className="h-3 w-3 mr-1" />
                  {t.smartAgriculturePro || "Smart Agriculture Pro"}
                </Badge>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <Button variant="ghost" className="font-medium">Features</Button>
              <Button variant="ghost" className="font-medium">Solutions</Button>
              <Button variant="ghost" className="font-medium">About</Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Globe className="h-4 w-4" />
                    {getCurrentLanguageName()}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={language === lang.code ? "bg-accent" : ""}
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button variant="ghost" asChild>
                <Link to="/login">
                  {t.login || "Login"}
                </Link>
              </Button>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all" asChild>
                <Link to="/dashboard">
                  {t.dashboard || "Dashboard"}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t pt-4 animate-in slide-in-from-top-2">
              <div className="flex flex-col gap-3">
                <Button variant="ghost" className="justify-start">Features</Button>
                <Button variant="ghost" className="justify-start">Solutions</Button>
                <Button variant="ghost" className="justify-start">About</Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link to="/login">{t.login || "Login"}</Link>
                </Button>
                <Button className="bg-gradient-to-r from-primary to-secondary" asChild>
                  <Link to="/dashboard">
                    {t.dashboard || "Dashboard"}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/3 to-accent/5" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in slide-in-from-left-8 duration-700">
              <div>
                <Badge className="mb-6 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30 animate-in slide-in-from-left-4 duration-500">
                  <Zap className="h-3 w-3 mr-1 animate-pulse" />
                  {t.nextGenAgriculture || "Next Generation Agriculture"}
                </Badge>
                <h1 className="text-4xl lg:text-7xl font-bold mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
                    {t.heroTitle || "Smart Farming"}
                  </span>
                  <br />
                  <span className="text-2xl lg:text-4xl text-muted-foreground font-normal">
                    {t.heroDescription || "with AI-Powered Precision"}
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl">
                  Transform your agricultural practices with cutting-edge AI technology. Detect diseases early, optimize resources, and maximize yields.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all shadow-lg text-lg px-8 py-6" asChild>
                  <Link to="/dashboard">
                    {t.getStarted || "Get Started Free"}
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 text-lg px-8 py-6 hover:scale-105 transition-all">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
              
              {/* Stats Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center group animate-in slide-in-from-bottom-4 duration-500" style={{animationDelay: `${index * 100}ms`}}>
                      <div className="flex justify-center mb-3">
                        <IconComponent className={`h-8 w-8 ${stat.color} group-hover:scale-110 transition-transform`} />
                      </div>
                      <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                      <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative animate-in slide-in-from-right-8 duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/10 rounded-3xl blur-3xl animate-pulse" />
              <Card className="relative z-10 overflow-hidden border-2 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="relative">
                  <img 
                    src={heroImage} 
                    alt="Smart Agriculture Technology"
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  
                  {/* Floating UI Elements */}
                  <div className="absolute top-6 left-6 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-bounce">
                    <div className="flex items-center gap-3 text-sm font-medium">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-foreground">{t.liveMonitoring || "Live Monitoring"}</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="text-xs text-muted-foreground mb-1">AI Detection</div>
                    <div className="text-2xl font-bold text-primary">95.8%</div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="h-4 w-4 text-accent" />
                      <span className="font-medium">Protected Crops</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in slide-in-from-bottom-6">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              <Star className="h-3 w-3 mr-1" />
              Features
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
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
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/20 animate-in slide-in-from-bottom-6" style={{animationDelay: `${index * 100}ms`}}>
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`h-8 w-8 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronRight className="h-5 w-5 mx-auto text-primary" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-card/50 to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in slide-in-from-left-6">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                <Award className="h-3 w-3 mr-1" />
                Proven Results
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">
                {t.benefitsTitle || "Results That Drive Success"}
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-background/50 transition-all duration-300 group animate-in slide-in-from-left-4" style={{animationDelay: `${index * 100}ms`}}>
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-lg font-medium text-foreground">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 shadow-2xl animate-in slide-in-from-right-6">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-accent/20 text-accent border-accent/30">
                    {t.successStory || "Success Story"}
                  </Badge>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index}>
                    <blockquote className="text-lg italic leading-relaxed text-foreground mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-6">
            <h2 className="text-3xl lg:text-6xl font-bold">
              {t.ctaTitle || "Ready to Transform Your Farm?"}
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              {t.ctaDescription || "Join thousands of farmers who are already using GreenSense to optimize their crops and maximize profits."}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all shadow-xl text-lg px-10 py-6" asChild>
                <Link to="/dashboard">
                  {t.startFreeTrial || "Start Free Trial"}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 hover:scale-105 transition-all text-lg px-10 py-6" asChild>
                <Link to="/login">
                  {t.signIn || "Sign In"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background/95 backdrop-blur-lg py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="h-8 w-8 text-primary" />
                <span className="font-bold text-2xl">GreenSense</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Transforming agriculture with AI-powered precision farming solutions for a sustainable future.
              </p>
              <Badge variant="secondary">
                {t.smartAgriculturePro || "Smart Agriculture Pro"}
              </Badge>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Features</div>
                <div>Pricing</div>
                <div>API</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-muted-foreground">
                <Link to="/about" className="block hover:text-primary transition-colors">{t.about || "About"}</Link>
                <Link to="/help" className="block hover:text-primary transition-colors">{t.help || "Help"}</Link>
                <div>Contact</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t">
            <div className="text-sm text-muted-foreground">
              © 2024 GreenSense. {t.allRightsReserved || "All rights reserved."}
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div>Privacy Policy</div>
              <div>Terms of Service</div>
              <div>Cookies</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};