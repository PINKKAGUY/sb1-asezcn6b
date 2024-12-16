import { motion } from 'framer-motion';
import { BookOpenIcon, VideoCameraIcon, MusicalNoteIcon, CloudArrowDownIcon } from '@heroicons/react/24/outline';

const resources = [
  {
    id: 1,
    name: 'Guide de méditation avancée',
    description: 'Techniques approfondies pour une pratique méditative enrichie',
    type: 'pdf',
    icon: BookOpenIcon,
    category: 'Méditation',
  },
  {
    id: 2,
    name: 'Masterclass Breathwork',
    description: 'Session complète de respiration guidée avec exercices pratiques',
    type: 'video',
    icon: VideoCameraIcon,
    category: 'Breathwork',
  },
  {
    id: 3,
    name: 'Collection de Mantras Sacrés',
    description: 'Sélection de mantras pour l\'harmonisation des chakras',
    type: 'audio',
    icon: MusicalNoteIcon,
    category: 'Sons Thérapeutiques',
  },
  // Add more resources
];

const categories = ['Tous', 'Méditation', 'Breathwork', 'Sons Thérapeutiques', 'Développement Personnel'];

export default function Library() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold leading-6 text-gray-900">Bibliothèque de Ressources</h1>
            <p className="mt-2 text-sm text-gray-700">
              Accédez à notre collection complète de ressources pour votre développement spirituel.
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center space-x-4 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-100"
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="relative flex flex-col overflow-hidden rounded-lg border border-gray-200 p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
                <resource.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{resource.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{resource.description}</p>
              <div className="mt-4">
                <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">
                  {resource.category}
                </span>
              </div>
              <button className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
                <CloudArrowDownIcon className="mr-2 h-5 w-5" />
                Télécharger
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}