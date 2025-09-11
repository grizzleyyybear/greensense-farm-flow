import { useState } from 'react';
import { Leaf, Droplets, Sun, Bell, BarChart3, Settings, Home, Camera, Shield, TrendingUp, Zap, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import { PlotGrid } from './PlotGrid';
import { PlantDetailView } from './PlantDetailView';
import { InfectionChart } from './InfectionChart';
import { NotificationCenter } from './NotificationCenter';
import { mockAIModel } from '../lib/mockAIModel';
import heroImage from '@/assets/hero-agriculture.jpg';

interface DashboardProps {
  language: string;
}

export const Dashboard = ({ language }: DashboardProps) => {
  const [selectedPlot, setSelectedPlot] = useState<string | null>(null);
  const [automatedMode, setAutomatedMode] = useState(true);
  const [pesticideLevel] = useState(78);

  const handleManualSpray = () => {
    const notification = {
      id: Date.now().toString(),
      message: `Manual pesticide application initiated for Plot ${selectedPlot || 'A'}`,
      timestamp: new Date(),
      type: 'success' as const
    };
    console.log('Manual spray triggered:', notification);
  };

  const translations = {
    en: {
      farmOverview: "Smart Farm Overview",
      subtitle: "AI-Powered Precision Agriculture & Pest Control",
      plotsOverview: "Farm Plots Overview", 
      iotControls: "Smart IoT Controls",
      automatedMode: "Automated Mode",
      pesticideLevel: "Pesticide Level",
      manualSpray: "Manual Spray",
      weatherConditions: "Weather Conditions",
      temperature: "Temperature",
      humidity: "Humidity", 
      windSpeed: "Wind Speed",
      uvIndex: "UV Index",
      infectionTrend: "Infection Trend Analysis (7 Days)",
      recentActivity: "Recent System Activity",
      pesticideOptimization: "Pesticide Usage Optimization",
      environmentalImpact: "Environmental Impact Reduction",
      cropHealthMonitoring: "Real-Time Crop Health Monitoring"
    },
    hi: {
      farmOverview: "स्मार्ट फार्म अवलोकन",
      subtitle: "AI-संचालित सटीक कृषि और कीट नियंत्रण",
      plotsOverview: "फार्म प्लॉट्स अवलोकन",
      iotControls: "स्मार्ट IoT नियंत्रण",
      automatedMode: "स्वचालित मोड",
      pesticideLevel: "कीटनाशक स्तर", 
      manualSpray: "मैनुअल स्प्रे",
      weatherConditions: "मौसम की स्थिति",
      temperature: "तापमान",
      humidity: "आर्द्रता",
      windSpeed: "हवा की गति",
      uvIndex: "UV सूचकांक",
      infectionTrend: "संक्रमण प्रवृत्ति विश्लेषण (7 दिन)",
      recentActivity: "हाल की सिस्टम गतिविधि",
      pesticideOptimization: "कीटनाशक उपयोग अनुकूलन",
      environmentalImpact: "पर्यावरणीय प्रभाव में कमी",
      cropHealthMonitoring: "रीयल-टाइम फसल स्वास्थ्य निगरानी"
    },
    pa: {
      farmOverview: "ਸਮਾਰਟ ਫਾਰਮ ਸਮੀਖਿਆ",
      subtitle: "AI-ਸੰਚਾਲਿਤ ਸਟੀਕ ਖੇਤੀਬਾੜੀ ਅਤੇ ਕੀੜੇ ਨਿਯੰਤਰਣ",
      plotsOverview: "ਫਾਰਮ ਪਲਾਟ ਸਮੀਖਿਆ",
      iotControls: "ਸਮਾਰਟ IoT ਨਿਯੰਤਰਣ",
      automatedMode: "ਸਵੈਚਲਿਤ ਮੋਡ",
      pesticideLevel: "ਕੀੜੇ-ਮਾਰੂ ਪੱਧਰ",
      manualSpray: "ਮੈਨੁਅਲ ਸਪਰੇ",
      weatherConditions: "ਮੌਸਮੀ ਹਾਲਾਤ",
      temperature: "ਤਾਪਮਾਨ",
      humidity: "ਨਮੀ",
      windSpeed: "ਹਵਾ ਦੀ ਗਤੀ",
      uvIndex: "UV ਸੂਚਕਾਂਕ",
      infectionTrend: "ਸੰਕਰਮਣ ਰੁਝਾਨ ਵਿਸ਼ਲੇਸ਼ਣ (7 ਦਿਨ)",
      recentActivity: "ਹਾਲ ਦੀ ਸਿਸਟਮ ਗਤਿਵਿਧੀ",
      pesticideOptimization: "ਕੀੜੇ-ਮਾਰੂ ਵਰਤੋਂ ਅਨੁਕੂਲਨ",
      environmentalImpact: "ਵਾਤਾਵਰਨ ਪ੍ਰਭਾਵ ਘਟਾਉਣਾ",
      cropHealthMonitoring: "ਰੀਅਲ-ਟਾਈਮ ਫਸਲ ਸਿਹਤ ਨਿਗਰਾਨੀ"
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-secondary/20">

      <div 
        className="relative h-64 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(240, 135, 135, 0.3), rgba(255, 199, 167, 0.3)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40" />
        <div className="relative text-center text-white z-10">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Leaf className="h-16 w-16 text-white drop-shadow-lg" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full border-4 border-white flex items-center justify-center">
                <Shield className="h-3 w-3 text-primary" />
              </div>
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-2 drop-shadow-lg">{t.farmOverview}</h2>
          <p className="text-lg opacity-90 drop-shadow-md">{t.subtitle}</p>
          <div className="flex justify-center gap-4 mt-4">
            <Badge className="bg-white/20 text-white border-white/30">
              <Target className="h-3 w-3 mr-1" />
              95% Detection Accuracy
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              <TrendingUp className="h-3 w-3 mr-1" />
              60% Less Pesticide Use
            </Badge>
          </div>
        </div>
      </div>

      {selectedPlot ? (
        <PlantDetailView 
          plotId={selectedPlot} 
          onBack={() => setSelectedPlot(null)}
        />
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-healthy" />
                  {t.plotsOverview}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <PlotGrid onPlotSelect={setSelectedPlot} />
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-info" />
                    {t.iotControls}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{t.automatedMode}</span>
                    <Switch 
                      checked={automatedMode}
                      onCheckedChange={setAutomatedMode}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{t.pesticideLevel}</span>
                      <span className="font-medium">{pesticideLevel}%</span>
                    </div>
                    <Progress value={pesticideLevel} className="h-3" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Optimal: 70-85%</span>
                      <span className="text-healthy">●</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleManualSpray}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    variant={automatedMode ? "secondary" : "default"}
                    disabled={automatedMode}
                  >
                    <Droplets className="h-4 w-4 mr-2" />
                    {t.manualSpray}
                  </Button>

                  <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium">{t.pesticideOptimization}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Smart targeting reduces usage by 60% while maintaining crop protection</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sun className="h-5 w-5 text-sun" />
                    {t.weatherConditions}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div>
                        <p className="text-muted-foreground">{t.temperature}</p>
                        <p className="font-semibold">24°C</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <div>
                        <p className="text-muted-foreground">{t.humidity}</p>
                        <p className="font-semibold">68%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <div>
                        <p className="text-muted-foreground">{t.windSpeed}</p>
                        <p className="font-semibold">12 km/h</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-warning rounded-full"></div>
                      <div>
                        <p className="text-muted-foreground">{t.uvIndex}</p>
                        <p className="font-semibold">6 (High)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="border-2 border-healthy/20 hover:border-healthy/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-healthy/10 rounded-full">
                    <Target className="h-8 w-8 text-healthy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{t.pesticideOptimization}</h3>
                    <p className="text-2xl font-bold text-healthy">60% Reduction</p>
                    <p className="text-sm text-muted-foreground">vs. traditional methods</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-info/20 hover:border-info/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-info/10 rounded-full">
                    <TrendingUp className="h-8 w-8 text-info" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{t.environmentalImpact}</h3>
                    <p className="text-2xl font-bold text-info">85% Less</p>
                    <p className="text-sm text-muted-foreground">soil contamination</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-warning/20 hover:border-warning/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-warning/10 rounded-full">
                    <Zap className="h-8 w-8 text-warning" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{t.cropHealthMonitoring}</h3>
                    <p className="text-2xl font-bold text-warning">24/7</p>
                    <p className="text-sm text-muted-foreground">AI surveillance</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-2 border-warning/20 hover:border-warning/40 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-warning" />
                  {t.infectionTrend}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <InfectionChart />
              </CardContent>
            </Card>

            <Card className="border-2 border-info/20 hover:border-info/40 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-info" />
                  {t.recentActivity}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <NotificationCenter />
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};