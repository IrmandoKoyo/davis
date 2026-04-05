import React from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { caloriesTrendData } from '../data/fitnessData';

export default function LineChartComponent() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart data={caloriesTrendData}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
        <XAxis dataKey="day" stroke="#9ca3af" axisLine={false} tickLine={false} />
        <YAxis stroke="#9ca3af" axisLine={false} tickLine={false} />
        <Tooltip 
          contentStyle={{ backgroundColor: 'rgba(17, 24, 39, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
          itemStyle={{ color: '#fff' }}
        />
        <Line 
          type="monotone" 
          dataKey="calories" 
          stroke="#22c55e" 
          strokeWidth={4} 
          dot={{ r: 4, fill: '#22c55e', strokeWidth: 2 }}
          activeDot={{ r: 8, strokeWidth: 0 }}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}
