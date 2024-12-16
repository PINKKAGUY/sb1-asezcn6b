import { motion } from 'framer-motion';
import {
  ClockIcon,
  SparklesIcon,
  StarIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

const stats = [
  {
    name: 'Heures de pratique',
    value: '24.5',
    unit: 'heures',
    icon: ClockIcon,
    change: '+12%',
    changeType: 'positive',
  },
  {
    name: 'Niveau d\'énergie',
    value: '85',
    unit: '%',
    icon: SparklesIcon,
    change: '+5%',
    changeType: 'positive',
  },
  {
    name: 'Sessions complétées',
    value: '12',
    unit: 'sessions',
    icon: StarIcon,
    change: '+3',
    changeType: 'positive',
  },
  {
    name: 'Bien-être général',
    value: '92',
    unit: '%',
    icon: HeartIcon,
    change: '+8%',
    changeType: 'positive',
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
        >
          <dt>
            <div className="absolute rounded-md bg-indigo-500 p-3">
              <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">{stat.name}</p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">
              {stat.value}
              <span className="ml-1 text-sm font-medium text-gray-500">{stat.unit}</span>
            </p>
            <p
              className={`
                ml-2 flex items-baseline text-sm font-semibold
                ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}
              `}
            >
              {stat.change}
            </p>
          </dd>
        </motion.div>
      ))}
    </div>
  );
}