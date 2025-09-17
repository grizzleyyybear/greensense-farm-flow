import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Leaf,
  Shield,
  Target,
  TrendingUp,
  Users,
  Award,
  Zap,
  Globe,
  Heart,
  Star
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const AboutPage = () => {
  const { language } = useLanguage();
  const translations = {
    en: {
      title: "Revolutionizing Agriculture with Smart Technology",
      subtitle: "Empowering farmers worldwide with AI-driven crop monitoring and precision pesticide management",
      mission: "Our Mission",
      missionText: "To create sustainable agricultural solutions that reduce environmental impact while maximizing crop yield through intelligent automation and data-driven insights.",
      vision: "Our Vision", 
      visionText: "A world where every farmer has access to affordable, cutting-edge technology that promotes eco-friendly farming practices and ensures food security for future generations.",
      features: "Key Features",
      team: "Our Team",
      stats: "Impact Statistics",
      contact: "Get in Touch"
    },
    hi: {
      title: "स्मार्ट तकनीक के साथ कृषि में क्रांति",
      subtitle: "AI-संचालित फसल निगरानी और सटीक कीटनाशक प्रबंधन के साथ दुनिया भर के किसानों को सशक्त बनाना",
      mission: "हमारा मिशन",
      missionText: "बुद्धिमान स्वचालन और डेटा-संचालित अंतर्दृष्टि के माध्यम से पर्यावरणीय प्रभाव को कम करते हुए फसल उत्पादन को अधिकतम करने वाले टिकाऊ कृषि समाधान बनाना।",
      vision: "हमारा दृष्टिकोण",
      visionText: "एक ऐसी दुनिया जहां हर किसान के पास किफायती, अत्याधुनिक तकनीक तक पहुंच हो जो पर्यावरण-अनुकूल खेती प्रथाओं को बढ़ावा देती है।",
      features: "मुख्य विशेषताएं",
      team: "हमारी टीम",
      stats: "प्रभाव आंकड़े",
      contact: "संपर्क करें"
    },
    pa: {
      title: "ਸਮਾਰਟ ਟੈਕਨਾਲੋਜੀ ਨਾਲ ਖੇਤੀਬਾੜੀ ਵਿੱਚ ਕ੍ਰਾਂਤੀ",
      subtitle: "AI-ਚਾਲਿਤ ਫਸਲ ਨਿਗਰਾਨੀ ਅਤੇ ਸਟੀਕ ਕੀੜੇ-ਮਾਰੂ ਪ੍ਰਬੰਧਨ ਨਾਲ ਦੁਨੀਆ ਭਰ ਦੇ ਕਿਸਾਨਾਂ ਨੂੰ ਸਸ਼ਕਤ ਬਣਾਉਣਾ",
      mission: "ਸਾਡਾ ਮਿਸ਼ਨ",
      missionText: "ਬੁੱਧੀਮਾਨ ਸਵੈਚਲਨ ਅਤੇ ਡੇਟਾ-ਸੰਚਾਲਿਤ ਸੂਝ ਦੇ ਰਾਹੀਂ ਵਾਤਾਵਰਨ ਪ੍ਰਭਾਵ ਨੂੰ ਘਟਾਉਂਦੇ ਹੋਏ ਫਸਲ ਉਤਪਾਦਨ ਨੂੰ ਵੱਧ ਤੋਂ ਵੱਧ ਬਣਾਉਣ ਵਾਲੇ ਟਿਕਾਊ ਖੇਤੀ ਹੱਲ ਬਣਾਉਣਾ।",
      vision: "ਸਾਡੀ ਦਿੱਸ਼",
      visionText: "ਇੱਕ ਅਜਿਹੀ ਦੁਨੀਆ ਜਿੱਥੇ ਹਰ ਕਿਸਾਨ ਕੋਲ ਕਿਫਾਇਤੀ, ਅਤਿ-ਆਧੁਨਿਕ ਤਕਨੀਕ ਤੱਕ ਪਹੁੰਚ ਹੋਵੇ ਜੋ ਵਾਤਾਵਰਨ-ਅਨੁਕੂਲ ਖੇਤੀ ਅਭਿਆਸਾਂ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਦੀ ਹੈ।",
      features: "ਮੁੱਖ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ",
      team: "ਸਾਡੀ ਟੀਮ",
      stats: "ਪ੍ਰਭਾਵ ਅੰਕੜੇ",
      contact: "ਸੰਪਰਕ ਕਰੋ"
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const features = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "AI identifies infected plants with 95% accuracy, reducing unnecessary pesticide use by up to 60%",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Environmental Protection", 
      description: "Minimize soil and water contamination while protecting beneficial insects and biodiversity",
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      title: "Yield Optimization",
      description: "Increase crop yield by 25% through timely interventions and optimal resource management", 
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "24/7 automated surveillance with instant alerts for disease detection and treatment recommendations",
      color: "text-healthy"
    }
  ];

  const teamMembers = [
    {
      name: "Mrinal Sharma",
      role: "AI-ML enthusiast & a designer by heart", 
      description: "Optimal steps everytime",
      avatar: "😸"
    },
    {
      name: "Asim Siddiqui",
      role: "AI ML Specialist",
      description: "The algorithm whisperer",
      avatar: "🤫"
    },
    {
      name: "Tanmay Tyagi",
      role: "likes templeOS",
      description: "slightly annoying but a great coder",
      avatar: "🌱"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Farms Protected", icon: Shield },
    { number: "60%", label: "Pesticide Reduction", icon: TrendingUp }, 
    { number: "25%", label: "Yield Increase", icon: Award },
    { number: "95%", label: "Detection Accuracy", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-secondary/20">
      
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Leaf className="h-20 w-20 text-primary" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-accent to-secondary rounded-full border-4 border-background flex items-center justify-center">
                <Heart className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Target className="h-8 w-8 text-primary" />
                  {t.mission}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t.missionText}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Globe className="h-8 w-8 text-secondary" />
                  {t.vision}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t.visionText}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.features}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 mb-4`}>
                      <IconComponent className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center bg-gradient-to-br from-primary/10 to-secondary/10 border-0">
                  <CardContent className="p-6">
                    <IconComponent className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.team}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="font-semibold text-xl mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">{t.contact}</h2>
          <p className="text-muted-foreground mb-8">
            Ready to revolutionize your farming practices? Contact our team to learn more about implementing GreenSense technology on your farm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
              Request Demo
            </Button>
            <Button variant="outline" size="lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
