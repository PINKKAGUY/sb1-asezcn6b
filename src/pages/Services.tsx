import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    name: 'Deep Healing',
    description:
      'Une approche profonde pour libérer les blocages énergétiques et émotionnels.',
    price: '150€',
    duration: '90 minutes',
    image: '/images/deep-healing.jpg',
  },
  {
    name: 'Soins Sonores',
    description:
      'Harmonisez votre être grâce aux vibrations thérapeutiques des bols tibétains.',
    price: '120€',
    duration: '60 minutes',
    image: '/images/sound-healing.jpg',
  },
  {
    name: 'Breathwork',
    description:
      'Découvrez le pouvoir transformateur de la respiration consciente.',
    price: '100€',
    duration: '75 minutes',
    image: '/images/breathwork.jpg',
  },
  {
    name: 'MasterClass',
    description:
      'Approfondissez vos connaissances avec nos formations spécialisées.',
    price: '250€',
    duration: '3 heures',
    image: '/images/masterclass.jpg',
  },
];

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Découvrez notre gamme complète de services conçus pour votre transformation personnelle.
          </p>
        </motion.div>
        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {services.map((service) => (
            <article
              key={service.name}
              className="flex flex-col items-start justify-between bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="relative w-full">
                <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100" />
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2020-03-16" className="text-gray-500">
                    {service.duration}
                  </time>
                  <span className="relative z-10 rounded-full bg-indigo-50 px-3 py-1.5 font-medium text-indigo-600">
                    {service.price}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link to={`/services/${service.name.toLowerCase().replace(' ', '-')}`}>
                      <span className="absolute inset-0" />
                      {service.name}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Réserver maintenant
                </button>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}