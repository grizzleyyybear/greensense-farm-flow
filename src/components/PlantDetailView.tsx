import { ArrowLeft, Camera, Droplets, Thermometer, Wind } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { mockAIModel } from '../lib/mockAIModel';

interface PlantDetailViewProps {
  plotId: string;
  onBack: () => void;
}

export const PlantDetailView = ({ plotId, onBack }: PlantDetailViewProps) => {
  const { status, reason, healthScore } = mockAIModel(plotId, 0.5);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-healthy text-healthy-foreground';
      case 'mild':
        return 'bg-warning text-warning-foreground';
      case 'severe':
        return 'bg-danger text-danger-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>
        <h1 className="text-3xl font-bold">Plot {plotId} - Detailed Analysis</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5" />
              Live Camera Feed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Live feed from Plot {plotId}</p>
                <p className="text-sm text-muted-foreground">Camera ID: CAM-{plotId}-001</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <Badge variant="outline" className="text-info">
                Live • Recording
              </Badge>
              <Button variant="outline" size="sm">
                <Camera className="h-4 w-4 mr-2" />
                Capture Image
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Health Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Health Score</span>
                  <span className="text-lg font-bold">{healthScore}%</span>
                </div>
                <Progress value={healthScore} className="h-3" />
              </div>

              <Badge className={getStatusColor(status)}>
                {status === 'healthy' ? 'Healthy Crop' : 
                 status === 'mild' ? 'Mild Infection Detected' : 
                 'Severe Infection - Action Required'}
              </Badge>

              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm font-medium mb-1">AI Analysis:</p>
                <p className="text-sm text-muted-foreground">{reason}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Environmental Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Thermometer className="h-4 w-4 text-warning" />
                  <div>
                    <p className="text-sm text-muted-foreground">Soil Temperature</p>
                    <p className="font-semibold">22°C</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-info" />
                  <div>
                    <p className="text-sm text-muted-foreground">Soil Moisture</p>
                    <p className="font-semibold">45%</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Air Flow</p>
                    <p className="font-semibold">Normal</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">pH Level</p>
                  <p className="font-semibold">6.8</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Treatment History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Last Treatment:</span>
                  <span className="font-medium">3 days ago</span>
                </div>
                <div className="flex justify-between">
                  <span>Treatment Type:</span>
                  <span className="font-medium">Organic Pesticide</span>
                </div>
                <div className="flex justify-between">
                  <span>Next Scheduled:</span>
                  <span className="font-medium">In 4 days</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};