import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  HelpCircle,
  MessageSquare,
  Phone,
  Mail,
  Book,
  Video,
  Users,
  AlertCircle,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const HelpPage = () => {
  const { language } = useLanguage();
  const translations = {
    en: {
      title: "Help & Support Center",
      subtitle: "Get the assistance you need to maximize your GreenSense experience",
      quickHelp: "Quick Help",
      contactSupport: "Contact Support",
      resources: "Learning Resources",
      faq: "Frequently Asked Questions",
      emergency: "Emergency Support",
      backToDashboard: "Back to Dashboard"
    },
    hi: {
      title: "सहायता और समर्थन केंद्र", 
      subtitle: "अपने ग्रीनसेंस अनुभव को अधिकतम करने के लिए आवश्यक सहायता प्राप्त करें",
      quickHelp: "त्वरित सहायता",
      contactSupport: "समर्थन से संपर्क करें",
      resources: "सीखने के संसाधन",
      faq: "अक्सर पूछे जाने वाले प्रश्न",
      emergency: "आपातकालीन समर्थन",
      backToDashboard: "डैशबोर्ड पर वापस जाएं"
    },
    pa: {
      title: "ਸਹਾਇਤਾ ਅਤੇ ਸਹਾਇਤਾ ਕੇਂਦਰ",
      subtitle: "ਆਪਣੇ ਗ੍ਰੀਨਸੈਂਸ ਅਨੁਭਵ ਨੂੰ ਵੱਧ ਤੋਂ ਵੱਧ ਬਣਾਉਣ ਲਈ ਲੋੜੀਂਦੀ ਸਹਾਇਤਾ ਪ੍ਰਾਪਤ ਕਰੋ",
      quickHelp: "ਤੁਰੰਤ ਸਹਾਇਤਾ",
      contactSupport: "ਸਹਾਇਤਾ ਨਾਲ ਸੰਪਰਕ ਕਰੋ", 
      resources: "ਸਿੱਖਣ ਦੇ ਸਾਧਨ",
      faq: "ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ",
      emergency: "ਸੰਕਟਕਾਲੀਨ ਸਹਾਇਤਾ",
      backToDashboard: "ਡੈਸ਼ਬੋਰਡ 'ਤੇ ਵਾਪਸ ਜਾਓ"
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const quickHelpItems = [
    {
      title: "Getting Started Guide",
      description: "Learn the basics of your GreenSense system setup and initial configuration",
      icon: Book,
      color: "text-primary"
    },
    {
      title: "Live Chat Support", 
      description: "Connect with our technical experts for instant assistance",
      icon: MessageSquare,
      color: "text-secondary"
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step guides for common tasks and troubleshooting",
      icon: Video,
      color: "text-accent"
    },
    {
      title: "Community Forum",
      description: "Join discussions with other farmers and share experiences",
      icon: Users,
      color: "text-healthy"
    }
  ];

  const faqItems = [
    {
      question: "How accurate is the AI disease detection?",
      answer: "Our AI system achieves 95% accuracy in detecting plant diseases and pest infections, trained on over 100,000 plant images."
    },
    {
      question: "What happens if the system detects a false positive?",
      answer: "The system allows manual override and learns from corrections to improve future detection accuracy."
    },
    {
      question: "How much pesticide can I save using GreenSense?",
      answer: "On average, farmers reduce pesticide usage by 60% while maintaining or improving crop yield."
    },
    {
      question: "Is the system suitable for small farms?",
      answer: "Yes, GreenSense is designed to be scalable and cost-effective for farms of all sizes, from small plots to large commercial operations."
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl">
        
        <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 p-8 text-center">
          <div className="flex justify-center mb-4">
            <HelpCircle className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-2">{t.title}</h1>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="p-8 space-y-8">
          
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{t.quickHelp}</h2>
            <Button variant="outline" onClick={onClose}>
              {t.backToDashboard}
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickHelpItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <IconComponent className={`h-12 w-12 mx-auto mb-4 ${item.color}`} />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <ArrowRight className="h-4 w-4 mx-auto mt-4 text-primary" />
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  {t.contactSupport}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">{t.emergency}</p>
                    <p className="text-sm text-muted-foreground">24/7 Critical Support: +1-800-GREEN-911</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-secondary" />
                    <span>Technical Support: +1-800-GREEN-HELP</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-secondary" />
                    <span>support@greensense.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-4 w-4 text-secondary" />
                    <span>Live Chat: Available 6 AM - 10 PM</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-secondary to-accent">
                  Start Live Chat
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5 text-accent" />
                  {t.resources}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors cursor-pointer">
                  <span>User Manual PDF</span>
                  <Badge>Download</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors cursor-pointer">
                  <span>Video Training Course</span>
                  <Badge>Watch</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors cursor-pointer">
                  <span>Best Practices Guide</span>
                  <Badge>Read</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors cursor-pointer">
                  <span>Troubleshooting Checklist</span>
                  <Badge>View</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                {t.faq}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-start gap-3 mb-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <h4 className="font-semibold">{item.question}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground ml-8">{item.answer}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};