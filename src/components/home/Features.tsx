import { motion } from 'framer-motion';
import {
  SparklesIcon,
  HeartIcon,
  UserGroupIcon,
  MoonIcon,
  SunIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Guidance Spirituelle',
    description: 'Recevez des messages de guidance et connectez-vous à votre sagesse intérieure.',
    icon: SparklesIcon,
  },
  {
    name: 'Soins Sonores',
    description: 'Harmonisez vos chakras grâce aux vibrations sacrées des bols tibétains et des mantras.',
    icon: HeartIcon,
  },
  {
    name: 'Méditation Guidée',
    description: 'Explorez des méditations profondes pour vous connecter à votre essence divine.',
    icon: MoonIcon,
  },
  {
    name: 'Lecture d\'Aura',
    description: 'Découvrez les couleurs de votre aura et leur signification pour votre chemin de vie.',
    icon: SunIcon,
  },
  {
    name: 'Cercle Sacré',
    description: 'Rejoignez notre communauté spirituelle pour partager et grandir ensemble.',
    icon: UserGroupIcon,
  },
  {
    name: 'Rituels Énergétiques',
    description: 'Apprenez des rituels puissants pour manifester vos intentions et purifier votre énergie.',
    icon: StarIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Éveil Spirituel
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Découvrez Nos Pratiques Sacrées
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explorez nos pratiques spirituelles ancestrales pour éveiller votre conscience
            et vous connecter à votre essence divine.
          </p>
        </div>

        <motion.div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}