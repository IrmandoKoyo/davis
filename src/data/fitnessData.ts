export interface WorkoutSession {
  id: string;
  memberId: string;
  memberName: string;
  date: string;
  duration: number; // in minutes
  calories: number;
  type: 'Cardio' | 'Strength' | 'Yoga' | 'HIIT';
}

export const kpiData = {
  totalUsers: 1245,
  avgWorkoutDuration: 45, // minutes
  totalCaloriesBurned: 154200, // this month
  goalCompletionRate: 87, // %
};

// Line Chart Data: Calories burned trend over the last 7 days
export const caloriesTrendData = [
  { day: 'Mon', calories: 420 },
  { day: 'Tue', calories: 510 },
  { day: 'Wed', calories: 380 },
  { day: 'Thu', calories: 650 },
  { day: 'Fri', calories: 480 },
  { day: 'Sat', calories: 850 },
  { day: 'Sun', calories: 720 },
];

// Bar Chart Data: Comparison of average workout duration per day
export const workoutDurationData = [
  { day: 'Mon', avgDuration: 30 },
  { day: 'Tue', avgDuration: 45 },
  { day: 'Wed', avgDuration: 35 },
  { day: 'Thu', avgDuration: 50 },
  { day: 'Fri', avgDuration: 40 },
  { day: 'Sat', avgDuration: 75 },
  { day: 'Sun', avgDuration: 60 },
];

// Pie Chart Data: Distribution of workout types
export const workoutTypeDistribution = [
  { type: 'Strength', value: 45 },
  { type: 'Cardio', value: 30 },
  { type: 'HIIT', value: 15 },
  { type: 'Yoga', value: 10 },
];

// Table Data: Recent workout sessions
export const recentWorkouts: WorkoutSession[] = [
  { id: 'W001', memberId: 'M102', memberName: 'Alex Jordan', date: '2026-04-05', duration: 45, calories: 520, type: 'Cardio' },
  { id: 'W002', memberId: 'M105', memberName: 'Sarah Smith', date: '2026-04-05', duration: 60, calories: 450, type: 'Strength' },
  { id: 'W003', memberId: 'M211', memberName: 'Michael Chen', date: '2026-04-04', duration: 30, calories: 380, type: 'HIIT' },
  { id: 'W004', memberId: 'M188', memberName: 'Emma Davis', date: '2026-04-04', duration: 45, calories: 210, type: 'Yoga' },
  { id: 'W005', memberId: 'M090', memberName: 'Chris Wilson', date: '2026-04-03', duration: 90, calories: 810, type: 'Strength' },
];

// Key Insights Content
export const dashboardInsights = {
  insight: 'Member paling aktif di akhir pekan (Sabtu & Minggu). Kalori terbakar dan durasi workout memuncak drastis pada hari tersebut.',
  trend: 'Terdapat minat yang besar pada latihan beban (Strength Training) mencapai 45% dari keseluruhan aktivitas.',
  recommendation: 'Jadwalkan kelas tambahan atau promosikan produk suplemen dan personal training khusus Strength pada hari Sabtu pagi untuk memaksimalkan retensi dan profit gym.'
};
