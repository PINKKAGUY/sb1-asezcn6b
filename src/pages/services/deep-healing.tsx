import { motion } from 'framer-motion';

export default function DeepHealing() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div 
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000')`,
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
              Deep Healing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Une approche profonde et transformatrice pour libérer les blocages énergétiques
              et restaurer l'équilibre naturel de votre être.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Bienfaits
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Transformez Votre Vie
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Le Deep Healing vous permet de vous reconnecter à votre essence et de libérer
              les schémas limitants qui vous empêchent d'avancer.
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
                  name: 'Libération Émotionnelle',
                  description: 'Libérez les émotions stagnantes et les traumatismes stockés dans votre corps.',
                },
                {
                  name: 'Équilibre Énergétique',
                  description: 'Restaurez l\'harmonie naturelle de vos centres énergétiques.',
                },
                {
                  name: 'Transformation Profonde',
                  description: 'Transformez les schémas limitants en opportunités de croissance.',
                },
              ].map((benefit) => (
                <div key={benefit.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {benefit.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{benefit.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tarifs & Forfaits
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Choisissez la formule qui correspond le mieux à vos besoins
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
                name: 'Séance Individuelle',
                price: '120€',
                description: 'Une séance personnalisée de Deep Healing',
                features: [
                  'Durée : 90 minutes',
                  'Bilan énergétique complet',
                  'Techniques personnalisées',
                  'Suivi post-séance',
                ],
              },
              {
                name: 'Pack Transformation',
                price: '450€',
                description: 'Programme complet de 4 séances',
                features: [
                  '4 séances de 90 minutes',
                  'Suivi personnalisé',
                  'Accès aux ressources exclusives',
                  'Support entre les séances',
                ],
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className="flex flex-col justify-between rounded-3xl bg-white/5 px-8 py-10 ring-1 ring-white/10 xl:px-10"
              >
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-white">
                    {tier.name}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-300">
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-white">
                      {tier.price}
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-300"
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <svg
                          className="h-6 w-5 flex-none text-white"
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