import { Bell, CheckCircle, AlertTriangle, Info, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Notification {
  id: string;
  message: string;
  type: 'success' | 'warning' | 'info' | 'alert';
  timestamp: Date;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    message: 'Automated pesticide application completed on Plot C',
    type: 'success',
    timestamp: new Date(Date.now() - 30 * 60 * 1000)
  },
  {
    id: '2',
    message: 'Mild infection detected in Plot B - monitoring required',
    type: 'warning',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000)
  },
  {
    id: '3',
    message: 'Weather alert: Heavy rain expected tomorrow',
    type: 'info',
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000)
  },
  {
    id: '4',
    message: 'Pesticide level low - refill recommended',
    type: 'alert',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000)
  },
  {
    id: '5',
    message: 'Plot A health score improved to 92%',
    type: 'success',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000)
  }
];

export const NotificationCenter = () => {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-healthy" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-warning" />;
      case 'alert':
        return <AlertTriangle className="h-4 w-4 text-danger" />;
      case 'info':
        return <Info className="h-4 w-4 text-info" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'border-l-healthy';
      case 'warning':
        return 'border-l-warning';
      case 'alert':
        return 'border-l-danger';
      case 'info':
        return 'border-l-info';
      default:
        return 'border-l-muted';
    }
  };

  const formatTime = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));

    if (hours > 24) {
      return `${Math.floor(hours / 24)}d ago`;
    } else if (hours > 0) {
      return `${hours}h ago`;
    } else {
      return `${minutes}m ago`;
    }
  };

  return (
    <div className="space-y-3 max-h-80 overflow-y-auto">
      {mockNotifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-3 border-l-4 bg-card/50 rounded-r-lg ${getNotificationColor(notification.type)}`}
        >
          <div className="flex items-start gap-3">
            {getNotificationIcon(notification.type)}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-card-foreground">
                {notification.message}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <Clock className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  {formatTime(notification.timestamp)}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};