import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const journeySteps = [
  {
    title: 'Éveil Spirituel',
    description: 'Découvrez votre essence spirituelle et connectez-vous à votre guide intérieur.',
    color: 'from-purple-500 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1200',
  },
  {
    title: 'Guérison Énergétique',
    description: 'Libérez les blocages énergétiques et restaurez l\'équilibre de vos chakras.',
    color: 'from-blue-500 to-teal-400',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200',
  },
  {
    title: 'Développement Médiumnique',
    description: 'Développez vos dons et affinez votre connexion avec le monde spirituel.',
    color: 'from-amber-400 to-orange-500',
    image: 'https://images.unsplash.com/photo-1606336140353-811e1337f414?q=80&w=1200',
  },
];

export default function SpiritualJourney() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Votre Voyage Spirituel
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Éveillez Votre Lumière Intérieure
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Embarquez dans un voyage transformateur de découverte de soi et d'éveil spirituel.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ backgroundImage: `url(${step.image})` }}
            >
              <div
                className={`absolute inset-0 -z-10 bg-gradient-to-t ${step.color} opacity-80`}
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/50 via-black/0" />
              <h3 className="mt-3 text-2xl font-bold leading-6 text-white">
                {step.title}
              </h3>
              <p className="mt-6 leading-6 text-gray-100">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Commencez Votre Voyage
          </Link>
        </div>
      </div>
    </div>
  );
}