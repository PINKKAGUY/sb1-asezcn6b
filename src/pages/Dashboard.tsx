import { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardStats from '../components/dashboard/DashboardStats';
import UpcomingEvents from '../components/dashboard/UpcomingEvents';
import JourneyProgress from '../components/dashboard/JourneyProgress';
import ResourceLibrary from '../components/dashboard/ResourceLibrary';
import CommunityFeed from '../components/dashboard/CommunityFeed';
import MeditationTimer from '../components/dashboard/MeditationTimer';
import ChakraBalance from '../components/dashboard/ChakraBalance';
import MoodTracker from '../components/dashboard/MoodTracker';

export default function Dashboard() {
  const [selectedView, setSelectedView] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader selectedView={selectedView} onViewChange={setSelectedView} />
      
      <main className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <DashboardStats />
            
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <UpcomingEvents />
              <JourneyProgress />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <ResourceLibrary />
              <CommunityFeed />
              <MeditationTimer />
              <ChakraBalance />
              <MoodTracker />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}