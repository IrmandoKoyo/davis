import React from 'react';
import { BarChart as RechartsBarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { workoutDurationData } from '../data/fitnessData';

export default function BarChartComponent() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={workoutDurationData}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
        <XAxis dataKey="day" stroke="#9ca3af" axisLine={false} tickLine={false} fontSize={12} />
        <YAxis stroke="#9ca3af" axisLine={false} tickLine={false} fontSize={12} />
        <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{ backgroundColor: '#111827', border: 'none', borderRadius: '8px' }} />
        <Bar dataKey="avgDuration" fill="#3b82f6" radius={[4, 4, 0, 0]}>
          {
            workoutDurationData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.day === 'Sat' ? '#22c55e' : '#3b82f6'} />
            ))
          }
        </Bar>
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}
