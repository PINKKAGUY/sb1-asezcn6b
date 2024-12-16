import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, MapPinIcon, VideoCameraIcon } from '@heroicons/react/24/outline';

const events = [
  {
    id: 1,
    name: 'Séance Deep Healing',
    description: 'Session individuelle de guérison énergétique profonde',
    date: '2024-03-15',
    time: '14:00',
    location: 'En ligne',
    type: 'deep-healing',
    instructor: 'Sarah M.',
    spots: 5,
  },
  {
    id: 2,
    name: 'Soins Sonores',
    description: 'Harmonisation par les bols tibétains',
    date: '2024-03-17',
    time: '10:30',
    location: 'Centre Pure Energy',
    type: 'sound-healing',
    instructor: 'Jean P.',
    spots: 8,
  },
  // Add more events
];

const eventTypes = ['Tous', 'Deep Healing', 'Soins Sonores', 'Breathwork', 'Méditation'];

export default function AllEvents() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold leading-6 text-gray-900">Événements à Venir</h1>
            <p className="mt-2 text-sm text-gray-700">
              Découvrez et inscrivez-vous à nos prochains événements spirituels.
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center space-x-4 overflow-x-auto pb-4">
          {eventTypes.map((type) => (
            <button
              key={type}
              className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-100"
            >
              {type}
            </button>
          ))}
        </div>

        <motion.div 
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="relative flex flex-col overflow-hidden rounded-lg border border-gray-200"
            >
              <div className="flex-1 p-6">
                <div className="flex items-center">
                  <h3 className="text-lg font-medium text-gray-900">{event.name}</h3>
                  {event.location === 'En ligne' && (
                    <VideoCameraIcon className="ml-2 h-5 w-5 text-gray-400" />
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-500">{event.description}</p>
                <div className="mt-4 flex flex-col space-y-2">
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
                <div className="mt-4">
                  <span className="text-sm text-gray-500">
                    Animé par {event.instructor} • {event.spots} places disponibles
                  </span>
                </div>
              </div>
              <div className="border-t border-gray-200 bg-gray-50 px-6 py-3">
                <button className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                  S'inscrire
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}