import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/20/solid';

const events = [
  {
    id: 1,
    name: 'Séance Deep Healing',
    description: 'Session individuelle de guérison énergétique profonde',
    date: '2024-03-15',
    time: '14:00',
    location: 'En ligne',
    type: 'deep-healing',
  },
  {
    id: 2,
    name: 'Soins Sonores',
    description: 'Harmonisation par les bols tibétains',
    date: '2024-03-17',
    time: '10:30',
    location: 'Centre Pure Energy',
    type: 'sound-healing',
  },
  {
    id: 3,
    name: 'Breathwork',
    description: 'Séance de respiration consciente guidée',
    date: '2024-03-20',
    time: '18:00',
    location: 'En ligne',
    type: 'breathwork',
  },
];

export default function UpcomingEvents() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-lg bg-white shadow"
    >
      <div className="p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Événements à venir
        </h3>
        <div className="mt-6 flow-root">
          <ul role="list" className="-my-5 divide-y divide-gray-200">
            {events.map((event) => (
              <li key={event.id} className="py-5">
                <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
                  <h3 className="text-sm font-semibold text-gray-800">
                    <a href="#" className="hover:underline focus:outline-none">
                      {event.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-2">{event.description}</p>
                  <div className="mt-2 flex space-x-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <ClockIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <a
            href="/dashboard/events"
            className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Voir tous les événements
          </a>
        </div>
      </div>
    </motion.div>
  );
}