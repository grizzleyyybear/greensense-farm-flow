import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, AlertTriangle, X } from 'lucide-react';
import { mockAIModel } from '../lib/mockAIModel';

interface PlotGridProps {
  onPlotSelect: (plotId: string) => void;
}

export const PlotGrid = ({ onPlotSelect }: PlotGridProps) => {
  const plots = ['A', 'B', 'C', 'D', 'E', 'F'];

  const getPlotStatus = (plotId: string) => {
    return mockAIModel(plotId, Math.random());
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <Leaf className="h-4 w-4 text-healthy" />;
      case 'mild':
        return <AlertTriangle className="h-4 w-4 text-warning" />;
      case 'severe':
        return <X className="h-4 w-4 text-danger" />;
      default:
        return <Leaf className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-healthy/10 text-healthy border-healthy/20';
      case 'mild':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'severe':
        return 'bg-danger/10 text-danger border-danger/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {plots.map((plotId) => {
        const { status, reason, healthScore } = getPlotStatus(plotId);
        
        return (
          <Card 
            key={plotId}
            className="cursor-pointer transition-all hover:shadow-md hover:scale-105 border-2"
            onClick={() => onPlotSelect(plotId)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-lg">Plot {plotId}</h3>
                {getStatusIcon(status)}
              </div>
              
              <div className="space-y-2">
                <Badge 
                  variant="outline" 
                  className={getStatusColor(status)}
                >
                  {status === 'healthy' ? 'Healthy' : 
                   status === 'mild' ? 'Mild Infection' : 
                   'Severe Infection'}
                </Badge>
                
                <div className="text-sm text-muted-foreground">
                  <p>Health: {healthScore}%</p>
                  <p className="truncate">{reason}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};