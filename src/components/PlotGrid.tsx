import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, AlertTriangle, X, Plus } from 'lucide-react';

interface Plot {
  plotId: string;
  status: string;
  reason: string;
  healthScore: number;
  imageUrl?: string;
}

interface PlotGridProps {
  plots: Plot[];
  onPlotSelect: (plotId: string) => void;
  onAddPlot: (file: File) => void;
}

export const PlotGrid = ({ plots = [], onPlotSelect, onAddPlot }: PlotGridProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleAddPlotClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onAddPlot(file);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="text-muted-foreground text-base md:text-lg">
          {plots.length === 0 ? (
            <span>No plots yet. Go enter details to add.</span>
          ) : (
            <span>My Plots</span>
          )}
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded shadow hover:bg-primary/90 transition md:text-base text-sm md:px-4 md:py-2 px-2 py-2"
          onClick={handleAddPlotClick}
          aria-label="Add Plot"
        >
          <Plus className="h-5 w-5 md:mr-2" />
          <span className="hidden md:inline">Add Plot</span>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      {plots.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {plots.map((plot) => (
            <Card
              key={plot.plotId}
              className="cursor-pointer transition-all hover:shadow-md hover:scale-105 border-2"
              onClick={() => onPlotSelect(plot.plotId)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg">Plot {plot.plotId}</h3>
                  {getStatusIcon(plot.status)}
                </div>
                <div className="space-y-2">
                  <Badge
                    variant="outline"
                    className={getStatusColor(plot.status)}
                  >
                    {plot.status === 'healthy'
                      ? 'Healthy'
                      : plot.status === 'mild'
                        ? 'Mild Infection'
                        : 'Severe Infection'}
                  </Badge>
                  <div className="text-sm text-muted-foreground">
                    <p>Health: {plot.healthScore}%</p>
                    <p className="truncate">{plot.reason}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};