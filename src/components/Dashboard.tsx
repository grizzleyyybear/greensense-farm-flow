import { useState } from 'react';
import { Leaf, Droplets, Sun, Bell, BarChart3, Settings, Home, Camera } from 'lucide-react';
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

export const Dashboard = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Leaf className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold text-primary">GreenSense</h1>
              </div>
              <Badge variant="secondary" className="ml-4">
                Smart Agriculture v2.1
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Home className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
              <Button variant="ghost" size="sm">
                <BarChart3 className="h-4 w-4 mr-2" />
                Analytics
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div 
        className="relative h-48 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white">
          <h2 className="text-4xl font-bold mb-2">Farm Overview</h2>
          <p className="text-lg opacity-90">Real-time crop monitoring and pest control</p>
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
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-healthy" />
                  Farm Plots Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <PlotGrid onPlotSelect={setSelectedPlot} />
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-info" />
                    IoT Controls
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Automated Mode</span>
                    <Switch 
                      checked={automatedMode}
                      onCheckedChange={setAutomatedMode}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Pesticide Level</span>
                      <span className="font-medium">{pesticideLevel}%</span>
                    </div>
                    <Progress value={pesticideLevel} className="h-2" />
                  </div>

                  <Button 
                    onClick={handleManualSpray}
                    className="w-full"
                    variant={automatedMode ? "secondary" : "default"}
                    disabled={automatedMode}
                  >
                    <Droplets className="h-4 w-4 mr-2" />
                    Manual Spray
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sun className="h-5 w-5 text-sun" />
                    Weather Conditions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Temperature</p>
                      <p className="font-semibold">24°C</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Humidity</p>
                      <p className="font-semibold">68%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Wind Speed</p>
                      <p className="font-semibold">12 km/h</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">UV Index</p>
                      <p className="font-semibold">6 (High)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-warning" />
                  Infection Trend (7 Days)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <InfectionChart />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-info" />
                  Recent Activity
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