import { motion } from 'framer-motion';

export default function Breathwork() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div 
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000')`,
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
              Breathwork
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Découvrez le pouvoir transformateur de la respiration consciente et libérez votre plein potentiel.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Techniques Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Nos Techniques
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explorez la Science du Souffle
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Des techniques de respiration ancestrales combinées aux dernières découvertes en neurosciences.
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
                  name: 'Respiration Holotropique',
                  description: 'Une technique puissante pour accéder à des états de conscience modifiés et favoriser la guérison émotionnelle.',
                },
                {
                  name: 'Cohérence Cardiaque',
                  description: 'Harmonisez votre rythme cardiaque et respiratoire pour réduire le stress et augmenter le bien-être.',
                },
                {
                  name: 'Pranayama',
                  description: 'Techniques yogiques traditionnelles pour équilibrer votre énergie vitale.',
                },
              ].map((technique) => (
                <div key={technique.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {technique.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{technique.description}</p>
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
              Bienfaits du Breathwork
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Des résultats scientifiquement prouvés pour votre corps et votre esprit
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
                description: 'Diminution significative des niveaux de cortisol et d\'anxiété',
                image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200',
              },
              {
                name: 'Clarté Mentale',
                description: 'Amélioration de la concentration et de la prise de décision',
                image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200',
              },
              {
                name: 'Vitalité Accrue',
                description: 'Augmentation des niveaux d\'énergie et de la capacité respiratoire',
                image: 'https://images.unsplash.com/photo-1506126279646-a697353d3166?q=80&w=1200',
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
              Nos Formules
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Des programmes adaptés à vos objectifs
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
                name: 'Découverte',
                price: '75€',
                description: 'Séance d\'initiation au Breathwork',
                features: [
                  'Durée : 75 minutes',
                  'Introduction aux techniques de base',
                  'Évaluation personnalisée',
                  'Guide pratique offert',
                ],
              },
              {
                name: 'Transformation',
                price: '280€',
                description: 'Programme complet de 4 séances',
                features: [
                  '4 séances de 75 minutes',
                  'Techniques avancées',
                  'Suivi personnalisé',
                  'Accès aux ressources en ligne',
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