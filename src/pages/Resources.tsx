import { motion } from 'framer-motion';
import { BookOpenIcon, VideoCameraIcon, MusicalNoteIcon, CloudArrowDownIcon } from '@heroicons/react/24/outline';

const resources = [
  {
    id: 1,
    title: 'Guide de Méditation Avancée',
    description: 'Un guide complet pour approfondir votre pratique méditative',
    type: 'pdf',
    category: 'Méditation',
    image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200',
    author: 'Sarah Martin',
    duration: '45 pages',
    level: 'Avancé',
    price: 'Premium'
  },
  {
    id: 2,
    title: 'Séance de Breathwork Guidée',
    description: 'Une séance complète de respiration transformative',
    type: 'video',
    category: 'Breathwork',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200',
    author: 'Marc Dubois',
    duration: '45 min',
    level: 'Intermédiaire',
    price: 'Gratuit'
  },
  {
    id: 3,
    title: 'Collection de Sons Thérapeutiques',
    description: 'Une sélection de sons pour l\'harmonisation des chakras',
    type: 'audio',
    category: 'Sound Healing',
    image: 'https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?q=80&w=1200',
    author: 'Julie Chen',
    duration: '60 min',
    level: 'Tous niveaux',
    price: 'Premium'
  }
];

const categories = [
  { name: 'Tous', count: 45 },
  { name: 'Méditation', count: 15 },
  { name: 'Sound Healing', count: 12 },
  { name: 'Breathwork', count: 8 },
  { name: 'Développement Personnel', count: 10 }
];

const filters = [
  {
    name: 'Type',
    options: ['Tous', 'PDF', 'Vidéo', 'Audio']
  },
  {
    name: 'Niveau',
    options: ['Tous niveaux', 'Débutant', 'Intermédiaire', 'Avancé']
  },
  {
    name: 'Accès',
    options: ['Tous', 'Gratuit', 'Premium']
  }
];

const getResourceIcon = (type: string) => {
  switch (type) {
    case 'pdf':
      return BookOpenIcon;
    case 'video':
      return VideoCameraIcon;
    case 'audio':
      return MusicalNoteIcon;
    default:
      return BookOpenIcon;
  }
};

export default function Resources() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div 
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2000')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Bibliothèque
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Explorez notre collection de ressources pour approfondir votre pratique et enrichir vos connaissances.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar */}
          <motion.aside
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Catégories</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <button className="flex items-center justify-between w-full text-left">
                    <span className="text-gray-600 hover:text-gray-900">{category.name}</span>
                    <span className="text-gray-400 text-sm">{category.count}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-6">
              {filters.map((filter) => (
                <div key={filter.name}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{filter.name}</h3>
                  <ul className="space-y-3">
                    {filter.options.map((option) => (
                      <li key={option}>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <span className="ml-2 text-gray-600">{option}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.aside>

          {/* Main Content */}
          <main className="mt-8 lg:col-span-9 lg:mt-0">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource, index) => {
                const Icon = getResourceIcon(resource.type);
                return (
                  <motion.div
                    key={resource.id}
                    className="relative flex flex-col overflow-hidden rounded-lg border border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="aspect-w-3 aspect-h-2">
                      <img
                        src={resource.image}
                        alt={resource.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-2">
                        <Icon className="h-5 w-5 text-indigo-600" />
                        <span className="text-sm font-medium text-gray-500">{resource.type.toUpperCase()}</span>
                      </div>
                      <h3 className="mt-2 text-xl font-semibold text-gray-900">{resource.title}</h3>
                      <p className="mt-2 text-gray-600">{resource.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">
                          {resource.category}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600">
                          {resource.level}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                          {resource.price}
                        </span>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          Par {resource.author} • {resource.duration}
                        </div>
                        <button className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
                          <CloudArrowDownIcon className="h-5 w-5 mr-1" />
                          <span className="text-sm">Télécharger</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </main>
        </div>
      </div>

      {/* Premium Access CTA */}
      <div className="bg-indigo-600 mt-16">
        <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Accédez à toutes nos ressources</span>
            <span className="block text-indigo-200">Devenez membre Premium dès aujourd'hui</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Voir les offres
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}