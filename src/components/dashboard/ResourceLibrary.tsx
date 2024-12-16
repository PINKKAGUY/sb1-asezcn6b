import { motion } from 'framer-motion';
import {
  BookOpenIcon,
  VideoCameraIcon,
  MusicalNoteIcon,
} from '@heroicons/react/24/outline';

const resources = [
  {
    id: 1,
    name: 'Guide de méditation',
    description: 'Techniques de base pour débutants',
    type: 'pdf',
    icon: BookOpenIcon,
  },
  {
    id: 2,
    name: 'Séance de Breathwork',
    description: 'Exercices de respiration guidée',
    type: 'video',
    icon: VideoCameraIcon,
  },
  {
    id: 3,
    name: 'Sons thérapeutiques',
    description: 'Collection de mantras sacrés',
    type: 'audio',
    icon: MusicalNoteIcon,
  },
];

export default function ResourceLibrary() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-lg bg-white shadow"
    >
      <div className="p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Bibliothèque de ressources
        </h3>
        <div className="mt-6 flow-root">
          <ul role="list" className="divide-y divide-gray-200">
            {resources.map((resource) => (
              <li key={resource.id} className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
                      <resource.icon
                        className="h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900">
                      {resource.name}
                    </p>
                    <p className="truncate text-sm text-gray-500">
                      {resource.description}
                    </p>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Voir
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <a
            href="/dashboard/library"
            className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Accéder à la bibliothèque
          </a>
        </div>
      </div>
    </motion.div>
  );
}