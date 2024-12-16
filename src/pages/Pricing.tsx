import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
  {
    name: '6 MOIS',
    id: 'tier-6-months',
    href: '#',
    priceMonthly: '149,16€',
    price: '895€',
    description: 'Le meilleur choix pour débuter votre transformation.',
    features: [
      'Accès à tous les services',
      'Sessions illimitées de Deep Healing',
      'Soins Sonores hebdomadaires',
      'Breathwork guidé',
      'Support communautaire',
      'Ressources exclusives',
    ],
    featured: false,
  },
  {
    name: '1 AN',
    id: 'tier-12-months',
    href: '#',
    priceMonthly: '129,58€',
    price: '1.555€',
    description: 'La solution complète pour une transformation durable.',
    features: [
      'Tous les avantages du forfait 6 mois',
      'Économisez 235€ par rapport au forfait 6 mois',
      'MasterClass mensuelles exclusives',
      'Séances privées trimestrielles',
      'Accès prioritaire aux événements',
      'Programme personnalisé',
    ],
    featured: true,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Tarifs</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Investissez dans votre transformation
          </p>
        </motion.div>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Choisissez le forfait qui correspond le mieux à vos besoins et commencez votre voyage vers
          une meilleure version de vous-même.
        </motion.p>
        <motion.div
          className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-gray-900 ring-gray-900'
                  : 'ring-gray-200 bg-white',
                'rounded-3xl p-8 ring-1 xl:p-10'
              )}
            >
              <h3
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-lg font-semibold leading-8'
                )}
              >
                {tier.name}
              </h3>
              <p
                className={classNames(
                  tier.featured ? 'text-gray-300' : 'text-gray-600',
                  'mt-4 text-sm leading-6'
                )}
              >
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span
                  className={classNames(
                    tier.featured ? 'text-white' : 'text-gray-900',
                    'text-4xl font-bold tracking-tight'
                  )}
                >
                  {tier.price}
                </span>
                <span
                  className={classNames(
                    tier.featured ? 'text-gray-300' : 'text-gray-600',
                    'text-sm font-semibold leading-6'
                  )}
                >
                  ({tier.priceMonthly}/mois)
                </span>
              </p>
              <a
                href={tier.href}
                className={classNames(
                  tier.featured
                    ? 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white'
                    : 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Choisir ce forfait
              </a>
              <ul
                className={classNames(
                  tier.featured ? 'text-gray-300' : 'text-gray-600',
                  'mt-8 space-y-3 text-sm leading-6 xl:mt-10'
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className={classNames(
                        tier.featured ? 'text-white' : 'text-indigo-600',
                        'h-6 w-5 flex-none'
                      )}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}