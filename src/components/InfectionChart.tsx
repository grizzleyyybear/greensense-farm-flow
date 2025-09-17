import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { day: 'Mon', infections: 2, treated: 1 },
  { day: 'Tue', infections: 3, treated: 2 },
  { day: 'Wed', infections: 1, treated: 3 },
  { day: 'Thu', infections: 4, treated: 1 },
  { day: 'Fri', infections: 2, treated: 4 },
  { day: 'Sat', infections: 1, treated: 2 },
  { day: 'Sun', infections: 0, treated: 1 },
];

export const InfectionChart = () => {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={mockData}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis 
            dataKey="day" 
            className="text-xs"
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            className="text-xs"
            tick={{ fontSize: 12 }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="infections" 
            stroke="hsl(var(--danger))" 
            strokeWidth={2}
            name="New Infections"
          />
          <Line 
            type="monotone" 
            dataKey="treated" 
            stroke="hsl(var(--healthy))" 
            strokeWidth={2}
            name="Treated Areas"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};