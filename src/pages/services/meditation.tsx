import { motion } from 'framer-motion';

export default function Meditation() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div 
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2000')`,
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
              Méditation
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Explorez la paix intérieure et développez votre conscience à travers nos pratiques méditatives guidées.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Approaches Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Nos Approches
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Chemins vers la Pleine Conscience
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Découvrez différentes techniques de méditation adaptées à vos besoins et à votre niveau.
            </p>
          </div>

          <motion.div
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: 'Méditation Pleine Conscience',
                  description: 'Développez votre capacité à être présent dans l\'instant et observez vos pensées sans jugement.',
                },
                {
                  name: 'Méditation Transcendantale',
                  description: 'Accédez à un état de conscience pure à travers la répétition silencieuse de mantras.',
                },
                {
                  name: 'Méditation Guidée',
                  description: 'Laissez-vous guider à travers des visualisations et des exercices de respiration.',
                },
              ].map((approach) => (
                <div key={approach.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {approach.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{approach.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Bienfaits de la Méditation
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Des avantages scientifiquement prouvés pour votre corps et votre esprit
            </p>
          </div>

          <motion.div
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              {
                name: 'Réduction du Stress',
                description: 'Diminution de l\'anxiété et amélioration de la gestion du stress',
                image: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=1200',
              },
              {
                name: 'Clarté Mentale',
                description: 'Amélioration de la concentration et de la mémoire',
                image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=1200',
              },
              {
                name: 'Équilibre Émotionnel',
                description: 'Meilleure gestion des émotions et développement de la compassion',
                image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1200',
              },
            ].map((benefit) => (
              <motion.div
                key={benefit.name}
                className="relative overflow-hidden rounded-2xl bg-white shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={benefit.image}
                  alt={benefit.name}
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="font-semibold leading-7 text-white">{benefit.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-200">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nos Programmes
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Des formules adaptées à votre parcours méditatif
            </p>
          </div>

          <motion.div
            className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              {
                name: 'Initiation',
                price: '60€',
                description: 'Programme d\'introduction à la méditation',
                features: [
                  'Séance de 60 minutes',
                  'Apprentissage des bases',
                  'Guide de méditation offert',
                  'Support audio pour la pratique',
                ],
              },
              {
                name: 'Immersion',
                price: '220€',
                description: 'Programme approfondi de 4 séances',
                features: [
                  '4 séances de 60 minutes',
                  'Techniques avancées',
                  'Suivi personnalisé',
                  'Accès à la bibliothèque méditative',
                ],
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className="flex flex-col justify-between rounded-3xl bg-white px-8 py-10 ring-1 ring-gray-200 xl:px-10"
              >
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {tier.name}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      {tier.price}
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <svg
                          className="h-6 w-5 flex-none text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  className="mt-8 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Réserver maintenant
                </button>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}