import { useState, useEffect } from 'react';
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
import { getTranslation } from '@/lib/translations';
import { useLanguage } from '@/contexts/LanguageContext';
import { fetchWeather, getUserLocation, WeatherData } from '@/lib/weatherApi';
import heroImage from '@/assets/hero-agriculture.jpg';
import { useUser } from "@clerk/clerk-react";

export const Dashboard = () => {
  const { language } = useLanguage();
  const { user } = useUser(); // 👈 get Clerk user
  const email = user?.primaryEmailAddress?.emailAddress; // 👈 get email
  const [selectedPlot, setSelectedPlot] = useState<string | null>(null);
  const [automatedMode, setAutomatedMode] = useState(true);
  const [pesticideLevel] = useState(78);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [plots, setPlots] = useState([]); // Add this line
  const [showAllPlots, setShowAllPlots] = useState(false);
  const t = getTranslation(language);

  useEffect(() => {
    const loadWeather = async () => {
      try {
        const location = await getUserLocation();
        const data = await fetchWeather(location.lat, location.lon);
        setWeatherData(data);
      } catch (error) {
        console.error('Failed to load weather data:', error);
        setWeatherData({
          temperature: 24,
          humidity: 68,
          windSpeed: 12,
        });
      } finally {
        setWeatherLoading(false);
      }
    };

    loadWeather();
  }, []);

  const handleManualSpray = () => {
    const notification = {
      id: Date.now().toString(),
      message: `${t.manualSpray} initiated for Plot ${selectedPlot || 'A'}`,
      timestamp: new Date(),
      type: 'success' as const
    };
    console.log('Manual spray triggered:', notification);
  };

  const handleAddPlot = async (file: File) => {
    if (!email) return; // Don't proceed if email is not loaded
    try {
      const formData = new FormData();
      formData.append('leafImage', file);
      formData.append('email', email);

      const response = await fetch('http://localhost:5000/api/user/add-plot', {
        method: 'POST',
        // headers: { 'Content-Type': 'application/json' },
        body: formData
      });

      const updatedUser = await response.json();
      setPlots(updatedUser.plots || []);
    } catch (err) {
      console.error('Failed to add plot:', err);
    }
  };

  useEffect(() => {
    if (!email) return;
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/user?email=${email}`);
        const user = await response.json();
        setPlots(user.plots || []);
      } catch (err) {
        setPlots([]);
      }
    };
    fetchUser();
  }, [email]);

  // Sort plots by plotId descending (most recent first)
  const sortedPlots = [...plots].sort(
    (a, b) => Number(b.plotId) - Number(a.plotId)
  );

  // For PlotGrid, show only first 6 unless showAllPlots is true
  const plotsToShow = showAllPlots ? sortedPlots : sortedPlots.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-secondary/20">

      <div
        className="relative h-64 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(240, 135, 135, 0), rgba(255, 199, 167, 0)), url(${heroImage})`,
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
          <h2 className="text-4xl font-bold mb-2 drop-shadow-lg">{t.smartCropHealth}</h2>
          <p className="text-lg opacity-90 drop-shadow-md">{t.smartAgriculturePlatform}</p>
          <div className="flex justify-center gap-4 mt-4">
            <Badge className="bg-white/20 text-white border-white/30">
              <Target className="h-3 w-3 mr-1" />
              95% {t.aiAccuracy}
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              <TrendingUp className="h-3 w-3 mr-1" />
              60% {t.pesticideReduction}
            </Badge>
          </div>
        </div>
      </div>

      {selectedPlot ? (
        <PlantDetailView
          plotId={selectedPlot}
          plots={plots}
          onBack={() => setSelectedPlot(null)}
        />
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-healthy" />
                  {t.farmOverview}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <PlotGrid
                  plots={plotsToShow}
                  onPlotSelect={setSelectedPlot}
                  onAddPlot={handleAddPlot}
                />
                {sortedPlots.length > 6 && (
                  <div className="flex justify-center mt-4">
                    <Button
                      variant="outline"
                      onClick={() => setShowAllPlots((prev) => !prev)}
                    >
                      {showAllPlots ? "Show Less" : "Show More"}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-info" />
                    {t.quickActions}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{t.autoMode}</span>
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
                      <span className="text-sm font-medium">{t.environmentalImpact}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Smart targeting reduces usage by 60% while maintaining crop protection</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sun className="h-5 w-5 text-sun" />
                    Weather
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {weatherLoading ? (
                    <div className="flex items-center justify-center py-4">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                      <span className="ml-2 text-sm text-muted-foreground">Loading weather...</span>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <div>
                          <p className="text-muted-foreground">Temperature</p>
                          <p className="font-semibold">{weatherData?.temperature || "--"}°C</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <div>
                          <p className="text-muted-foreground">Humidity</p>
                          <p className="font-semibold">{weatherData?.humidity || "--"}%</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <div>
                          <p className="text-muted-foreground">Wind Speed</p>
                          <p className="font-semibold">{weatherData?.windSpeed || "--"} km/h</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-warning rounded-full"></div>
                        <div>
                          <p className="text-muted-foreground">UV Index</p>
                          <p className="font-semibold">
                            {weatherData?.uvIndex !== undefined ? weatherData.uvIndex : "--"}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
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
                    <h3 className="font-semibold text-lg">{t.environmentalImpact}</h3>
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
                    <h3 className="font-semibold text-lg">{t.realTimeMonitoring}</h3>
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
                {/* Recent Activity Section */}
                {plots && plots.length > 0 ? (
                  <div className="space-y-3">
                    {[...plots]
                      .sort((a, b) => {
                        const aTime = a.createdAt
                          ? new Date(a.createdAt).getTime()
                          : Number(a.plotId) || 0;
                        const bTime = b.createdAt
                          ? new Date(b.createdAt).getTime()
                          : Number(b.plotId) || 0;
                        return bTime - aTime;
                      })
                      .slice(0, 5)
                      .map((plot) => (
                        <div key={plot.plotId} className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                          {plot.imageUrl && (
                            <img
                              src={plot.imageUrl}
                              alt="Plot"
                              className="w-12 h-12 object-cover rounded"
                            />
                          )}
                          <div>
                            <div className="font-semibold">Plot {plot.plotId}</div>
                            <div className="text-xs text-muted-foreground">
                              Status: {plot.status} | Confidence: {plot.confidenceLevel !== undefined ? (plot.confidenceLevel * 100).toFixed(1) : '--'}%
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {plot.createdAt
                                ? new Date(plot.createdAt).toLocaleString()
                                : plot.plotId
                                  ? new Date(Number(plot.plotId)).toLocaleString()
                                  : ''}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="text-muted-foreground">No recent activity yet.</div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};
