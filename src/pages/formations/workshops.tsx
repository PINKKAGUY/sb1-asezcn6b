import { motion } from 'framer-motion';

const workshops = [
  {
    title: 'Initiation à la Méditation',
    date: '15 Mars 2024',
    duration: '1 journée',
    price: '180€',
    description: 'Découvrez les bases de la méditation et développez votre pratique personnelle.',
    image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200'
  },
  {
    title: 'Breathwork Avancé',
    date: '22 Mars 2024',
    duration: '2 jours',
    price: '320€',
    description: 'Approfondissez votre pratique du breathwork avec des techniques avancées.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200'
  },
  {
    title: 'Sound Healing',
    date: '5 Avril 2024',
    duration: '1 journée',
    price: '220€',
    description: 'Explorez le pouvoir thérapeutique des bols tibétains et des instruments sacrés.',
    image: 'https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?q=80&w=1200'
  }
];

export default function Workshops() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Ateliers & Formations
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Développez vos compétences et approfondissez votre pratique spirituelle
              avec nos ateliers spécialisés.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Workshops Grid */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{workshop.title}</h3>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <svg
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {workshop.date}
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <svg
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {workshop.duration}
                </div>
                <p className="mt-4 text-gray-600">{workshop.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600">{workshop.price}</span>
                  <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    S'inscrire
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}