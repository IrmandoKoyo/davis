import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { workoutTypeDistribution } from '../data/fitnessData';

const PIE_COLORS = ['#22c55e', '#3b82f6', '#a855f7', '#f59e0b'];

export default function PieChartComponent() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsPieChart>
        <Pie
          data={workoutTypeDistribution}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
          nameKey="type"
          stroke="none"
        >
          {workoutTypeDistribution.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{ backgroundColor: 'rgba(17, 24, 39, 0.9)', border: 'none', borderRadius: '8px', color: '#fff' }}
          itemStyle={{ color: '#fff' }}
        />
        <Legend verticalAlign="bottom" height={36} iconType="circle" />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
}
