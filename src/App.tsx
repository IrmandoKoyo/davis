import React from 'react';
import { Activity, Flame, Target, Users, Dumbbell, TrendingUp, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { kpiData, recentWorkouts, dashboardInsights } from './data/fitnessData';

// Import modular charts from components/pages
import LineChartComponent from './pages/Line';
import PieChartComponent from './pages/Pie';
import BarChartComponent from './pages/Bar';

function App() {
  return (
    <div className="min-h-screen p-6 md:p-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
          <Activity className="text-neon-green" size={36} />
          Pulse<span className="text-neon-green">Fit</span> Analytics
        </h1>
        <p className="text-gray-400">Tugas Data Visualisasi - Dashboard Premium</p>
      </motion.div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KPICard 
          title="Total Members" 
          value={kpiData.totalUsers.toLocaleString()} 
          icon={<Users size={24} className="text-blue-400" />} 
          trend="+12% this month"
          delay={0.1}
        />
        <KPICard 
          title="Avg. Duration" 
          value={`${kpiData.avgWorkoutDuration} min`} 
          icon={<Activity size={24} className="text-green-400" />} 
          trend="Steady"
          delay={0.2}
        />
        <KPICard 
          title="Calories Burned" 
          value={kpiData.totalCaloriesBurned.toLocaleString()} 
          icon={<Flame size={24} className="text-orange-400" />} 
          trend="+5% vs last month"
          delay={0.3}
        />
        <KPICard 
          title="Goal Completion" 
          value={`${kpiData.goalCompletionRate}%`} 
          icon={<Target size={24} className="text-purple-400" />} 
          trend="+2.4% today"
          delay={0.4}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Modular Line Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-panel rounded-lg p-6 lg:col-span-2"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Weekly Calories Trend</h2>
            <Flame className="text-orange-400" size={20} />
          </div>
          <div className="h-72">
            <LineChartComponent />
          </div>
        </motion.div>

        {/* Modular Pie Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="glass-panel rounded-lg p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Workout Distribution</h2>
            <Dumbbell className="text-purple-400" size={20} />
          </div>
          <div className="h-64">
            <PieChartComponent />
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Insights Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass-panel rounded-lg p-6 lg:col-span-1 bg-gradient-to-br from-gray-900/80 to-blue-900/20 border-l-4 border-l-blue-500"
        >
          <div className="flex items-center gap-2 mb-6 text-blue-400">
            <Info size={24} />
            <h2 className="text-xl font-semibold text-white">Data Insights</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm text-gray-400 uppercase font-semibold tracking-wider mb-2">Insight Utama</h3>
              <p className="text-gray-200 text-sm leading-relaxed">{dashboardInsights.insight}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-400 uppercase font-semibold tracking-wider mb-2">Tren Terlihat</h3>
              <p className="text-gray-200 text-sm leading-relaxed">{dashboardInsights.trend}</p>
            </div>
            <div>
              <h3 className="text-sm text-green-400 uppercase font-semibold tracking-wider mb-2">Rekomendasi Bisnis</h3>
              <p className="text-gray-200 text-sm leading-relaxed">{dashboardInsights.recommendation}</p>
            </div>
          </div>
        </motion.div>

        {/* Modular Bar Chart & Table Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Bar Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass-panel rounded-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Avg Duration Comparison (Mins)</h2>
              <TrendingUp className="text-blue-400" size={18} />
            </div>
            <div className="h-48">
              <BarChartComponent />
            </div>
          </motion.div>

          {/* Data Table */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="glass-panel rounded-lg p-6 overflow-hidden"
          >
            <h2 className="text-lg font-semibold text-white mb-4">Recent Workout Sessions</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-800 text-gray-400 text-sm">
                    <th className="pb-3 pt-2 px-4 font-medium">Member</th>
                    <th className="pb-3 pt-2 px-4 font-medium">Type</th>
                    <th className="pb-3 pt-2 px-4 font-medium">Duration</th>
                    <th className="pb-3 pt-2 px-4 font-medium text-right">Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {recentWorkouts.map((workout) => (
                    <tr key={workout.id} className="border-b border-gray-800/50 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4">
                        <div className="font-medium text-gray-200">{workout.memberName}</div>
                        <div className="text-xs text-gray-500">{workout.date}</div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium 
                          ${workout.type === 'Cardio' ? 'bg-green-500/10 text-green-400' : ''}
                          ${workout.type === 'Strength' ? 'bg-blue-500/10 text-blue-400' : ''}
                          ${workout.type === 'HIIT' ? 'bg-orange-500/10 text-orange-400' : ''}
                          ${workout.type === 'Yoga' ? 'bg-purple-500/10 text-purple-400' : ''}
                        `}>
                          {workout.type}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-300">{workout.duration} min</td>
                      <td className="py-3 px-4 text-right font-medium text-orange-400">{workout.calories} kcal</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Sub Component for KPI Cards
function KPICard({ title, value, icon, trend, delay }: { title: string, value: string, icon: React.ReactNode, trend: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="glass-panel p-6 rounded-lg relative overflow-hidden group"
    >
      <div className="absolute -right-6 -top-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
        {React.cloneElement(icon as React.ReactElement, { size: 100 })}
      </div>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
        <div className="p-2 bg-gray-800/50 rounded-lg">
          {icon}
        </div>
      </div>
      <div className="space-y-1">
        <h2 className="text-3xl font-bold text-white tracking-tight">{value}</h2>
        <p className="text-xs text-green-400">{trend}</p>
      </div>
    </motion.div>
  );
}

export default App;
