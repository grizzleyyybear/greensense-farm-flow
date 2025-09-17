import { ArrowLeft, Camera, Droplets, Thermometer, Wind } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

interface Plot {
  plotId: string;
  status: string;
  pestSuggest?: string;
  confidenceLevel?: number;
  reason?: string;
  healthScore?: number;
  imageUrl?: string;
}

interface PlantDetailViewProps {
  plotId: string;
  plots: Plot[];
  onBack: () => void;
}

export const PlantDetailView = ({ plotId, plots, onBack }: PlantDetailViewProps) => {
  const plot = plots.find((p) => p.plotId === plotId);

  if (!plot) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={onBack} className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>
        <h1 className="text-2xl font-bold">Plot not found</h1>
      </div>
    );
  }

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
        <h1 className="text-3xl font-bold">Plot {plot.plotId} - Detailed Analysis</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5" />
              Plot Image
            </CardTitle>
          </CardHeader>
          <CardContent>
            {plot.imageUrl ? (
              <img
                src={plot.imageUrl}
                alt="Plot"
                className="w-full h-48 lg:h-80 object-cover rounded mb-4"
              />
            ) : (
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">No image available</p>
              </div>
            )}
            {/* You can add a capture button here if needed */}
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
                  <span className="font-medium">Confidence Level</span>
                  <span className="text-lg font-bold">
                    {plot.confidenceLevel !== undefined ? (plot.confidenceLevel * 100).toFixed(1) : '--'}%
                  </span>
                </div>
                <Progress value={plot.confidenceLevel !== undefined ? plot.confidenceLevel * 100 : 0} className="h-3" />
              </div>

              <Badge className={getStatusColor(plot.status)}>
                {plot.status === 'healthy'
                  ? 'Healthy Crop'
                  : plot.status === 'mild'
                    ? 'Mild Infection Detected'
                    : plot.status === 'severe'
                      ? 'Severe Infection - Action Required'
                      : plot.status}
              </Badge>

              {plot.reason && (
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm font-medium mb-1">AI Analysis:</p>
                  <p className="text-sm text-muted-foreground">{plot.reason}</p>
                </div>
              )}

              {plot.pestSuggest && (
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm font-medium mb-1">Pest Suggestion:</p>
                  <p className="text-sm text-muted-foreground">{plot.pestSuggest}</p>
                </div>
              )}
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